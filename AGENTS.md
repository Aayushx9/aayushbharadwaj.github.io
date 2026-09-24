# Static portfolio conventions

- This is a dependency-free GitHub Pages site: keep it to relative HTML/CSS/vanilla-JS paths and do not add a build step or package manager requirement.
- Project cards and modal content are generated from `js/projects.js`; update that data rather than duplicating cards in `index.html`.
- Keep supplied metrics, repository URLs, affiliations, dates, credentials, recognition, and research descriptions factual; omit a GitHub link when none is provided.
- The homepage hierarchy is intentional: `tier: 1` renders in FEATURED WORK, `tier: 2` is data/statistics, and `tier: 3` is research/scientific work. Do not flatten the project explorer into equal homepage prominence.
- Internal asset paths must remain `./`-relative so project sites work under a repository subpath. The resume target is `assets/resume/Aayush_Bharadwaj_Resume.pdf`; the PDF is intentionally user-supplied.
- Before publishing, inspect the rendered page at desktop and mobile widths, test filters/search/modal/mobile navigation, and search all text files for unfinished markers or unintended references. The three excluded-employer spellings must remain absent everywhere.
