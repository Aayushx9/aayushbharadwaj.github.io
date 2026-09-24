(() => {
  "use strict";

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS
    : [];
  const featuredProjects = projects.filter((project) => project.tier === 1);
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".primary-nav");
  const modal = document.querySelector("#project-modal");
  const modalContent = document.querySelector("#modal-content");
  const modalClose = document.querySelector(".modal-close");
  const searchInput = document.querySelector("#project-search");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const projectGrid = document.querySelector("#project-grid");
  const resultStatus = document.querySelector("#project-results-status");
  const emptyState = document.querySelector("#project-empty");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const visualTemplates = {
    anomaly: `<div class="visual-chart"><span class="signal-line"></span><span class="threshold"></span><span class="anomaly-window"></span><span class="axis-x"></span><span class="axis-y"></span></div>`,
    chart: `<div class="visual-chart"><span class="axis-x"></span><span class="axis-y"></span><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="trend"></span><span class="threshold"></span></div>`,
    evaluation: `<div class="eval-grid"><div class="trace-panel"><span class="trace-label">BEHAVIOR TRACE</span><span class="trace-line"></span><span class="trace-line"></span><span class="trace-line"></span><span class="trace-line"></span></div><div class="score-panel"><span class="trace-label">EVIDENCE</span><div class="score-ring"><span>EV</span></div><div class="judgment-bars"><i></i><i></i><i></i><i></i><i></i></div></div></div>`,
    fraud: `<div class="radar"><span class="radar-shape"></span><i class="radar-dot"></i><i class="radar-dot"></i><i class="radar-dot"></i></div>`,
    network: `<div class="network-map"><i class="network-node">AI</i><i class="network-node">01</i><i class="network-node">10</i><i class="network-node">01</i><i class="network-node">10</i></div>`,
    mastery: `<div class="mastery-chart"><span class="mastery-axis-x"></span><span class="mastery-axis-y"></span><span class="mastery-curve"></span><i class="mastery-point"></i><i class="mastery-point"></i><i class="mastery-point"></i><span class="mastery-label">POSTERIOR</span><span class="mastery-label">MASTERY</span></div>`,
    regression: `<div class="regression-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="regression-fit"></span>`,
    audit: `<div class="audit-matrix"><i class="audit-cell"></i><i class="audit-cell hot"></i><i class="audit-cell"></i><i class="audit-cell"></i><i class="audit-cell hot"></i><i class="audit-cell"></i><i class="audit-cell"></i><i class="audit-cell hot"></i><i class="audit-cell"></i><i class="audit-cell hot"></i><i class="audit-cell"></i><i class="audit-cell"></i><i class="audit-cell hot"></i><i class="audit-cell"></i><i class="audit-cell"></i></div><span class="audit-score">MI</span>`,
    schema: `<div class="schema-diagram"><div class="schema-table"><strong>USERS</strong><span class="schema-line"></span><span class="schema-line"></span><span class="schema-line"></span></div><div class="schema-table"><strong>ORDERS</strong><span class="schema-line"></span><span class="schema-line"></span><span class="schema-line"></span></div><div class="schema-table"><strong>ITEMS</strong><span class="schema-line"></span><span class="schema-line"></span><span class="schema-line"></span></div><span class="schema-connector"></span><span class="schema-arrow">SQL DDL ↗</span></div>`,
    orbit: `<div class="orbit-system"><span class="orbit-ring"></span><span class="orbit-ring"></span><span class="orbit-ring"></span><span class="orbit-core"></span><i class="orbit-moon"></i></div>`,
    cosmos: `<div class="orbit-system"><span class="orbit-ring"></span><span class="orbit-ring"></span><span class="orbit-ring"></span><span class="orbit-core"></span><i class="orbit-moon"></i></div>`,
    statistics: `<div class="stat-grid"></div><span class="stat-wave"></span>`,
    spectrum: `<div class="stat-grid"></div><span class="stat-wave"></span>`,
    methods: `<div class="method-lines"><span></span><span></span><span></span><span></span></div>`,
    equations: `<div class="method-lines"><span></span><span></span><span></span><span></span></div>`,
    field: `<div class="field-grid"></div><span class="field-wave"></span>`,
    nfl: `<div class="field"><span class="field-midline"></span><span class="field-circle"></span><i class="play-dot"></i><i class="play-dot"></i><i class="play-dot"></i><i class="play-dot"></i><span class="play-path"></span></div>`
  };

  const escapeHTML = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const visualMarkup = (project) => {
    const generatedVisual = visualTemplates[project.visual] || visualTemplates.methods;
    const image = project.image
      ? `<img class="project-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || `${project.name} project screenshot`)}" loading="lazy">`
      : "";
    return `<div class="generated-visual" aria-hidden="true">${generatedVisual}</div>${image}`;
  };

  const metricMarkup = (project) => {
    if (!project.metric) return "";
    return `<div class="project-metric"><strong>${escapeHTML(project.metric.value)}</strong><span>${escapeHTML(project.metric.label)}</span></div>`;
  };

  const tagsMarkup = (project, limit = project.tags.length) =>
    `<div class="project-tags">${project.tags
      .slice(0, limit)
      .map((tag) => `<span>${escapeHTML(tag)}</span>`)
      .join("")}</div>`;

  const projectActions = (project, includeDetails = true) => {
    const github = project.github
      ? `<a class="project-link" href="${escapeHTML(project.github)}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>`
      : "";
    const details = includeDetails
      ? `<button class="detail-button" type="button" data-project-id="${escapeHTML(project.id)}">Details <span aria-hidden="true">+</span></button>`
      : "";
    return `${github}${details}`;
  };

  const featuredCard = (project, index) => `
    <article class="project-card reveal" data-reveal>
      <div class="project-content">
        <span class="project-index">PROJECT / ${String(index + 1).padStart(2, "0")}</span>
        ${project.badge ? `<span class="project-badge">${escapeHTML(project.badge)}</span>` : ""}
        <h3>${escapeHTML(project.name)}</h3>
        <p class="project-category">${escapeHTML(project.category)}</p>
        <p class="project-description">${escapeHTML(project.description)}</p>
        ${metricMarkup(project)}
        <div class="project-actions">${projectActions(project)}</div>
      </div>
      <div class="project-visual visual-${escapeHTML(project.visual)}" aria-hidden="true">
        <span class="visual-code">${escapeHTML(project.shortName.toUpperCase())} / SYSTEM MAP</span>
        ${visualMarkup(project)}
        <span class="visual-metric">${project.metric ? `<b>${escapeHTML(project.metric.value)}</b> ${escapeHTML(project.metric.label)}` : "MODEL → EVIDENCE"}</span>
      </div>
    </article>`;

  const explorerCard = (project) => `
    <article class="explorer-card reveal" data-project-id="${escapeHTML(project.id)}" data-search="${escapeHTML([project.name, project.category, project.description, ...project.tags].join(" ").toLowerCase())}">
      <div class="card-visual visual-${escapeHTML(project.visual)}" aria-hidden="true">
        <span class="visual-code">${escapeHTML(project.shortName.toUpperCase())}</span>
        ${visualMarkup(project)}
        <span class="visual-metric">${project.metric ? `<b>${escapeHTML(project.metric.value)}</b> ${escapeHTML(project.metric.label)}` : "OPEN DETAILS ↗"}</span>
      </div>
      <div class="explorer-card-content">
        <span class="card-category">${escapeHTML(project.category)}</span>
        <h3>${escapeHTML(project.name)}</h3>
        <p class="card-description">${escapeHTML(project.description)}</p>
        ${tagsMarkup(project, 4)}
        <div class="card-footer">
          ${projectActions(project)}
          ${project.github ? `<a class="card-github" href="${escapeHTML(project.github)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHTML(project.name)} on GitHub">GH</a>${project.externalRepository ? '<span class="external-note">external</span>' : ""}` : ""}
        </div>
      </div>
    </article>`;

  const renderFeatured = () => {
    const container = document.querySelector("#featured-projects");
    if (container) container.innerHTML = featuredProjects.map(featuredCard).join("");
  };

  const renderExplorer = () => {
    if (projectGrid) projectGrid.innerHTML = projects.map(explorerCard).join("");
  };

  const sectionMarkup = (title, content) => {
    if (!title || !content) return "";
    const body = Array.isArray(content)
      ? `<ul>${content.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
      : `<p>${escapeHTML(content)}</p>`;
    return `<section class="modal-section"><h3>${escapeHTML(title)}</h3><div>${body}</div></section>`;
  };

  const openProject = (projectId, trigger) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project || !modal || !modalContent) return;
    const details = project.details || {};
    const sections = [
      sectionMarkup("PROBLEM", details.problem),
      sectionMarkup("APPROACH", details.approach),
      sectionMarkup("TECHNOLOGY", details.technology),
      sectionMarkup("RESULTS", details.results),
      sectionMarkup("TAKEAWAY", details.takeaway)
    ].join("");

    modalContent.innerHTML = `
      <p class="modal-category">${escapeHTML(project.category)}</p>
      <h2 id="modal-title">${escapeHTML(project.name)}</h2>
      <p class="modal-description">${escapeHTML(project.description)}</p>
      ${metricMarkup(project)}
      <div class="modal-sections">${sections}</div>
      <div class="modal-actions">${projectActions(project, false)}</div>`;

    modal.setAttribute("aria-label", `${project.name} details`);
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
    if (trigger) modal._returnFocus = trigger;
    modalClose?.focus();
  };

  const closeProject = () => {
    if (!modal) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  };

  const applyFilters = () => {
    if (!projectGrid) return;
    const query = (searchInput?.value || "").trim().toLowerCase();
    const activeFilter = filterButtons.find((button) => button.classList.contains("is-active"))?.dataset.filter || "all";
    let visibleCount = 0;

    projectGrid.querySelectorAll(".explorer-card").forEach((card) => {
      const project = projects.find((item) => item.id === card.dataset.projectId);
      const categoryMatch = activeFilter === "all" || Boolean(project?.categories.includes(activeFilter));
      const searchMatch = !query || card.dataset.search.includes(query);
      const visible = Boolean(categoryMatch && searchMatch);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (resultStatus) {
      const label = visibleCount === 1 ? "project" : "projects";
      resultStatus.textContent = `${String(visibleCount).padStart(2, "0")} ${label} in view`;
    }
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  };

  const closeMobileNavigation = () => {
    if (!navToggle || !navigation) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const setupNavigation = () => {
    let lastFocusedTrigger = null;
    navToggle?.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      if (willOpen) lastFocusedTrigger = document.activeElement;
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navToggle.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
      navigation?.classList.toggle("is-open", willOpen);
      document.body.style.overflow = willOpen ? "hidden" : "";
      if (willOpen) navigation?.querySelector("a")?.focus();
    });

    navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNavigation));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation?.classList.contains("is-open")) {
        closeMobileNavigation();
        (lastFocusedTrigger || navToggle)?.focus();
      }
      if (event.key === "Tab" && navigation?.classList.contains("is-open")) {
        const focusable = [navToggle, ...navigation.querySelectorAll("a")].filter((element) => !element.hasAttribute("disabled"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const navLinks = [...document.querySelectorAll(".primary-nav a[href^='#']")];
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if ("IntersectionObserver" in window && !reduceMotion.matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
          });
        },
        { rootMargin: "-35% 0px -58%", threshold: 0 }
      );
      sections.forEach((section) => observer.observe(section));
    }
  };

  const setupModal = () => {
    document.addEventListener("click", (event) => {
      const detailButton = event.target.closest("[data-project-id]");
      if (!detailButton || detailButton.tagName !== "BUTTON") return;
      openProject(detailButton.dataset.projectId, detailButton);
    });
    modalClose?.addEventListener("click", closeProject);
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) closeProject();
    });
    modal?.addEventListener("close", () => {
      document.body.style.overflow = "";
      if (modal._returnFocus instanceof HTMLElement) modal._returnFocus.focus();
    });
  };

  const handleImageError = (event) => {
    const image = event.target;
    const host = image.closest(".project-visual, .card-visual");
    if (!host) return;
    image.remove();
    host.classList.add("image-fallback");
    host.querySelector(".generated-visual")?.removeAttribute("aria-hidden");
  };

  const showProjectFallback = (projectId) => {
    const card = document.querySelector(`.explorer-card[data-project-id="${CSS.escape(projectId)}"]`);
    const project = projects.find((item) => item.id === projectId);
    if (!card || !project) return;
    const host = card.querySelector(".card-visual");
    if (!host) return;
    host.classList.add("image-fallback");
    host.querySelector(".generated-visual")?.removeAttribute("aria-hidden");
  };

  const setupImages = () => {
    document.addEventListener(
      "error",
      (event) => {
        handleImageError(event);
        const image = event.target;
        if (image instanceof HTMLImageElement) {
          const card = image.closest(".explorer-card");
          if (card?.dataset.projectId) showProjectFallback(card.dataset.projectId);
        }
      },
      true
    );
  };

  const setupReveal = () => {
    const items = document.querySelectorAll("[data-reveal], .reveal");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
  };

  renderFeatured();
  renderExplorer();
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      applyFilters();
    });
  });
  searchInput?.addEventListener("input", applyFilters);
  applyFilters();
  setupNavigation();
  setupModal();
  setupImages();
  setupReveal();

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
})();
