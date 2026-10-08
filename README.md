# Avishai Karawan - portfolio

Plain HTML/CSS/JS. No build step, no dependencies.

## Editing
- **Content:** everything on both pages comes from `content.js` (about text, reels, carousels, projects, links).
- **Look:** colors, fonts and spacing are variables at the top of `styles.css`.
- **Images:** put files in `images/` and reference them as `images/name.jpg`.
- **After changing `styles.css`, `app.js` or `content.js`:** bump the `?v=` number on the `<link>`/`<script>` tags in `index.html`, `projects.html` and `404.html` so visitors get the new version.

## Preview locally
Run `python serve.py` from the folder above this one (or `python -m http.server 8000` inside this folder) and open http://localhost:8000.

## Files
- `404.html` - shown for unknown addresses (Cloudflare Pages uses it automatically).
- `_headers` - security and caching headers (Cloudflare Pages / Netlify).
- `robots.txt`, `sitemap.xml` - for search engines. They assume the address `https://www.karawansound.com`; change it if the live address differs (also the `og:url` / `og:image` tags in the `<head>` of each page).
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` - browser and phone icons.
- `images/og-image.png` - the picture shown when a link is shared (1200x630).

## Hosting
Free on Cloudflare Pages, connected to a GitHub repository. Point the domain's DNS at it (the host gives the exact records). karawansound.com is currently on Wix, so repointing DNS switches the live site; test on the host's preview address first and keep a note of the old DNS records. Do not touch any email (MX) records.

The free ambiance pack zip (1.5 GB) is not part of the site files. It is attached to the GitHub Release `ambience-pack-v1`, and the download button (`freePack.link` in `content.js`) points there. To replace it, edit the release on GitHub and swap the attached file (keep the same file name, or update the link).
