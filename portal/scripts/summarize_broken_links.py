"""
summarize_broken_links.py

Reads links_extracted.json and writes links_extracted_summary.json.
Broken URLs (exists=false) are grouped by source file, then by status
label, with the URLs listed under each label.

Output format:
{
  "checked": 2551,
  "broken": 617,
  "unchecked": 0,
  "by_file": {
    "pages/contact.js": {
      "999 - Bot-blocked (accessible in browser)": [
        "https://www.linkedin.com/..."
      ],
      "404 - Not Found": [
        "https://gone.example.com"
      ]
    },
    ...
  }
}
"""

import json
import os
from collections import defaultdict

INPUT_FILE  = os.path.join(os.path.dirname(__file__), "links_extracted.json")
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "links_extracted_summary.json")

# Human-readable labels for status codes and error strings.
# Standard HTTP codes follow RFC 9110; non-standard / error labels are noted.
STATUS_LABELS = {
    # Non-standard
    "999":              "999 - Bot-blocked (accessible in browser)",
    # Client errors
    "400":              "400 - Bad Request",
    "401":              "401 - Unauthorized",
    "403":              "403 - Forbidden (may be bot protection)",
    "404":              "404 - Not Found",
    "405":              "405 - Method Not Allowed (may be POST-only endpoint)",
    "406":              "406 - Not Acceptable",
    "407":              "407 - Proxy Authentication Required",
    "408":              "408 - Request Timeout",
    "409":              "409 - Conflict",
    "410":              "410 - Gone (permanently removed)",
    "429":              "429 - Too Many Requests (rate-limited)",
    # Server errors
    "500":              "500 - Internal Server Error",
    "501":              "501 - Not Implemented",
    "502":              "502 - Bad Gateway",
    "503":              "503 - Service Unavailable",
    "504":              "504 - Gateway Timeout",
    # Connection-level errors
    "timeout":          "timeout - Server did not respond in time",
    "connection_error": "connection_error - DNS failure or server unreachable",
    "ssl_error":        "ssl_error - Certificate or TLS handshake problem",
    "too_many_redirects": "too_many_redirects - Redirect loop detected",
    "unknown":          "unknown - No status recorded (re-run check_links.py)",
}


def status_label(code: str) -> str:
    return STATUS_LABELS.get(code, f"{code} - HTTP {code}")


def main():
    with open(INPUT_FILE, encoding="utf-8") as f:
        data = json.load(f)

    checked   = [e for e in data if "exists" in e]
    unchecked = [e for e in data if "exists" not in e]
    broken    = [e for e in checked if not e["exists"]]

    # Build: file -> status_label -> [url, ...]
    by_file: dict[str, dict[str, list[str]]] = defaultdict(lambda: defaultdict(list))
    for entry in broken:
        label = status_label(entry.get("exists_status", "unknown"))
        for file in entry["files"]:
            by_file[file][label].append(entry["url"])

    # Sort everything for stable, readable output
    by_file_sorted = {
        file: {
            label: sorted(urls)
            for label, urls in sorted(by_code.items())
        }
        for file, by_code in sorted(by_file.items())
    }

    summary = {
        "checked":   len(checked),
        "broken":    len(broken),
        "unchecked": len(unchecked),
        "by_file":   by_file_sorted,
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print(f"Checked  : {len(checked)}")
    print(f"Broken   : {len(broken)}")
    print(f"Unchecked: {len(unchecked)}")
    print(f"Summary written to: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
