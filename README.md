# luci-website

Production site for [lucisystems.com](https://lucisystems.com) — Astro + Netlify.

## Design source of truth

Copy, IA, and brand decisions live in the sibling **luci-design** repo:

- `luci-design/_project-context.md` — running project brief
- `luci-design/LUCI Systems Design System/ui_kits/website/website-ia-wireframe.html`
- `luci-design/LUCI Systems Design System/ui_kits/sales/brochure.html`

## Commands

| Command         | Action                              |
| :-------------- | :---------------------------------- |
| `npm install`   | Install dependencies                |
| `npm run dev`   | Start local dev server (port 4321)  |
| `npm run build` | Build static site to `./dist/`      |
| `npm run preview` | Preview production build locally |

## Stack

- **Astro** — static site + Markdown blog
- **Netlify** — deploy from GitHub (`netlify.toml` included)
- **No CMS** — copy in `src/data/` and page files; blog in `src/content/blog/`

## Project structure

```
src/
  components/     Header, Footer, SectionBlock, PageHero
  data/           Canonical copy, personas, industries (tagged for personalization)
  content/blog/   Markdown posts with persona/topic frontmatter
  layouts/        BaseLayout
  pages/          IA routes (home, platform, industries, resources, etc.)
  styles/         Brand tokens + global CSS
public/
  llms.txt        AISEO — LLM discovery file
```

## Netlify setup

1. Connect this repo in Netlify
2. Build command / publish directory are set in `netlify.toml`
3. Enable Netlify Forms for the contact page after first deploy

## Next build phases

1. Visual polish (brochure-informed)
2. Migrate Ameristar case study + assets from luci-design
3. Persona picker + content highlighting
4. Curated intent ask bar (Phase A discovery)
5. Hero product visual / demo
