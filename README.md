# Glacon Website

This repository contains the webpage for Katja Glass Consulting including the Open Source Portal for Clinical Study Evaluations

# Development notes

The site has two parts: the root pages built with [Jekyll](https://jekyllrb.com/), and a
[Next.js](https://nextjs.org/) portal (in `portal/`) that is statically exported and served
under `/portal`. Both are built and published to GitHub Pages by
`.github/workflows/deploy.yml`.

## Preview locally (Docker)

No Ruby install needed. From the repository root:

```
docker run --rm -v "C:\git\glacon-website:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --force_polling
```

Then browse to http://localhost:4000/

(The Docker preview shows the Jekyll root site only. To preview the portal, see below.)

## Preview the portal locally

The portal is a Next.js app in `portal/` (static export, `basePath: /portal`):

```
cd portal
npm install        # first time only
npm run dev        # dev server at http://localhost:3000/portal
npm run build      # static export to portal/out/
```

## Deployment

Deployment is automated by GitHub Actions (`.github/workflows/deploy.yml`): on every push
to `main` it builds the Jekyll site, statically exports the Next.js portal, merges the
portal into the site at `/portal`, and publishes the combined result to GitHub Pages.

**One-time setup:** in the repo go to **Settings → Pages → Build and deployment → Source**
and select **GitHub Actions** (not "Deploy from a branch").

The custom domain `www.glacon.eu` is configured via the `CNAME` file; the matching DNS
record is a `CNAME` for `www` → `<username>.github.io`.

