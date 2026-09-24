# Project image guide

Place optional project screenshots in this `projects/` directory. The portfolio uses generated technical visuals when an image is not defined, so no image is required for a complete card.

## Recommended files

- `logiq-dashboard.webp`
- `will-it-chart.webp`
- `agent-evaluation.webp`
- `ghosthunt.webp`
- `bubblebreak.webp`
- `micro.webp`
- `crispai.webp`
- `scenescript.webp`
- `clinsightai.webp`
- `github-analysis.webp`
- `uxposed.webp`
- `drawquery.webp`
- `nasa-exoplanet.webp`
- `cmb-firas.webp`
- `campus-scheduling.webp`
- `nfl-data-mining.webp`

## Capture guidelines

- Aim for approximately 1600 × 1000 px (16:10) or a similarly wide crop.
- Prefer a clean interface view with readable labels and no personal credentials, confidential data, or unrelated windows.
- Export as WebP for a good quality-to-size balance; PNG or JPG also work in a browser.
- Keep the filename lowercase and hyphenated.
- Add the relative path to the project object in `../../js/projects.js`, for example `image: "./assets/images/projects/logiq-dashboard.webp"`.
- Add `imageAlt` describing what the screenshot shows. Do not use a generic filename as alt text.

The project explorer intentionally falls back to a CSS-based visual if an image is missing, so a broken image icon should never be part of the finished page.
