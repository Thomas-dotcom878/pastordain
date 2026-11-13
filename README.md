# pastordain.com

Pastor Dain Spore and the Chicken Skin Bible. A one-page site built with Astro + Tailwind and hosted on Cloudflare Pages.

## Weekly update (the usual job)

1. Save the new thumbnail into `public/images/`. Using the same name every week (`this-week.webp`, or .png/.jpg) is fine.
2. Open `src/data/this-week.ts` and change the title, the "Posted" date, the YouTube link and Dain's note.
3. Commit and push. Cloudflare rebuilds the site automatically in about a minute.

**Moving last week's study into the grid:** add a line near the top of `playlists` or `singleVideos` in `src/data/videos.ts`. Give it a title, a link and an image saved in `public/images/`.

## Where things are

| File | What it controls |
| --- | --- |
| `src/data/this-week.ts` | The featured study at the top |
| `src/data/videos.ts` | The Playlists and Single Videos thumbnails (`BLANK` = empty spot) |
| `src/pages/index.astro` | The page layout and fixed text (welcome, Tuesday note, Anchor House) |
| `src/styles/global.css` | Fonts and colors |
| `public/images/` | All pictures |

## Commands (optional, for previewing on your own computer)

| Command | Action |
| --- | --- |
| `npm install` | Install the tools (first time only) |
| `npm run dev` | Preview at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` (Cloudflare does this for you) |

## Cloudflare Pages settings

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
