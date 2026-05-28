# Jekyll / GitHub Pages Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> **GIT RULE (overrides skill default):** The repository owner manages git. Do **NOT** run `git add`, `git commit`, or any commit step. Leave all changes in the working tree for the owner to commit. There are intentionally no commit steps below.

**Goal:** Convert the PHP-templated GlaCon site to a Jekyll site that GitHub Pages builds and serves at the custom domain `www.glacon.eu`.

**Architecture:** The three PHP partials (`echo`'d static HTML) become Jekyll `_includes`. Each page gets YAML front matter and swaps `<?php include ?>` for `{% include %}`. GitHub Pages builds with Jekyll on push; local preview is via the Jekyll Docker image.

**Tech Stack:** Jekyll (github-pages gem), Liquid includes, Docker (preview), GitHub Pages (hosting).

**Spec:** `docs/superpowers/specs/2026-05-28-jekyll-github-pages-design.md`

---

## File Structure

**Create:**
- `_config.yml` — Jekyll config + exclude list
- `Gemfile` — pins `github-pages` gem (matches GitHub build in Docker)
- `CNAME` — custom domain
- `_includes/head.html` — from `components/header_includes.php`
- `_includes/header.html` — from `components/header.php`
- `_includes/footer.html` — from `components/footer.php`
- `404.html` — from `error404.html`

**Modify:**
- 10 page files — add front matter, swap includes
- `README.md` — replace dev/deploy notes

**Delete:**
- `404.php`, `router.php`, `components/` (3 files), `error404.html`

---

## Task 1: Jekyll scaffolding

**Files:**
- Create: `_config.yml`
- Create: `Gemfile`
- Create: `CNAME`

- [ ] **Step 1: Create `_config.yml`**

```yaml
title: GlaCon - Katja Glass Consulting
url: https://www.glacon.eu
exclude:
  - README.md
  - LICENSE
  - Gemfile
  - Gemfile.lock
  - docs
  - index_dev.html
  - localhost.txt
  - sitemap_location.txt
```

- [ ] **Step 2: Create `Gemfile`**

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

- [ ] **Step 3: Create `CNAME`** (single line, no trailing content)

```
www.glacon.eu
```

- [ ] **Step 4: Verify files exist**

Run: `ls _config.yml Gemfile CNAME`
Expected: all three listed, no error.

---

## Task 2: Create `_includes` from the PHP partials

Each partial is `<?php echo '<...HTML...>' ?>`. The HTML literal contains **no
escaped quotes** (verified), so conversion = copy the exact text between the
opening `echo '` and the closing `'` into the new file. Drop the `<?php`, `echo '`,
closing `'`, and `?>`.

**Files:**
- Create: `_includes/head.html` (from `components/header_includes.php`)
- Create: `_includes/header.html` (from `components/header.php`)
- Create: `_includes/footer.html` (from `components/footer.php`)

- [ ] **Step 1: Create `_includes/head.html`** with exactly this content:

```html
<script src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>

    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

    <link rel="stylesheet" type="text/css" href="css/general.css">
    <script src="js/general.js"></script>
```

- [ ] **Step 2: Create `_includes/header.html`**

Open `components/header.php`. Copy the entire HTML string passed to `echo` (the
text starting `<div class="padding_top_bottom color_medium_darkblack">` through
its matching closing `</div>` — i.e. everything inside the single quotes). Paste
verbatim into `_includes/header.html`. Do not alter markup.

- [ ] **Step 3: Create `_includes/footer.html`**

Open `components/footer.php`. Copy the entire HTML string passed to `echo` (the
text starting `<footer>` through `</footer>`). Paste verbatim into
`_includes/footer.html`. Do not alter markup.

- [ ] **Step 4: Verify no PHP leaked into the includes**

Run: `grep -rl "<?php\|echo '" _includes/ ; echo "exit:$?"`
Expected: no file paths printed (grep exit:1 = no matches). If any path prints,
the PHP wrapper was copied by mistake — remove it.

---

## Task 3: Convert `index.html` (pilot) and verify the build

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add front matter at the very top of `index.html`**

Insert these two lines as line 1-2, before `<!DOCTYPE html>`:

```
---
---
```

- [ ] **Step 2: Replace the three include calls in `index.html`**

Replace `<?php include './components/header_includes.php';?>` with `{% include head.html %}`
Replace `<?php include './components/header.php';?>` with `{% include header.html %}`
Replace `<?php include './components/footer.php';?>` with `{% include footer.html %}`

- [ ] **Step 3: Build the site with Docker**

Run (from repo root):
```
docker run --rm -v "${PWD}:/srv/jekyll" jekyll/jekyll:4 jekyll build
```
Expected: ends with `done in N seconds` and no error. Output written to `_site/`.

- [ ] **Step 4: Verify the rendered index expanded the includes**

Run: `grep -c "main-header" _site/index.html`
Expected: >= 1 (header include rendered).

Run: `grep -c "{% include\|<?php" _site/index.html`
Expected: 0 (no raw Liquid tags or PHP in output).

Run: `grep -c "footer-title" _site/index.html`
Expected: >= 1 (footer include rendered).

---

## Task 4: Convert the remaining 9 pages

Apply the exact same two edits from Task 3 (front matter + the three include
replacements) to each file below. Some pages may not contain all three include
calls — replace whichever are present; add front matter to every file.

**Files (modify each):**
- `service.html`
- `experiences.html`
- `opensource.html`
- `opensource_video.html`
- `opensource_videos.html`
- `opensource_article.html`
- `contact.html`
- `impressum.html`
- `datenschutzerklaerung.html`

- [ ] **Step 1: For each file, prepend front matter**

Insert as the first two lines of each file:
```
---
---
```

- [ ] **Step 2: For each file, replace include calls**

Replace `<?php include './components/header_includes.php';?>` with `{% include head.html %}`
Replace `<?php include './components/header.php';?>` with `{% include header.html %}`
Replace `<?php include './components/footer.php';?>` with `{% include footer.html %}`

- [ ] **Step 3: Confirm no page still references PHP includes**

Run: `grep -rln "components/.*\.php" *.html ; echo "exit:$?"`
Expected: no paths printed (exit:1). Any printed file still has an unconverted include.

---

## Task 5: Create `404.html`

**Files:**
- Create: `404.html` (content from `error404.html`)

- [ ] **Step 1: Create `404.html`** by copying `error404.html` verbatim, then:
  1. Prepend front matter as lines 1-2:
     ```
     ---
     ---
     ```
  2. Replace `<?php include './components/header_includes.php';?>` with `{% include head.html %}`
  3. Replace `<?php include './components/header.php';?>` with `{% include header.html %}`
  4. Replace `<?php include './components/footer.php';?>` with `{% include footer.html %}`

- [ ] **Step 2: Verify**

Run: `grep -c "{% include\|<?php" 404.html`
Expected: 0 raw `<?php`; the three `{% include %}` tags are expected in source
(they expand at build). Re-run after the Task 8 build to confirm `_site/404.html`
has 0 of both.

---

## Task 6: Remove dead files

**Files (delete):**
- `404.php`
- `router.php`
- `components/header.php`, `components/footer.php`, `components/header_includes.php`
- `error404.html`

- [ ] **Step 1: Delete the obsolete files**

Run:
```
rm 404.php router.php error404.html
rm -r components
```

- [ ] **Step 2: Verify removal**

Run: `ls 404.php router.php error404.html components 2>&1`
Expected: "No such file or directory" for each.

Note: `index_dev.html`, `localhost.txt`, `sitemap_location.txt` are intentionally
**kept** (excluded from the build via `_config.yml`, not deleted).

---

## Task 7: Update `README.md`

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace the `# Development notes` section** (and the PHP run
command beneath it) with:

````markdown
# Development notes

This site is built with [Jekyll](https://jekyllrb.com/) and published via GitHub Pages.

## Preview locally (Docker)

No Ruby install needed. From the repository root:

```
docker run --rm -v "${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --force_polling
```

Then browse to http://localhost:4000/

## Deployment

Push to `main`. GitHub Pages builds the site automatically
(Settings → Pages → Deploy from a branch → `main` / root).
The custom domain `www.glacon.eu` is configured via the `CNAME` file; the matching
DNS record is a `CNAME` for `www` → `<username>.github.io`.
````

- [ ] **Step 2: Verify**

Run: `grep -c "jekyll serve" README.md`
Expected: >= 1. And `grep -c "router.php" README.md` → 0.

---

## Task 8: Full build verification

**Files:** none (verification only)

- [ ] **Step 1: Clean build**

Run:
```
docker run --rm -v "${PWD}:/srv/jekyll" jekyll/jekyll:4 jekyll build
```
Expected: `done in N seconds`, no errors/warnings about missing includes.

- [ ] **Step 2: Verify every built page expanded its includes**

Run:
```
for f in _site/index.html _site/service.html _site/experiences.html _site/opensource.html _site/opensource_video.html _site/opensource_videos.html _site/opensource_article.html _site/contact.html _site/impressum.html _site/datenschutzerklaerung.html _site/404.html; do echo "$f: $(grep -c 'main-header' "$f") header / raw $(grep -c '{% include\|<?php' "$f")"; done
```
Expected: every file shows `header >= 1` and `raw 0`.

- [ ] **Step 3: Verify excluded files are NOT published**

Run: `ls _site/index_dev.html _site/README.md _site/router.php 2>&1`
Expected: "No such file or directory" for each.

- [ ] **Step 4: Verify static assets copied**

Run: `ls _site/css _site/js _site/images _site/CNAME`
Expected: directories present and `_site/CNAME` exists.

- [ ] **Step 5: Visual smoke test (optional but recommended)**

Run: `docker run --rm -v "${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --force_polling`
Open http://localhost:4000/ and click through nav links, then http://localhost:4000/404.html.

---

## Self-Review notes

- **Spec coverage:** includes conversion (T2-T5), front matter (T3-T5), `_config.yml`
  + exclude (T1), `Gemfile`/`CNAME` (T1), `404.html` (T5), dead-file removal (T6),
  `index_dev.html` kept-excluded (T1 exclude + T6 note), README (T7), Docker preview
  + deploy (T7), verification (T8). All spec sections mapped.
- **No git commits** anywhere (per owner rule).
- **Type/name consistency:** include names `head.html` / `header.html` / `footer.html`
  used identically across T2-T5 and verified in T8.
