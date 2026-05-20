# Jyotirmaya Ijaradar

A personal website built with **Astro**, **Tailwind CSS**, and **MDX**.

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:4321
npm run build        # Static output in ./dist
npm run preview      # Preview the build locally
```

## Project Structure

```
src/
├── components/      # Reusable Astro components
├── content/notes/   # MDX research notes
├── data/            # YAML data files (publications, projects, etc.)
├── layouts/         # Page layouts (Base, Page, Note)
├── lib/             # Data loader utilities
├── pages/           # Route pages (11 total)
└── styles/          # Global CSS with Tailwind
public/
├── cv/              # CV PDF file
├── images/          # Profile photo, photography
├── logos/           # Institution/project logos
└── favicon.svg
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, research highlights, featured work |
| `/about` | Bio, education, skills |
| `/research` | Research themes & methodological approaches |
| `/publications` | Filterable publication list with BibTeX copy |
| `/projects` | Funded research projects |
| `/software` | Software tools & packages |
| `/teaching-supervision` | Courses, supervision, open topics |
| `/research-notes` | Blog-style research notes |
| `/beyond-research` | Travel, volunteering, personal interests |
| `/cv` | HTML CV with PDF download |
| `/contact` | Contact info & academic profiles |

## Customisation

### Content
Edit YAML files in `src/data/` to update publications, projects, software, teaching, etc. Edit `src/data/profile.yaml` for personal info and links.

### Profile Photo
Place your photo at `public/images/profile.jpg`. Update the Hero component to use `<img>` instead of the initials placeholder.

### CV PDF
Place your CV at `public/cv/jyotirmaya-ijaradar-cv.pdf`.

### Research Notes
Add `.md` or `.mdx` files to `src/content/notes/` with frontmatter:
```yaml
---
title: "Note Title"
date: "2025-01-15"
category: "Technical Notes"
tags: ["tag1", "tag2"]
summary: "Brief description."
---
```

### Theme
Colours and fonts are configured in `tailwind.config.mjs`. Dark mode toggles via a class on `<html>`.

## Deployment

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
3. The included `.github/workflows/deploy.yml` handles build & deploy on push to `main`
4. Update `site` in `astro.config.mjs` to your GitHub Pages URL

### Other Hosts
Run `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Tech Stack

- [Astro](https://astro.build) v6 — static site generator
- [Tailwind CSS](https://tailwindcss.com) v3 — utility-first CSS
- [MDX](https://mdxjs.com) — Markdown + JSX for notes
- YAML — structured data files
