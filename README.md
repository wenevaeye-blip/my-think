# My Think

An English-first Astro blog prepared for GitHub Pages and future integration with an automated content pipeline.

## Stack

- Astro
- Markdown content collections
- GitHub Pages deployment via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content structure

Blog posts live in:

- `src/content/blog/*.md`

Images can live in:

- `public/images/posts/<slug>/...`

Recommended frontmatter fields:

```yaml
title: "Your title"
description: "Your summary"
slug: "your-slug"
pubDate: 2026-03-29
updatedDate: 2026-03-29
draft: false
category: "General"
tags:
  - tag1
  - tag2
lang: en
author: wenevaeye-blip
heroImage: "/images/posts/your-slug/hero.png"
```

## Deployment

The repository includes a GitHub Actions workflow for GitHub Pages.

To publish successfully, enable GitHub Pages in the repository settings and select **GitHub Actions** as the source.
