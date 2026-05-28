"""
extract_links.py

Scans the web application source files and collects all HTTP/HTTPS URLs,
writing the results to links_extracted.json in the same folder.

Scanned locations (full scan):
  pages/       - Next.js page components (.js)
  components/  - React components (.js)
  resources/   - JSON data files (.json)  [excludes resources/conf_videos/]
  public/articles/ - Markdown articles (.md)

Usage:
    python extract_links.py              # full scan
    python extract_links.py --file pages/contact.js  # single file only
"""

import argparse
import json
import re
import os
from collections import defaultdict

# Root of the project relative to this script (one level up)
PROJECT_ROOT = os.path.join(os.path.dirname(__file__), "..")

# Folders and extensions to scan
SCAN_TARGETS = [
    ("pages", [".js"]),
    ("components", [".js"]),
    ("resources", [".json"]),
    (os.path.join("public", "articles"), [".md"]),
]

# Folders (relative to PROJECT_ROOT, forward slashes) to skip during scanning
IGNORE_FOLDERS = {
    "resources/conf_videos",
}

# Regex: match http:// or https:// URLs, stopping at whitespace or common delimiters
URL_PATTERN = re.compile(r'https?://[^\s\'"<>)\]},\\]+')

# Characters that are often trailing noise after a real URL
TRAILING_NOISE = set('.,;:!?\'")')


def clean_url(url):
    """Strip trailing punctuation noise from a matched URL."""
    while url and url[-1] in TRAILING_NOISE:
        url = url[:-1]
    return url


def scan_file(filepath):
    """Return a list of unique URLs found in a file."""
    with open(filepath, encoding="utf-8", errors="replace") as f:
        content = f.read()
    found = set()
    for match in URL_PATTERN.findall(content):
        url = clean_url(match)
        if url:
            found.add(url)
    return sorted(found)


def relative_path(filepath):
    """Return a forward-slash path relative to the project root."""
    rel = os.path.relpath(filepath, PROJECT_ROOT)
    return rel.replace(os.sep, "/")


def main():
    parser = argparse.ArgumentParser(description="Extract URLs from source files")
    parser.add_argument(
        "--file", metavar="PATH",
        help="Scan a single file only (path relative to project root, "
             "e.g. pages/contact.js). Overrides full-scan behaviour."
    )
    args = parser.parse_args()

    url_to_files = defaultdict(set)

    if args.file:
        filepath = os.path.join(PROJECT_ROOT, args.file.replace("/", os.sep))
        if not os.path.isfile(filepath):
            print(f"Error: file not found: {filepath}")
            raise SystemExit(1)
        rel = relative_path(filepath)
        for url in scan_file(filepath):
            url_to_files[url].add(rel)
        print(f"Scanning single file: {rel}")
    else:
        for folder, extensions in SCAN_TARGETS:
            folder_path = os.path.join(PROJECT_ROOT, folder)
            if not os.path.isdir(folder_path):
                print(f"  [skip] {folder}/ not found")
                continue
            for dirpath, _, filenames in os.walk(folder_path):
                rel_dir = os.path.relpath(dirpath, PROJECT_ROOT).replace(os.sep, "/")
                if rel_dir in IGNORE_FOLDERS:
                    continue
                for filename in filenames:
                    if any(filename.endswith(ext) for ext in extensions):
                        filepath = os.path.join(dirpath, filename)
                        urls = scan_file(filepath)
                        rel = relative_path(filepath)
                        for url in urls:
                            url_to_files[url].add(rel)

    results = [
        {"url": url, "files": sorted(files)}
        for url, files in sorted(url_to_files.items())
    ]

    output_path = os.path.join(os.path.dirname(__file__), "links_extracted.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"Found {len(results)} unique URLs.")
    print(f"Output written to: {output_path}")


if __name__ == "__main__":
    main()
