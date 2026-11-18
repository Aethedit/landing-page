# AethEdit landing page

Bilingual (中文 / English) static landing page for AethEdit 以太编辑. Vite + vanilla HTML/CSS/JS, deployed to GitHub Pages.

```bash
npm install
npm run dev      # local dev server
npm run build    # output in dist/
```

## Language
`?lang=zh` or `?lang=en` forces a language; otherwise the saved choice or browser language is used. Copy lives in `src/i18n.js`.

## Fonts (action needed)
Headings use serif, body uses a system sans stack. The stacks are in `src/style.css`.
- Chinese headings: Source Han Serif. Self-host a subset (e.g. with `pyftsubset`) and add an `@font-face`.
- English headings: New Kansas. This is a commercial font; add licensed files or an Adobe Fonts kit.

Until then the page falls back to locally installed serif fonts.

## Deploy
`.github/workflows/deploy.yml` publishes `dist/` on push to `main`. In the repo, set Settings → Pages → Source to **GitHub Actions**.
`vite.config.js` uses `base: '/landing-page/'` for the project-page URL. Change it if a custom domain is attached.

## Contact form
Embedded Notion form (iframe in `index.html`). The form must be published to the web. A `mailto:` link is shown as a fallback.
