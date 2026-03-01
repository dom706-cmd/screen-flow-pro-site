# Screen Flow Pro — Website (static, Dreamweaver-friendly)

This site is built as **static HTML/CSS/JS** for maximum speed + SEO and easy editing in Dreamweaver.

## 1) Quick start (local preview)

Open `index.html` in a browser.

For best results, use a local server (so paths and the manifest behave consistently):

- **macOS** (from the site folder):
  - `python3 -m http.server 8080`
  - then visit `http://localhost:8080`

## 2) Edit the App Store link + pricing

Search for this placeholder and replace everywhere:

- `https://apps.apple.com/app/idYOUR_APP_ID` → your real App Store URL

In `/pricing/index.html`, replace `$X/year` with your real price.

## 3) Add your screenshots + logo

Drop files here:

- `assets/img/` for general images
- optional: create `assets/img/screens/` for App Store screenshots
- optional: create `assets/img/press/` for press kit assets

Then update image tags on pages:
- Homepage preview uses `assets/img/og.png` (replace it with your real hero screenshot montage if you want)

## 4) Add your walkthrough video

Homepage video embed:

- In `index.html`, replace `VIDEO_ID` in the YouTube embed URL
- Or replace the whole `<iframe>` with a Vimeo embed or self-hosted HTML5 `<video>`

## 5) Publish (recommended)

Any static hosting works:

### Option A — GitHub Pages
1. Create a repo, commit all files.
2. Enable Pages (Settings → Pages) and select the branch/folder.
3. Set your custom domain (optional).
4. Update `https://screenflowpro.app` placeholders in:
   - `<link rel="canonical">` tags (all pages)
   - `robots.txt`
   - `sitemap.xml`
   - `og:image` URL

### Option B — Netlify / Vercel (static)
- Drag-and-drop the folder, or connect a repo.

## 6) SEO checklist (must-do)

- Verify you have:
  - `robots.txt` and `sitemap.xml`
  - unique `<title>` + meta description on each page
  - structured data (JSON-LD) already included
- Submit sitemap in Google Search Console
- Add 3–5 blog posts targeting long-tail keywords (ex: “iPhone bug report screen recording”)

## 7) Where to customize colors

Edit `assets/css/styles.css`:
- `--aqua` / `--pink` accents
- `--bg0` / `--bg1` backgrounds
