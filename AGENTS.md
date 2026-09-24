# Static portfolio conventions

- This is a dependency-free GitHub Pages site: keep it to relative HTML/CSS/vanilla-JS paths and do not add a build step or package manager requirement.
- Project cards and modal content are generated from `js/projects.js`; update that data rather than duplicating cards in `index.html`.
- Keep supplied metrics, repository URLs, affiliations, dates, credentials, recognition, and research descriptions factual; omit a GitHub link when none is provided. Preserve the verified CSCI 5612 GitHub/live-site pair.
- The homepage hierarchy is intentional: `tier: 1` is the exact six-project PRIMARY FEATURED WORK set; `tier: 2` is the secondary ML/AI/data-science explorer; `tier: 3` is the lower-priority scientific-foundations archive. Do not flatten these groups or add excluded projects.
- The primary order is fixed: Honda Agent Evaluation, LogIQ, Will It Chart, GhostHunt, BubbleBreak, UXposed. The secondary list includes GitHub Repository Popularity, NFL Data Mining, Micro, DrawQuery, SceneScript, CrispAI, and CSCI 5612 Exoplanet Discovery & Habitability.
- Internal asset paths must remain `./`-relative so project sites work under a repository subpath. The resume target is `assets/resume/Aayush_Bharadwaj_Resume.pdf`; the PDF is intentionally user-supplied.
- Before publishing, inspect the rendered page at desktop and mobile widths, test filters/search/modal/mobile navigation, and search all text files for unfinished markers or unintended references. The three excluded-employer spellings must remain absent everywhere.
