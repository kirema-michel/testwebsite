# testwebsite

Simple website to test multiple favicon variants quickly.

## Run locally

From the project root, start a static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## What is included

- `index.html`: test page with favicon link tags
- `script.js`: switch favicon sets at runtime (with cache-busting)
- `styles.css`: responsive UI for desktop and mobile
- `favicons/*.png`: favicon variants for testing (PNG only)
- `favicons/site.webmanifest`: basic manifest for favicon/PWA checks

## Current favicon assets

- Beige achtergrond - vink 1.png
- Beige achtergrond 1.png
- Donkerblauwe achtergrond - vink 1.png
- Lichtblauwe achtergrond - vink 1.png
- Lichtblauwe achtergrond 1.png
- Middenblauwe achtergrond - vink 1.png
- Middenblauwe achtergrond 1.png

## Testing tip

Browsers cache favicons aggressively. This test page appends a timestamp query parameter when switching icons so you can verify updates immediately.