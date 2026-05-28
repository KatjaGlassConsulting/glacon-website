"""
check_links.py

Reads links_extracted.json, checks whether each URL is reachable,
and writes two fields back into the same file for each checked entry:

  "exists"        true/false  — false when HTTP >= 400 or connection fails
  "exists_status" string      — HTTP status code (e.g. "200", "404") or an
                                error label: "timeout", "connection_error",
                                "ssl_error", "too_many_redirects"

Common false positives:
  999  LinkedIn and some other sites block automated requests with this
       non-standard status even though the page is accessible in a browser.
  4xx  Form POST endpoints (e.g. PayPal /cgi-bin/webscr) reject HEAD/GET
       requests but work fine when submitted as a form.

HEAD is tried first (faster); if the server returns 405/501 a GET is used.

Usage:
    python check_links.py [--max N] [--workers N] [--timeout N] [--recheck-failed]

Options:
    --max             Maximum number of URLs to check, starting from the first
                      entry in the file (default: 100). Ignored when
                      --recheck-failed is set.
    --workers         Number of parallel threads (default: 10)
    --timeout         Per-request timeout in seconds (default: 10)
    --recheck-failed  Re-check only URLs that previously failed with a status
                      other than 404 (e.g. timeout, connection_error, 999, 403).
                      Useful for retrying transient failures without re-checking
                      confirmed missing pages. Ignores --max.
"""

import argparse
import json
import os
import socket
import ssl
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

INPUT_FILE = os.path.join(os.path.dirname(__file__), "links_extracted.json")

# Browser-like User-Agent to reduce 403s from bot-blocking servers
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    )
}

# SSL context that skips certificate verification (avoids failures on
# sites with expired/self-signed certs — we only care about reachability)
SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE


def check_url(url: str, timeout: int) -> tuple[bool, str]:
    """
    Return (exists, status_string).

    exists        — True when HTTP status < 400
    status_string — HTTP status code as string, or an error label
    """
    last_error = "connection_error"
    for method in ("HEAD", "GET"):
        req = urllib.request.Request(url, headers=HEADERS, method=method)
        try:
            with urllib.request.urlopen(req, timeout=timeout, context=SSL_CTX) as resp:
                code = resp.status
                return code < 400, str(code)
        except urllib.error.HTTPError as e:
            if method == "HEAD" and e.code in (405, 501):
                last_error = str(e.code)
                continue  # retry with GET
            return e.code < 400, str(e.code)
        except urllib.error.URLError as e:
            reason = str(e.reason)
            if "timed out" in reason.lower() or isinstance(e.reason, socket.timeout):
                last_error = "timeout"
            elif "ssl" in reason.lower() or "certificate" in reason.lower():
                last_error = "ssl_error"
            else:
                last_error = "connection_error"
            if method == "HEAD":
                continue
        except TimeoutError:
            last_error = "timeout"
            if method == "HEAD":
                continue
        except Exception:
            last_error = "connection_error"
            if method == "HEAD":
                continue
    return False, last_error


def main():
    parser = argparse.ArgumentParser(description="Check links in links_extracted.json")
    parser.add_argument(
        "--max", type=int, default=100, metavar="N",
        help="Maximum number of URLs to check (default: 100)"
    )
    parser.add_argument(
        "--workers", type=int, default=10, metavar="N",
        help="Number of parallel threads (default: 10)"
    )
    parser.add_argument(
        "--timeout", type=int, default=10, metavar="N",
        help="Per-request timeout in seconds (default: 10)"
    )
    parser.add_argument(
        "--recheck-failed", action="store_true",
        help="Re-check only previously failed URLs whose status is not 404. "
             "Ignores --max."
    )
    args = parser.parse_args()

    with open(INPUT_FILE, encoding="utf-8") as f:
        data = json.load(f)

    if args.recheck_failed:
        # Indices of entries that failed for a reason other than 404
        to_check_indices = [
            i for i, e in enumerate(data)
            if not e.get("exists", True) and e.get("exists_status") != "404"
        ]
        to_check = [data[i] for i in to_check_indices]
        skipped  = []  # all entries are updated in-place; nothing is skipped
        print(f"Rechecking {len(to_check)} previously failed URLs "
              f"(excluding 404s) with {args.workers} workers "
              f"(timeout {args.timeout}s) ...")
    else:
        to_check_indices = list(range(args.max))
        to_check = data[: args.max]
        skipped  = data[args.max :]
        print(f"Checking {len(to_check)} URLs with {args.workers} workers "
              f"(timeout {args.timeout}s) ...")

    results = {}
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {
            pool.submit(check_url, entry["url"], args.timeout): i
            for i, entry in enumerate(to_check)
        }
        completed = 0
        for future in as_completed(futures):
            i = futures[future]
            exists, status = future.result()
            results[i] = (exists, status)
            completed += 1
            label = "OK  " if exists else "FAIL"
            print(f"  [{completed:>3}/{len(to_check)}] {label} {status:<20} {to_check[i]['url']}")

    if args.recheck_failed:
        # Write results back into their original positions in data
        for local_i, data_i in enumerate(to_check_indices):
            exists, status = results[local_i]
            data[data_i]["exists"]        = exists
            data[data_i]["exists_status"] = status
        updated = data
    else:
        for i, entry in enumerate(to_check):
            exists, status = results[i]
            entry["exists"]        = exists
            entry["exists_status"] = status
        updated = to_check + skipped

    with open(INPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(updated, f, indent=2, ensure_ascii=False)

    checked_true  = sum(1 for exists, _ in results.values() if exists)
    checked_false = len(results) - checked_true

    print(f"\nDone. {checked_true}/{len(to_check)} URLs exist.")

    if args.recheck_failed and checked_false:
        from collections import Counter
        status_counts = Counter(
            status for exists, status in results.values() if not exists
        )
        print(f"Still failing: {checked_false}/{len(to_check)}")
        for status, n in sorted(status_counts.items(), key=lambda x: -x[1]):
            print(f"  {status}: {n}")

    print(f"Results written to: {INPUT_FILE}")


if __name__ == "__main__":
    main()
