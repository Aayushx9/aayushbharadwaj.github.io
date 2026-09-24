/*
 * Project content is intentionally separated from presentation.
 * Add or edit projects here; index.html and main.js render this data.
 * Tier 1 is the primary recruiter-facing work; tier 2 is secondary ML/AI/data work;
 * tier 3 is the lower-priority scientific and computational archive.
 */
window.PORTFOLIO_PROJECTS = Object.freeze([
  {
    id: "honda-agent-evaluation",
    name: "Honda — Agent Evaluation",
    shortName: "Agent Evaluation",
    tier: 1,
    category: "AI Agent Evaluation / AI Engineering / Data Science",
    categories: ["ai-agents", "machine-learning", "data-science"],
    description: "Building and evaluating an AI agent on a real task, designing quantitative and qualitative measures of performance, implicit behavioral signals, ground truth, and agreement before production deployment.",
    badge: "Current work",
    tags: ["AI Agents", "Agent Evaluation", "Quantitative Evaluation", "Qualitative Evaluation", "Behavioral Signals", "Human Judgment", "Ground Truth", "Inter-Rater Agreement"],
    visual: "evaluation",
    details: {
      problem: "Define what good AI-agent performance means before production deployment.",
      approach: "Build and evaluate an AI agent on a real task; design scoring across quantitative metrics, qualitative judgment, and implicit signals; construct multi-labeler ground truth; and validate automated scoring against human judgment.",
      technology: ["AI Agents", "Quantitative Evaluation", "Qualitative Evaluation", "Behavioral Signals", "Ground Truth", "Inter-Rater Agreement"],
      takeaway: "Reliable evaluation connects behavioral evidence, human judgment, and reproducible scoring."
    }
  },
  {
    id: "logiq",
    name: "LogIQ — Cloud-Native Anomaly Intelligence Engine",
    shortName: "LogIQ",
    tier: 1,
    category: "Machine Learning / AI Engineering / Data Intelligence",
    categories: ["machine-learning", "data-science", "ai-agents"],
    description: "Cloud-native anomaly detection for distributed microservice logs using a semi-supervised two-layer LSTM autoencoder, with a FastAPI inference service and containerized deployment.",
    metric: { value: "> 0.90", label: "ROC-AUC" },
    tags: ["LSTM Autoencoder", "Anomaly Detection", "Distributed Logs", "FastAPI REST", "Docker", "Kubernetes"],
    github: "https://github.com/Aayushx9/LogIQ-anomaly-detection",
    visual: "anomaly",
    details: {
      problem: "Detect anomalous patterns in distributed microservice log data.",
      approach: "Train a two-layer LSTM autoencoder semi-supervised on distributed microservice logs, then serve anomaly detection through a FastAPI REST inference service with Docker and Kubernetes manifests.",
      technology: ["2-layer LSTM Autoencoder", "Semi-supervised Learning", "Distributed Microservice Logs", "FastAPI REST", "Docker", "Kubernetes"],
      results: ["ROC-AUC > 0.90"],
      takeaway: "The project connects sequence modeling, telemetry analysis, API serving, and container orchestration."
    }
  },
  {
    id: "will-it-chart",
    name: "Will It Chart — Hit-Song Prediction Engine",
    shortName: "Will It Chart",
    tier: 1,
    category: "Machine Learning / Predictive Modeling / Music Data Analysis",
    categories: ["machine-learning", "data-science", "statistics"],
    description: "Predictive modeling system for hit-song prediction from 114,000 Spotify tracks, with feature-level explanation and a live Gradio dashboard.",
    metric: { value: "0.73", label: "ROC-AUC" },
    tags: ["114,000 Tracks", "XGBoost", "Predictive Modeling", "Feature Analysis", "SHAP", "Gradio"],
    github: "https://github.com/Aayushx9/Will-It-Chart",
    visual: "chart",
    details: {
      problem: "Study which observable song characteristics are associated with popularity.",
      approach: "Train an XGBoost classifier on 114,000 Spotify tracks, use SHAP for feature-level explanation, and deploy a live Gradio dashboard with hit probability and per-feature breakdown.",
      technology: ["XGBoost", "SHAP", "Gradio", "Cross-validation"],
      results: ["ROC-AUC 0.73", "5-fold cross-validation 0.725 ± 0.004"],
      takeaway: "Predictive modeling is paired with cross-validation and interpretation rather than treated as a black box."
    }
  },
  {
    id: "ghosthunt",
    name: "GhostHunt — Fraudulent Job Posting Detector",
    shortName: "GhostHunt",
    tier: 1,
    category: "Machine Learning / NLP / Fraud Detection",
    categories: ["machine-learning", "data-analysis", "data-science"],
    description: "Fraudulent job-posting detection using 18 behavioral features, TF-IDF NLP features, and an interpretable XGBoost classifier.",
    metric: { value: "87%", label: "held-out accuracy" },
    tags: ["NLP", "18 Behavioral Features", "TF-IDF", "XGBoost", "SHAP", "Gradio"],
    visual: "fraud",
    details: {
      problem: "Detect fraudulent job postings from posting behavior and text.",
      approach: "Combine 18 behavioral features with TF-IDF NLP features in an XGBoost classification workflow, apply SHAP for per-prediction interpretability, and deploy a live Gradio scoring interface.",
      technology: ["Behavioral Features", "TF-IDF", "XGBoost", "SHAP", "Gradio"],
      results: ["87% held-out accuracy"],
      takeaway: "Behavioral and textual signals work together in an applied fraud-detection system."
    }
  },
  {
    id: "bubblebreak",
    name: "BubbleBreak — Recommender Fairness Simulation",
    shortName: "BubbleBreak",
    tier: 1,
    category: "Machine Learning / Recommender Systems / Algorithmic Fairness",
    categories: ["machine-learning", "statistics", "ai-agents"],
    description: "Fairness-aware recommender evaluated through a 1,000-agent, 90-day recommendation simulation, with filter-bubble reduction and its engagement tradeoff measured explicitly.",
    metric: { value: "34%", label: "less filter-bubble" },
    tags: ["1,000 Agents", "90 Days", "PyTorch", "Recommender Systems", "Fairness-aware", "Simulation"],
    visual: "network",
    details: {
      problem: "Explore whether a recommender can reduce filter-bubble formation over time.",
      approach: "Build a 1,000-agent, 90-day recommendation simulation and train a fairness-aware PyTorch recommender.",
      technology: ["PyTorch", "Recommender Systems", "Simulation", "Fairness-aware Modeling"],
      results: ["34% reduction in filter-bubble formation", "2.1% engagement cost"],
      takeaway: "The result is presented as a measured tradeoff: less bubble formation alongside a small engagement cost."
    }
  },
  {
    id: "uxposed",
    name: "UXposed — Dark-Pattern Detection & Compliance Analytics",
    shortName: "UXposed",
    tier: 1,
    category: "Data Analysis / NLP / Compliance-Oriented Analytics",
    categories: ["data-analysis", "data-science", "statistics"],
    description: "Automated collection and classification of UI copy across 50 Fortune 500 checkout flows into eight FTC/EU DSA dark-pattern categories, with a severity-weighted Manipulation Index for compliance-oriented benchmarking.",
    metric: { value: "50", label: "checkout flows" },
    tags: ["Web Data Collection", "NLP Classification", "FTC/EU DSA Categories", "Severity-weighted Index", "Benchmarking", "Dashboard"],
    visual: "audit",
    details: {
      problem: "Measure recurring dark-pattern behavior in high-traffic checkout experiences.",
      approach: "Collect and classify UI copy across 50 Fortune 500 checkout flows into eight FTC/EU DSA dark-pattern categories, then build a severity-weighted Manipulation Index dashboard for benchmarking.",
      technology: ["Web Data Collection", "NLP", "UI Copy Classification", "FTC/EU DSA Categories", "Severity-weighted Index"],
      results: ["50 checkout flows", "8 dark-pattern categories"],
      takeaway: "The project turns interface data collection and classification into a repeatable, compliance-oriented analytical workflow."
    }
  },
  {
    id: "github-popularity",
    name: "GitHub Repository Popularity — Multi-Dataset Statistical Analysis",
    shortName: "Repository Popularity",
    tier: 2,
    category: "Data Analysis / Statistical Modeling",
    categories: ["data-analysis", "statistics", "data-science"],
    description: "Multi-dataset statistical analysis of GitHub repository popularity using multiple linear regression and a negative binomial GLM.",
    tags: ["Multiple Linear Regression", "Negative Binomial GLM", "Count Modeling", "R²", "AIC", "ANOVA", "Kruskal-Wallis"],
    visual: "regression",
    details: {
      problem: "Model and compare repository popularity using count-oriented statistical methods.",
      approach: "Fit multiple linear regression and a negative binomial GLM across two datasets; compare fit and examine language effects with ANOVA and Kruskal-Wallis analysis.",
      technology: ["Multiple Linear Regression", "Negative Binomial GLM", "Count Modeling", "R²", "AIC", "ANOVA", "Kruskal-Wallis"],
      results: ["R² = 0.61 / 0.76", "AIC = 7,487 vs. Poisson AIC = 74,851"],
      takeaway: "Model choice is treated as an inference question rather than a leaderboard exercise."
    }
  },
  {
    id: "nfl-data-mining",
    name: "NFL Data Mining & Analytics",
    shortName: "NFL Data Mining",
    tier: 2,
    category: "Data Analysis / Data Mining / Sports Analytics",
    categories: ["data-analysis", "statistics", "data-science"],
    description: "NFL data mining and analytics work with ETL pipelines and classification models for game-outcome prediction.",
    tags: ["ETL", "NFL Data", "Classification", "Game-outcome Prediction", "Analytics"],
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
    id: "micro",
    name: "Micro — Adaptive AI Study Platform",
    shortName: "Micro",
    tier: 2,
    category: "Data Science / Bayesian Modeling / Adaptive Learning",
    categories: ["data-science", "statistics", "ai-agents"],
    description: "Adaptive AI study platform with a Bayesian mastery-modeling engine, full posterior inference, credible intervals, and confidence-/speed-weighted evidence accumulation.",
    tags: ["Bayesian Inference", "Beta-Bernoulli", "Posterior Inference", "Credible Intervals", "Adaptive Learning", "Canvas API"],
    visual: "mastery",
    details: {
      problem: "Estimate learner mastery and support adaptive study decisions.",
      approach: "Engineer a Bayesian mastery-modeling engine with a full posterior-inference pipeline, credible intervals, and confidence-/speed-weighted evidence accumulation; integrate the Canvas API for context-aware navigation.",
      technology: ["Bayesian Inference", "Beta-Bernoulli Modeling", "Posterior Inference", "Credible Intervals", "Canvas API"],
      takeaway: "A probabilistic mastery model turns learning evidence into an adaptive decision signal."
    }
  },
  {
    id: "drawquery",
    name: "DrawQuery — Sketch-to-SQL Code Generation",
    shortName: "DrawQuery",
    tier: 2,
    category: "AI / Computer Vision / Data Systems",
    categories: ["ai-agents", "machine-learning", "data-science"],
    description: "Vision-transformer system for converting hand-drawn ER diagrams into valid SQL DDL through an interactive Gradio interface.",
    metric: { value: "< 3 sec", label: "inference" },
    tags: ["Vision Transformer", "Sketch-to-SQL", "ER Diagrams", "SQL DDL", "Gradio"],
    visual: "schema",
    details: {
      problem: "Translate hand-drawn database diagrams into structured SQL DDL.",
      approach: "Use a vision transformer to translate hand-drawn ER diagrams into valid SQL DDL through an interactive Gradio interface.",
      technology: ["Vision Transformer", "Sketch-to-SQL", "ER Diagram Understanding", "SQL DDL", "Gradio"],
      results: ["Sub-3-second inference"],
      takeaway: "The system connects visual database design with executable schema definitions."
    }
  },
  {
    id: "scenescript",
    name: "SceneScript — Multimodal Video Summarization",
    shortName: "SceneScript",
    tier: 2,
    category: "Multimodal AI / Applied AI",
    categories: ["ai-agents", "machine-learning", "data-science"],
    description: "CLIP + LLM pipeline generating timestamped natural-language summaries for video.",
    tags: ["CLIP", "LLM Pipeline", "Multimodal AI", "Video Summaries", "Timestamping"],
    visual: "field",
    details: {
      problem: "Generate useful natural-language summaries for video content.",
      approach: "Combine CLIP representations with an LLM pipeline to produce timestamped summaries.",
      technology: ["CLIP", "LLM Pipeline", "Multimodal Summarization"],
      takeaway: "The project connects visual representation with language generation for applied multimodal AI."
    }
  },
  {
    id: "crispai",
    name: "CrispAI — Real-Time Speech Enhancement",
    shortName: "CrispAI",
    tier: 2,
    category: "Applied AI / Speech Processing",
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
    id: "csci-5612-exoplanet",
    name: "CSCI 5612 — Exoplanet Discovery & Habitability",
    shortName: "CSCI 5612 Exoplanets",
    tier: 2,
    category: "Machine Learning / Data Science / Scientific Data Analysis",
    categories: ["machine-learning", "data-science", "statistics", "scientific-computing"],
    description: "A data-science lifecycle for exoplanet discovery and habitability: data gathering, cleaning, EDA, clustering, PCA, Naive Bayes, Decision Trees, SVMs, regression, and neural networks.",
    tags: ["Machine Learning", "Data Science", "Statistical Analysis", "Predictive Modeling", "PCA", "Neural Networks"],
    github: "https://github.com/Aayushx9/CSCI-5612-ML-Exoplanet-Habitability",
    liveUrl: "https://aayushx9.github.io/CSCI-5612-ML-Exoplanet-Habitability/",
    visual: "orbit",
    details: {
      problem: "Apply a full data-science and machine-learning workflow to exoplanet discovery and habitability data.",
      approach: "Move through data gathering, cleaning, exploratory data analysis, clustering, PCA, Naive Bayes, Decision Trees, SVMs, regression, and neural networks.",
      technology: ["Machine Learning", "Data Science", "Statistical Analysis", "Predictive Modeling", "PCA", "Neural Networks"],
      takeaway: "The project presents exoplanet science as an applied data-science problem rather than a primarily physics-labeled exercise."
    }
  },
  {
    id: "cmb-dipole-firas",
    name: "CMB Dipole Anisotropy & FIRAS Dataset Analysis",
    shortName: "CMB / FIRAS",
    tier: 3,
    category: "Scientific Computing / Cosmology",
    categories: ["scientific-computing", "statistics"],
    description: "MSc thesis work on blackbody radiation inversion using COBE/FIRAS data, including derivation of observer velocity.",
    metric: { value: "408.5 km/s", label: "observer velocity" },
    tags: ["CMB Dipole", "FIRAS", "COBE", "Blackbody Radiation"],
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
    name: "Campus Event Scheduling System & Dijkstra",
    shortName: "Campus Scheduling",
    tier: 3,
    category: "Algorithms / Quantitative Foundations",
    categories: ["data-science", "scientific-computing"],
    description: "Conflict-free campus event scheduling engine using min-heaps, balanced trees, hash maps, and Dijkstra’s shortest-path routing.",
    tags: ["Min-heaps", "Balanced Trees", "Hash Maps", "Dijkstra", "Complexity Analysis"],
    visual: "network",
    details: {
      problem: "Build a conflict-free campus event scheduling engine.",
      approach: "Combine priority and data-structure techniques with Dijkstra’s shortest-path routing and full complexity analysis."
    }
  },
  {
    id: "exoplanet-neo-dark-matter-eda",
    name: "Exoplanets / NEO / Dark Matter EDA",
    shortName: "Space Data EDA",
    tier: 3,
    category: "Data Analysis / Scientific Data",
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
    category: "Computational & Quantitative Foundations",
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
    category: "Computational & Quantitative Foundations",
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
    category: "Computational & Quantitative Foundations",
    categories: ["scientific-computing"],
    description: "Computational analysis and modeling of partial differential equations.",
    tags: ["PDEs", "Computational Modeling"],
    visual: "field",
    details: {
      problem: "Analyze and model systems governed by partial differential equations."
    }
  }
]);
