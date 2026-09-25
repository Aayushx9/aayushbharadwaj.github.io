# Aayush Bharadwaj — AI / ML Portfolio

A static, recruiter-facing portfolio focused on data science, data analysis, machine learning, applied AI, AI engineering, and AI agent evaluation, with computational physics and scientific computing as quantitative foundations.

The site has **no build step and no runtime dependencies**. It runs from `index.html` locally and deploys directly to GitHub Pages.

## Tech stack

- Semantic HTML5
- CSS3 with responsive layouts, subtle motion, and reduced-motion support
- Vanilla JavaScript
- GitHub Actions for Pages deployment

## Folder structure

```text
.
├── index.html
├── 404.html
├── README.md
├── AGENTS.md
├── .gitignore
├── .nojekyll
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   ├── projects.js
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   │   └── .gitkeep
│   │   └── README.md
│   ├── icons/
│   │   └── README.md
│   └── resume/
│       ├── Aayush_Bharadwaj_Resume.pdf
│       └── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

## Run locally

Open `index.html` directly in a browser, or serve the directory locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Update project data

Project content lives in [`js/projects.js`](./js/projects.js). Each entry can include:

- `name`, `shortName`, `category`, and `description`
- `categories` used by explorer filters
- `metric`, `tags`, and optional `github` URL
- `tier` controls homepage prominence: `1` for the six primary featured projects, `2` for secondary ML/AI/data-science projects, `3` for the scientific-foundations archive
- `liveUrl` is optional and should only be used for a verified live project site
- `visual` key for a generated CSS/SVG-style visual
- `details` with any available `problem`, `approach`, `technology`, `results`, and `takeaway`
- optional `image` and `imageAlt` fields

Do not add a GitHub URL unless the repository exists. The explorer automatically renders project cards and the details modal from this data.

## Add screenshots

See [`assets/images/README.md`](./assets/images/README.md) for the recommended filenames and dimensions. Add only screenshots that genuinely represent each project; the site automatically falls back to a generated technical visual when no image is defined or an image path is absent.

## Add your resume

The repository includes a sanitized portfolio copy of the supplied resume at:

```text
assets/resume/Aayush_Bharadwaj_Resume.pdf
```

All Resume links target that path. If you publish a newer factual version, replace the file at the same exact path. See [`assets/resume/README.md`](./assets/resume/README.md).

## Deploy to GitHub Pages

1. Create or push this folder to the `main` branch of a GitHub repository.
2. In **Settings → Pages**, set **Source** to **GitHub Actions** if it is not already selected.
3. Push to `main`, or run the `Deploy static portfolio to GitHub Pages` workflow manually from the **Actions** tab.
4. The workflow publishes the repository root as a static artifact. No npm install or build command is used.
5. The site will be available at `https://<username>.github.io/<repository-name>/` (unless a custom domain is configured).

All internal asset paths are relative (`./css/...`, `./js/...`, `./assets/...`) so the site works in a project repository subpath.

## Troubleshooting

- **Blank page or missing styles:** open the browser console and confirm `css/reset.css` and `css/styles.css` load from `./`.
- **404 on a deployed page:** check the URL includes the repository name for a project site, and confirm the workflow completed under **Actions**.
- **Project cards missing:** verify `js/projects.js` loads before `js/main.js`; both scripts use relative paths.
- **Resume link:** the sanitized portfolio copy is already included at the exact path above. Replace it only if you publish a newer factual version.
- **Screenshot missing:** add the file under `assets/images/projects/` and set its relative `image` value in `js/projects.js`; otherwise the generated visual remains visible.
- **Motion feels distracting:** the site honors `prefers-reduced-motion` automatically.

## PORTFOLIO IMAGE GUIDE

Recommended screenshot filenames:

- `logiq-dashboard.webp`
- `will-it-chart.webp`
- `agent-evaluation.webp`
- `ghosthunt.webp`
- `bubblebreak.webp`
- `micro.webp`
- `crispai.webp`
- `scenescript.webp`
- `csci-5612-exoplanets.webp`
- `github-analysis.webp`
- `uxposed.webp`
- `drawquery.webp`
- `cmb-firas.webp`
- `campus-scheduling.webp`
- `nfl-data-mining.webp`

Use cropped, readable captures at roughly 1600 × 1000 px, export as WebP, and add a concise `imageAlt` describing the interface or result.
