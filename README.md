# testwebsite

Simple website to test multiple favicons quickly.

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
- `favicons/*.svg`: four test favicon variants
- `favicons/site.webmanifest`: basic manifest for favicon/PWA checks

## Testing tip

Browsers cache favicons aggressively. This test page appends a timestamp query parameter when switching icons so you can verify updates immediately.