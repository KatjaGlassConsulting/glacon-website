# Design: Convert GlaCon site to Jekyll for GitHub Pages

**Date:** 2026-05-28
**Status:** Approved (pending spec review)

## Goal

Host the existing GlaCon homepage on GitHub Pages. GitHub Pages serves static
files only and does not execute PHP, so the current PHP-based templating must be
replaced with GitHub Pages' native Jekyll build. Almost all PHP in this repo is
purely `echo`'d static HTML (shared header, footer, and `<head>` includes) with
no dynamic logic, so those parts convert as a lossless 1:1 mapping.

**Exception (discovered during implementation):** `opensource_video.html` contained
real dynamic PHP — it selected a video by the `?video=` query parameter (defaulting
to `video1`) and incremented a per-video view counter in `videos/*.txt`. The counter's
visitor-facing output was already commented out (no visible effect). Per an explicit
decision, this page was converted to **client-side JavaScript**: a `videos` object +
`URLSearchParams` reproduce the exact selection behavior and preserve all existing
`?video=` URLs, and the (invisible) counter was dropped. See the conversion section.

## Decisions (from brainstorming)

- **Build model:** GitHub-native Jekyll. Push source; GitHub builds on every push.
  Keeps the shared header/footer DRY with no local build step required.
- **Domain:** Custom domain `www.glacon.eu` (via `CNAME` file + DNS).
- **Local preview:** Docker-based Jekyll (no Ruby install; Docker already present).
- **No git commits:** The user manages git. This work creates/edits/deletes files
  only; it never runs `git commit`. (This overrides the brainstorming default of
  committing the design doc.)

## Conversion: PHP includes -> Jekyll includes

The three partials move to `_includes/` as plain HTML, dropping the
`<?php echo '...' ?>` wrapper (keep only the inner HTML):

| Current file                        | New file                |
| ----------------------------------- | ----------------------- |
| `components/header_includes.php`    | `_includes/head.html`   |
| `components/header.php`             | `_includes/header.html` |
| `components/footer.php`             | `_includes/footer.html` |

Each page swaps its PHP calls for Liquid:

```
<?php include './components/header_includes.php';?>  ->  {% include head.html %}
<?php include './components/header.php';?>           ->  {% include header.html %}
<?php include './components/footer.php';?>           ->  {% include footer.html %}
```

**Critical requirement:** Jekyll only processes Liquid (`{% include %}`) in files
that begin with YAML front matter. Every converted page must start with two `---`
lines before `<!DOCTYPE html>`:

```
---
---
<!DOCTYPE html>
```

Without front matter, Jekyll copies the file verbatim and the includes will not
expand.

### Pages to convert (front matter + include swaps)

`index.html`, `service.html`, `experiences.html`, `opensource.html`,
`opensource_video.html`, `opensource_videos.html`, `opensource_article.html`,
`contact.html`, `impressum.html`, `datenschutzerklaerung.html` (10 pages).

Verified: no `{{` or `{%` sequences exist in any HTML, so Liquid will not
misinterpret existing markup.

## New files

- **`_config.yml`** — minimal Jekyll config (`title`) plus an `exclude:` list so
  non-site files are not published: `README.md`, `LICENSE`, `Gemfile`,
  `Gemfile.lock`, `docs`, `index_dev.html`, `localhost.txt`,
  `sitemap_location.txt`.
- **`Gemfile`** — pins the `github-pages` gem so the Docker preview matches
  GitHub's actual build environment.
- **`CNAME`** — single line: `www.glacon.eu`.
- **`404.html`** — converted from `error404.html` (front matter + `{% include %}`).
  GitHub Pages serves this automatically for unknown URLs.

## Files removed (dead after conversion)

> Note: these are currently untracked in git, so deletion is not git-recoverable.
> Their content is either obsolete or preserved elsewhere (`_includes/`, `404.html`).

- `404.php` — Apache `ErrorDocument` redirect trick; replaced by `404.html`.
- `router.php` — PHP dev-server router; obsolete (preview is now Docker/Jekyll).
- `components/header.php`, `components/footer.php`, `components/header_includes.php`
  — content preserved in `_includes/`.
- `error404.html` — content preserved in `404.html`.

## Files kept but not published

- `index_dev.html` — dev variant; retained in the repo but added to the Jekyll
  `exclude:` list (not deleted, to avoid irreversible loss of an untracked file).

## Static assets (unchanged)

`css/`, `js/`, `images/`, `fonts/`, `font-awesome/`, `videos/`, `resources/`,
`favicon.ico`, `robots.txt` are copied as-is by Jekyll. No changes.

## README update

Replace the current PHP-based "Development notes" section with Jekyll/Docker
instructions:

- **Local preview:** run from repo root —
  ```
  docker run --rm -v "${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --force_polling
  ```
  then browse `http://localhost:4000/`.
- **Deployment:** push to `main`; GitHub Pages (Settings -> Pages -> Deploy from
  branch -> `main` / root) builds with Jekyll automatically.

## Deployment steps (manual, performed by user)

1. Push `main` to GitHub.
2. Repo Settings -> Pages -> Source: Deploy from a branch -> `main` / `(root)`.
3. Custom domain `www.glacon.eu` is set by the `CNAME` file; confirm it in
   Settings -> Pages.
4. At the DNS registrar, add a `CNAME` record: `www` -> `<username>.github.io`.

## Verification

- Build/serve locally via the Docker command; confirm pages render with header,
  footer, and head includes expanded (no raw `{% include %}` or `<?php` in output).
- Spot-check navigation links and the `404.html` page.
- Confirm static assets (CSS/JS/images) load.

## Out of scope

- DNS configuration at the registrar (user action).
- Content changes, redesign, or SEO/`og:` URL edits beyond what conversion needs.
