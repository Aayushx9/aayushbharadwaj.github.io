/*
 * Project content is intentionally separated from presentation.
 * Add or edit projects here; index.html and main.js render this data.
 * Tier 1 is intentionally limited to the strongest recruiter-facing work.
 */
window.PORTFOLIO_PROJECTS = Object.freeze([
  {
    id: "honda-agent-evaluation",
    name: "Honda 99P Labs — AI Agent Evaluation",
    shortName: "Agent Evaluation",
    tier: 1,
    category: "AI Evaluation / AI Engineering",
    categories: ["ai-agents", "machine-learning", "data-science"],
    description: "Building and evaluating an AI agent on a real task, designing scoring across quantitative metrics, qualitative judgment, and implicit signals — including retries, rewrites, and abandonment — to define what good agent performance means before production deployment.",
    badge: "Current work",
    tags: ["AI Agents", "Quantitative Metrics", "Qualitative Judgment", "Implicit Signals", "Ground Truth", "Inter-Rater Agreement"],
    visual: "evaluation",
    details: {
      problem: "Define what good AI-agent performance means before production deployment.",
      approach: "Build and evaluate an AI agent on a real task; design scoring across quantitative metrics, qualitative judgment, and implicit signals; construct multi-labeler ground truth; and validate automated scoring against human judgment.",
      technology: ["AI Agents", "Quantitative Metrics", "Qualitative Judgment", "Ground Truth", "Inter-Rater Agreement"],
      takeaway: "A production-oriented evaluation loop combines behavioral signals, human judgment, and reproducible scoring."
    }
  },
  {
    id: "logiq",
    name: "NebulaSense LogIQ",
    shortName: "LogIQ",
    tier: 1,
    category: "Machine Learning / AI Engineering",
    categories: ["machine-learning", "ai-agents"],
    description: "Cloud-native anomaly intelligence engine: a two-layer LSTM autoencoder trained semi-supervised on distributed microservice logs for anomaly detection.",
    metric: { value: "> 0.90", label: "ROC-AUC" },
    tags: ["LSTM Autoencoder", "Anomaly Detection", "FastAPI REST", "Docker", "Kubernetes"],
    github: "https://github.com/Aayushx9/LogIQ-anomaly-detection",
    visual: "anomaly",
    details: {
      problem: "Detect anomalous patterns in log data.",
      approach: "A two-layer LSTM autoencoder pipeline models log sequences and identifies anomalous activity.",
      technology: ["2-layer LSTM Autoencoder", "Semi-supervised Learning", "FastAPI REST", "Docker", "Kubernetes"],
      results: ["ROC-AUC > 0.90"],
      takeaway: "The project combines sequence modeling with API serving and container orchestration."
    }
  },
  {
    id: "will-it-chart",
    name: "Will It Chart",
    shortName: "Will It Chart",
    tier: 1,
    category: "Machine Learning / Data Science",
    categories: ["machine-learning", "data-science"],
    description: "Hit-song prediction engine trained on 114,000 Spotify tracks, with SHAP explainability and a live Gradio dashboard.",
    metric: { value: "0.73", label: "ROC-AUC" },
    tags: ["114,000 Tracks", "XGBoost", "SHAP", "Gradio"],
    github: "https://github.com/Aayushx9/Will-It-Chart",
    visual: "chart",
    details: {
      problem: "Study which observable song characteristics are associated with popularity.",
      approach: "Train an XGBoost classifier on 114,000 Spotify tracks and use SHAP to inspect model behavior.",
      technology: ["XGBoost", "SHAP", "Gradio"],
      results: ["ROC-AUC 0.73", "5-fold cross-validation 0.725 ± 0.004"],
      takeaway: "Cross-validation and feature-level interpretation keep the reported result in view."
    }
  },
  {
    id: "micro",
    name: "Micro — Adaptive AI Study Platform",
    shortName: "Micro",
    tier: 1,
    category: "Data Science / Statistical Modeling",
    categories: ["data-science", "statistics", "ai-agents"],
    description: "Adaptive AI study platform with a Bayesian mastery-modeling engine, full posterior inference, credible intervals, and confidence-/speed-weighted evidence accumulation.",
    tags: ["Bayesian Inference", "Beta-Bernoulli", "Posterior Inference", "Canvas API"],
    visual: "mastery",
    details: {
      problem: "Estimate learner mastery and support adaptive study decisions.",
      approach: "Engineer a Bayesian mastery-modeling engine with a full posterior-inference pipeline, credible intervals, and confidence-/speed-weighted evidence accumulation; integrate the Canvas API for context-aware navigation.",
      technology: ["Bayesian Inference", "Beta-Bernoulli Modeling", "Posterior Inference", "Credible Intervals", "Canvas API"],
      takeaway: "A probabilistic mastery model turns learning evidence into an adaptive decision signal."
    }
  },
  {
    id: "ghosthunt",
    name: "GhostHunt",
    shortName: "GhostHunt",
    tier: 1,
    category: "Machine Learning / Data Analysis",
    categories: ["machine-learning", "data-analysis"],
    description: "Fraudulent job-posting detection using behavioral features and interpretable text signals.",
    metric: { value: "87%", label: "held-out accuracy" },
    tags: ["18 Behavioral Features", "TF-IDF", "XGBoost", "SHAP", "Gradio"],
    visual: "fraud",
    details: {
      problem: "Detect fraudulent job postings from posting behavior and text.",
      approach: "Combine behavioral features with TF-IDF representations in an XGBoost classification workflow, then inspect predictions with SHAP.",
      technology: ["TF-IDF", "XGBoost", "SHAP", "Gradio"],
      results: ["87% held-out accuracy"],
      takeaway: "Combining behavioral and textual signals supports a more interpretable fraud-detection model."
    }
  },
  {
    id: "bubblebreak",
    name: "BubbleBreak",
    shortName: "BubbleBreak",
    tier: 1,
    category: "Machine Learning / Recommender Systems",
    categories: ["machine-learning", "ai-agents"],
    description: "A fairness-aware recommender evaluated through a multi-agent, long-horizon simulation.",
    metric: { value: "34%", label: "less filter-bubble" },
    tags: ["1,000 Agents", "90 Days", "PyTorch", "Fairness-aware"],
    visual: "network",
    details: {
      problem: "Explore whether a recommender can reduce filter-bubble effects over time.",
      approach: "Simulate 1,000 agents across 90 days with a fairness-aware PyTorch recommender.",
      technology: ["PyTorch", "Recommender Systems", "Simulation"],
      results: ["34% reduction in filter-bubble formation", "2.1% engagement cost"],
      takeaway: "The result is presented as a measured tradeoff: less bubble formation alongside a small engagement cost."
    }
  },
  {
    id: "github-popularity",
    name: "GitHub Repository Popularity Statistical Analysis",
    shortName: "Repository Popularity",
    tier: 2,
    category: "Data Analysis / Statistics",
    categories: ["data-analysis", "statistics", "data-science"],
    description: "Statistical analysis of GitHub repository popularity across two datasets using multiple linear regression and a negative binomial GLM.",
    tags: ["Multiple Linear Regression", "Negative Binomial GLM", "Count Modeling", "R²", "AIC", "ANOVA", "Kruskal-Wallis"],
    visual: "regression",
    details: {
      problem: "Model and compare repository popularity using count-oriented statistical methods.",
      approach: "Fit multiple linear regression and a negative binomial GLM across two datasets; compare fit and use ANOVA and Kruskal–Wallis analysis to examine language effects.",
      technology: ["Multiple Linear Regression", "Negative Binomial GLM", "Count Modeling", "R²", "AIC", "ANOVA", "Kruskal–Wallis"],
      results: ["R² = 0.61 / 0.76", "AIC = 7,487 vs. Poisson AIC = 74,851"],
      takeaway: "Model choice is treated as an inference question rather than a leaderboard exercise."
    }
  },
  {
    id: "uxposed",
    name: "UXposed",
    shortName: "UXposed",
    tier: 2,
    category: "Data Analysis / Responsible AI",
    categories: ["data-analysis", "statistics", "ai-agents"],
    description: "Dark-pattern detection and compliance analytics: classifying UI copy across 50 Fortune 500 checkout flows into eight FTC/EU DSA categories.",
    metric: { value: "50", label: "checkout flows" },
    tags: ["8 FTC/EU DSA Categories", "Severity-weighted", "Manipulation Index"],
    visual: "audit",
    details: {
      problem: "Measure recurring dark-pattern behavior in high-traffic checkout experiences.",
      approach: "Scrape and classify UI copy across 50 Fortune 500 checkout flows into eight FTC/EU DSA dark-pattern categories, then build a severity-weighted Manipulation Index dashboard.",
      technology: ["Web Scraping", "UI Copy Classification", "FTC/EU DSA Categories", "Severity-weighted Index"],
      results: ["50 checkout flows", "8 dark-pattern categories"],
      takeaway: "The project turns interface review into a repeatable analytical framework."
    }
  },
  {
    id: "drawquery",
    name: "DrawQuery",
    shortName: "DrawQuery",
    tier: 3,
    category: "AI / Computer Vision / Data Systems",
    categories: ["ai-agents", "machine-learning", "data-science"],
    description: "Vision-transformer system for converting hand-drawn ER diagrams into valid SQL DDL.",
    metric: { value: "< 3 sec", label: "inference" },
    tags: ["Vision Transformer", "ER Diagrams", "SQL DDL", "Gradio"],
    visual: "schema",
    details: {
      problem: "Translate database diagrams into structured SQL DDL.",
      approach: "Use a vision transformer to translate hand-drawn ER diagrams into valid SQL DDL through an interactive Gradio interface.",
      technology: ["Vision Transformer", "ER Diagram Understanding", "SQL DDL", "Gradio"],
      results: ["Sub-3-second inference"],
      takeaway: "The system targets the bridge between visual database design and executable schema definitions."
    }
  },
  {
    id: "crispai",
    name: "CrispAI",
    shortName: "CrispAI",
    tier: 3,
    category: "AI / Research",
    categories: ["ai-agents", "machine-learning"],
    description: "Real-time speech enhancement transformer trained on Microsoft’s DNS Challenge dataset.",
    metric: { value: "3.2", label: "PESQ" },
    tags: ["Speech Enhancement", "Transformer", "Microsoft DNS Challenge", "PESQ"],
    visual: "spectrum",
    details: {
      problem: "Improve real-time speech quality.",
      approach: "Train a speech enhancement transformer on Microsoft’s DNS Challenge dataset.",
      technology: ["Speech Enhancement", "Transformer", "Microsoft DNS Challenge"],
      results: ["PESQ 3.2"]
    }
  },
  {
    id: "scenescript",
    name: "SceneScript",
    shortName: "SceneScript",
    tier: 3,
    category: "AI / Computer Vision",
    categories: ["ai-agents", "machine-learning"],
    description: "CLIP + LLM pipeline generating timestamped natural-language summaries for video.",
    tags: ["CLIP", "LLM Pipeline", "Video Summaries", "Timestamping"],
    visual: "field",
    details: {
      problem: "Generate useful natural-language summaries for video content.",
      approach: "Combine CLIP representations with an LLM pipeline to produce timestamped summaries."
    }
  },
  {
    id: "nasa-exoplanet-statistics",
    name: "NASA Exoplanet Statistical Analysis",
    shortName: "Exoplanet Statistics",
    tier: 3,
    category: "Statistics / Scientific Computing",
    categories: ["statistics", "data-analysis", "scientific-computing"],
    description: "EDA and bootstrap hypothesis testing on NASA’s Exoplanet Archive dataset.",
    tags: ["NASA Exoplanet Archive", "EDA", "Bootstrap Hypothesis Testing"],
    visual: "statistics",
    details: {
      problem: "Explore patterns in NASA’s Exoplanet Archive dataset.",
      approach: "Use exploratory data analysis and bootstrap hypothesis testing."
    }
  },
  {
    id: "cmb-dipole-firas",
    name: "CMB Dipole Anisotropy & FIRAS Analysis",
    shortName: "CMB / FIRAS",
    tier: 3,
    category: "Scientific Computing / Cosmology",
    categories: ["scientific-computing", "statistics"],
    description: "MSc thesis work on blackbody radiation inversion using COBE/FIRAS data, including derivation of observer velocity.",
    metric: { value: "408.5 km/s", label: "observer velocity" },
    tags: ["CMB Dipole", "FIRAS", "Blackbody Radiation", "COBE"],
    visual: "spectrum",
    details: {
      problem: "Analyze the CMB dipole and FIRAS through blackbody radiation inversion.",
      approach: "Use COBE/FIRAS data to derive the observer velocity.",
      technology: ["COBE/FIRAS", "Blackbody Radiation Inversion", "Scientific Computing"],
      results: ["Derived observer velocity: 408.5 km/s"]
    }
  },
  {
    id: "campus-event-scheduling",
    name: "Campus Event Scheduling / Dijkstra",
    shortName: "Campus Scheduling",
    tier: 3,
    category: "Algorithms / Data Science",
    categories: ["data-science", "scientific-computing"],
    description: "Conflict-free campus event scheduling engine using min-heaps, balanced trees, hash maps, and Dijkstra’s shortest-path routing.",
    tags: ["Min-heaps", "Balanced Trees", "Hash Maps", "Dijkstra", "Complexity Analysis"],
    visual: "network",
    details: {
      problem: "Build a conflict-free campus event scheduling engine.",
      approach: "Combine priority/data-structure techniques with Dijkstra’s shortest-path routing and full complexity analysis."
    }
  },
  {
    id: "nfl-data-mining",
    name: "NFL Data Mining & Analytics",
    shortName: "NFL Data Mining",
    tier: 3,
    category: "Data Analysis",
    categories: ["data-analysis", "statistics"],
    description: "NFL data mining and analytics work with ETL pipelines and classification models for game-outcome prediction.",
    tags: ["ETL", "NFL Data", "Classification", "Game-outcome Prediction"],
    github: "https://github.com/albo8953/nfl-data-mining-project",
    externalRepository: true,
    visual: "nfl",
    details: {
      problem: "Build data mining and analytics workflows for NFL game-outcome prediction.",
      approach: "Use ETL pipelines and classification models for game-outcome prediction.",
      technology: ["ETL", "Classification", "NFL Data Mining"],
      takeaway: "The linked repository is maintained by another contributor and is included here for reference."
    }
  },
  {
    id: "clinsightai",
    name: "ClinsightAI",
    shortName: "ClinsightAI",
    tier: 3,
    category: "AI / Data Science",
    categories: ["ai-agents", "data-science"],
    description: "Healthcare decision intelligence platform with schema-agnostic ingestion and PCA-based clustering.",
    tags: ["Healthcare AI", "Schema-agnostic Ingestion", "PCA", "Clustering"],
    visual: "evaluation",
    details: {
      problem: "Build a healthcare decision intelligence platform across varying data schemas.",
      approach: "Use schema-agnostic ingestion and PCA-based clustering for the analysis workflow."
    }
  },
  {
    id: "exoplanet-habitability",
    name: "Exoplanet Habitability",
    shortName: "Exoplanet Habitability",
    tier: 3,
    category: "Machine Learning / Scientific Computing",
    categories: ["machine-learning", "scientific-computing"],
    description: "Machine-learning analysis of exoplanet habitability, connected to computational and scientific methods.",
    tags: ["Machine Learning", "Exoplanets", "Habitability", "Scientific Computing"],
    github: "https://github.com/Aayushx9/CSCI-5612-ML-Exoplanet-Habitability",
    visual: "orbit",
    details: {
      problem: "Analyze exoplanet habitability with machine-learning methods.",
      approach: "Apply machine learning to an exoplanet habitability problem.",
      technology: ["Machine Learning", "Exoplanet Data", "Habitability Analysis"]
    }
  },
  {
    id: "exoplanet-neo-dark-matter-eda",
    name: "Exoplanets / NEO / Dark Matter EDA",
    shortName: "Space Data EDA",
    tier: 3,
    category: "Data Analysis / Scientific Computing",
    categories: ["data-analysis", "statistics", "scientific-computing"],
    description: "Exploratory data analysis spanning exoplanets, near-Earth objects, and dark matter datasets.",
    tags: ["Exoplanets", "Near-Earth Objects", "Dark Matter", "EDA"],
    github: "https://github.com/Aayushx9/EDA-Exoplanets-NEO__DM-Aayush",
    visual: "cosmos",
    details: {
      problem: "Explore structure and patterns across three space-science datasets.",
      approach: "Conduct exploratory data analysis for exoplanets, near-Earth objects, and dark matter."
    }
  },
  {
    id: "numerical-methods",
    name: "Numerical Methods",
    shortName: "Numerical Methods",
    tier: 3,
    category: "Scientific Computing",
    categories: ["scientific-computing"],
    description: "Computational methods for approximating and analyzing mathematical systems.",
    tags: ["Numerical Methods", "Mathematical Modeling"],
    visual: "methods",
    details: {
      problem: "Translate mathematical formulations into reliable numerical approximations."
    }
  },
  {
    id: "computational-physics",
    name: "Computational Physics",
    shortName: "Computational Physics",
    tier: 3,
    category: "Scientific Computing",
    categories: ["scientific-computing"],
    description: "Physics problems approached through mathematical modeling, simulation, and computation.",
    tags: ["Computational Physics", "Simulation", "Mathematical Modeling"],
    visual: "equations",
    details: {
      problem: "Model physical systems through computational methods."
    }
  },
  {
    id: "pdes",
    name: "Partial Differential Equations",
    shortName: "PDEs",
    tier: 3,
    category: "Scientific Computing",
    categories: ["scientific-computing"],
    description: "Computational analysis and modeling of partial differential equations.",
    tags: ["PDEs", "Computational Modeling"],
    visual: "field",
    details: {
      problem: "Analyze and model systems governed by partial differential equations."
    }
  }
]);
