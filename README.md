# Glacon Website

This repository contains the webpage for Katja Glass Consulting including the Open Source Portal for Clinical Study Evaluations

# Development notes

This site is built with [Jekyll](https://jekyllrb.com/) and published via GitHub Pages.

## Preview locally (Docker)

No Ruby install needed. From the repository root:

```
docker run --rm -v "C:\git\glacon-website:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --force_polling
```

Then browse to http://localhost:4000/

## Deployment

Push to `main`. GitHub Pages builds the site automatically
(Settings → Pages → Deploy from a branch → `main` / root).
The custom domain `www.glacon.eu` is configured via the `CNAME` file; the matching
DNS record is a `CNAME` for `www` → `<username>.github.io`.

