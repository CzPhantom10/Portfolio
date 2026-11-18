export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  stack: string[]
  repoUrl: string
  demoUrl?: string
  date?: string
  highlights: string[]
  /** Card and building colour */
  color: 'coral' | 'sun' | 'mint' | 'lilac' | 'sky'
  /** Relative building height in the hero skyline (1 to 5) */
  floors: number
}

export const person = {
  name: 'Prateek Sinha',
  firstName: 'Prateek',
  role: 'AI / ML Engineer',
  location: 'Chennai, India',
  summary:
    'Final year CSE undergrad (2027) building across the full data to model path: SQL and Pandas for ingestion and analysis, PyTorch and Hugging Face for training and fine tuning, and LLM / RAG tooling for applied AI.',
  bio: [
    "I'm a final year Computer Science undergraduate at SRM Institute of Science and Technology, looking for AI/ML and data roles.",
    'I work across the full data to model path: SQL and Pandas for ingestion, cleaning and analysis; PyTorch and Hugging Face for training and fine tuning; and LLM / RAG tooling for applied AI.',
    'Underneath it all is a solid base in Data Structures and Algorithms, which I practise regularly in Python on LeetCode and HackerRank.',
    'I like building projects that solve real problems, picking up new skills, and keeping up with what is new in the field.',
  ],
  email: 'ps826105@gmail.com',
  phone: '+91 9142116703',
  links: {
    github: 'https://github.com/CzPhantom10',
    linkedin: 'https://www.linkedin.com/in/prateeksinha10',
    leetcode: 'https://leetcode.com/u/____prateek_/',
    hackerrank: 'https://www.hackerrank.com/profile/CzPhantom',
  },
} as const

export const education = {
  school: 'SRM Institute of Science and Technology',
  place: 'Kattankulathur, Tamil Nadu',
  degree: 'B.Tech in Computer Science and Engineering',
  cgpa: '8.36',
  startYear: '2023',
  endYear: '2027',
} as const

export const achievements = [
  {
    rank: 'Top 25',
    title: 'HackHazard 2025, Monad Track',
    detail: 'Global rank for QuestMint.',
    year: '2025',
  },
  {
    rank: 'Top 100',
    title: 'HackHazard 2025, Overall',
    detail: 'Out of 8,600+ participants worldwide.',
    year: '2025',
  },
] as const

export const certifications = [
  { title: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Jun 2026' },
  { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild', date: 'Jul 2026' },
  { title: 'GitHub Copilot', issuer: 'Microsoft', date: 'Apr 2026' },
  { title: 'Machine Learning with Python', issuer: 'IBM / Cognitive Class', date: 'Oct 2025' },
  { title: 'DBMS Fundamentals and Advanced Concepts', issuer: 'Scaler', date: 'May 2025' },
] as const

export const skills = {
  'Languages & CS': ['Python', 'SQL (MySQL)', 'Data Structures & Algorithms', 'DBMS'],
  'AI / ML': [
    'PyTorch',
    'Hugging Face Transformers',
    'LoRA / PEFT',
    'LangChain',
    'RAG',
    'ChromaDB',
    'Vector Embeddings',
    'Multi Agent Orchestration',
    'Reinforcement Learning (DQN)',
    'Scikit-learn',
    'OpenCV',
    'LLM APIs (Groq, Anthropic, Gemini)',
  ],
  'Evaluation & Stats': [
    'Macro F1',
    'Balanced Accuracy',
    'Confusion Matrices',
    'Hit Rate',
    'MRR',
    'Hypothesis Testing',
    'Time Series (STL)',
  ],
  'Data & Backend': [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'SQLite',
    'FastAPI',
    'Streamlit',
    'MCP servers / clients',
    'ETL / Incremental Ingestion',
    'EDA',
    'Git & GitHub',
  ],
} as const

/** Every project, newest first. The first five also appear as buildings on the home page. */
export const projects: Project[] = [
  {
    slug: 'dies-primus',
    title: 'Dies Primus',
    tagline: 'Any GitHub repo becomes a 3D city you can walk through.',
    description:
      'Repo City turns a codebase into an explorable 3D city: folders become districts, files become buildings, and an AI guide explains what each one does.',
    stack: ['Python', 'GitHub API', 'Groq', 'Gemini', 'Three.js'],
    repoUrl: 'https://github.com/akshayykrjhaa/dies-primus',
    demoUrl: 'https://dies-primus.netlify.app/',
    date: 'Oct 2026',
    highlights: [
      'Turned a 7,000+ file repository into a city of 320 buildings by ranking files by importance.',
      'Stayed within a free tier limit of 8,000 tokens/min by sending file outlines instead of full code, plus a rate limiter.',
      'Cached results per Git commit and fell back to basic descriptions when the LLM was unavailable.',
    ],
    color: 'lilac',
    floors: 5,
  },
  {
    slug: 'rag-analytics-assistant',
    title: 'RAG Analytics Assistant',
    tagline: 'Ask a spreadsheet questions in plain English.',
    description:
      'An end to end assistant that finds the right columns with retrieval, lets the LLM write only a small plan, and has Pandas do the maths, so numbers are never made up.',
    stack: ['Python', 'ChromaDB', 'Pandas', 'Matplotlib', 'Groq'],
    repoUrl: 'https://github.com/CzPhantom10/End-To-End-RAG-Analytics-Assistant',
    date: 'Sep 2026',
    highlights: [
      'Found the right columns for all 30 test questions by storing short column descriptions in ChromaDB.',
      'No made up numbers: the LLM writes a plan, Pandas calculates the answer.',
      'Cleans messy CSV/Excel automatically (tested on a 9,994 row sales file) with a dashboard that flags unusual months.',
    ],
    color: 'mint',
    floors: 4,
  },
  {
    slug: 'financial-performance-analysis',
    title: 'Financial Performance Analytics',
    tagline: 'Messy finance extracts in, an auditable SQL warehouse and dashboard out.',
    description:
      'A ten stage pipeline that cleans and reconciles transactional data, loads a star schema warehouse, and answers finance questions with SQL, classical statistics and time series analysis. No ML anywhere, so every number traces back to a query or a named test.',
    stack: ['Python', 'SQL', 'FastAPI', 'React', 'SciPy', 'Pandas'],
    repoUrl: 'https://github.com/CzPhantom10/Financial-Performance-Analysis-System',
    date: 'Sep 2026',
    highlights: [
      'Cleaned 71,946 raw rows down to 69,156 (96.1% kept), quarantining rejects with a reason instead of deleting them.',
      '29 ANSI SQL queries with CTEs and window functions power every dashboard endpoint across eight pages.',
      'Four anomaly detectors recovered 7 of 7 planted business events (100% recall); seven hypothesis tests report effect sizes next to every p value.',
    ],
    color: 'sky',
    floors: 4,
  },
  {
    slug: 'racecraft-ai',
    title: 'Racecraft AI',
    tagline: 'A multi agent Formula 1 analyst.',
    description:
      'Keeps F1 data current through an incremental FastF1 to SQL pipeline and predicts race winners by scoring every driver on five factors.',
    stack: ['Python', 'SQL', 'FastF1', 'Groq', 'pytest'],
    repoUrl: 'https://github.com/CzPhantom10/F1-AgenticAI',
    demoUrl: 'https://f1-agentic-ai.vercel.app',
    date: 'Jul 2026',
    highlights: [
      'Adds only new races each run instead of reloading everything.',
      'Predicts winners with 50 to 95% confidence from recent form, track history, team strength, qualifying and points.',
      '26 API endpoints covered by 37 pytest tests at 73% code coverage.',
    ],
    color: 'coral',
    floors: 3,
  },
  {
    slug: 'apex-ai-survival-arena',
    title: 'APEX AI Survival Arena',
    tagline: 'Nine DQN agents trying to survive the seasons.',
    description:
      'A multi agent reinforcement learning world with food, water, seasons and temperature, built for watching emergent survival behaviour.',
    stack: ['Python', 'PyTorch', 'NumPy', 'Pygame'],
    repoUrl: 'https://github.com/ShashankaShekharSharma/SamsungPrismHackathon',
    date: 'May 2026',
    highlights: [
      'Trained 9 agents with Deep Q Learning, replay memory and a target network.',
      'Baselines from 100 runs each: random agents last about half a day, idle agents one day in eight.',
      'Runs as a Pygame window, a terminal mode, or a batch mode that saves results to files.',
    ],
    color: 'sun',
    floors: 3,
  },
  {
    slug: 'self-pruning-neural-network',
    title: 'Self Pruning Neural Network',
    tagline: 'A network that learns which of its own weights to switch off.',
    description:
      'A PyTorch classifier for CIFAR 10 where every linear layer carries learnable gates. An L1 penalty on the gates pushes unimportant connections toward zero, so pruning happens during training with no separate step.',
    stack: ['Python', 'PyTorch', 'torchvision'],
    repoUrl: 'https://github.com/CzPhantom10/Self-pruning-neural-network',
    date: 'Apr 2026',
    highlights: [
      'Custom PrunableLinear layer: weights are multiplied by sigmoid gates, so gradients flow through both.',
      '3 layer MLP (3072 to 512 to 256 to 10) trained with cross entropy plus a λ weighted sparsity penalty.',
      'Sweeps λ across 1e-4, 1e-3 and 1e-2, reporting test accuracy, sparsity and a gate histogram for each.',
    ],
    color: 'lilac',
    floors: 2,
  },
  {
    slug: 'distilbert-lora',
    title: 'DistilBERT: Full FT vs LoRA',
    tagline: 'How much do you lose by training 99.8% fewer parameters?',
    description:
      'A side by side study of full fine tuning and LoRA on 120K AG News articles, with per class analysis of where LoRA falls short.',
    stack: ['Python', 'PyTorch', 'Transformers', 'PEFT'],
    repoUrl: 'https://github.com/CzPhantom10/minor-project',
    date: 'Feb 2026',
    highlights: [
      'LoRA reached 91.8% Macro F1 vs 94.6% for full fine tuning while training about 99.8% fewer parameters.',
      'Used per class scores and confusion matrices to find which categories each method gets wrong.',
      'An untrained baseline (about 25%, random for four classes) proves the training mattered.',
    ],
    color: 'mint',
    floors: 2,
  },
  {
    slug: 'stock-price-predictor',
    title: 'Stock Price Predictor',
    tagline: 'Next day closing prices for NVDA, AAPL and TSLA.',
    description:
      'An end to end prediction system that pulls real market data from the Alpaca API, engineers technical indicators, trains a Random Forest, and shows the results in a Streamlit dashboard.',
    stack: ['Python', 'Alpaca API', 'Scikit-learn', 'Pandas', 'Streamlit'],
    repoUrl: 'https://github.com/CzPhantom10/Stock-Price-Predictor',
    date: 'Feb 2026',
    highlights: [
      'Features from volatility, 5/10/20 day moving averages and RSI.',
      'Time series safe 80/20 split with no shuffling, evaluated by Mean Absolute Error.',
      'Dashboard plots actual vs predicted prices, feature importance and model metrics per stock.',
    ],
    color: 'coral',
    floors: 2,
  },
  {
    slug: 'lawgpt',
    title: 'LawGPT',
    tagline: 'GPT-2 pre trained and fine tuned on Indian law.',
    description:
      'A legal assistant built by continuing GPT-2 pretraining on the Constitution, IPC, CPC and NIA texts, then instruction tuning it on IndicLegalQA for constitutional, criminal and civil procedure questions.',
    stack: ['Python', 'PyTorch', 'Transformers', 'GPT-2'],
    repoUrl: 'https://github.com/CzPhantom10/LawGPT',
    date: 'Jul 2025',
    highlights: [
      'Grew the training set from 113 to 11,151 samples: 941 for pretraining and 10,210 for instruction tuning.',
      'Covers 575 IPC sections, 171 CPC procedures, 156 NIA procedures and 10,000+ legal QA pairs.',
      'Mixed precision with gradient accumulation so it trains on a 4GB RTX 3050.',
    ],
    color: 'sun',
    floors: 3,
  },
  {
    slug: 'llm-from-scratch',
    title: 'LLM From Scratch',
    tagline: 'A character level mini GPT, built brick by brick.',
    description:
      'A complete character level language model in PyTorch with both an MLP and a Transformer, trained on Tiny Shakespeare to generate text.',
    stack: ['Python', 'PyTorch'],
    repoUrl: 'https://github.com/CzPhantom10/LLM-FROM-SCRATCH',
    date: 'Jul 2025',
    highlights: [
      'Own tokenizer, multi head self attention, positional encoding, layer norm and residual connections.',
      'Transformer with 3 layers, 4 heads and 128 dim embeddings on 64 character sequences.',
      'Training loop with LR scheduling, gradient clipping, early stopping, checkpointing and loss curves.',
    ],
    color: 'sky',
    floors: 2,
  },
  {
    slug: 'fire-and-smoke-detection',
    title: 'Fire & Smoke Detection',
    tagline: 'Early fire warnings from video or a live webcam.',
    description:
      'A real time detector built with classical computer vision and wrapped in a Streamlit app that works on uploaded videos or a live camera feed.',
    stack: ['Python', 'OpenCV', 'NumPy', 'Streamlit'],
    repoUrl: 'https://github.com/CzPhantom10/Fire-and-smoke-detection',
    date: 'May 2025',
    highlights: [
      'Finds flames by masking red ranges in HSV colour space with thresholds to cut false positives.',
      'Finds smoke from grayscale pixel patterns and contour detection.',
      'Draws bounding boxes on detections and tracks detection statistics.',
    ],
    color: 'coral',
    floors: 1,
  },
  {
    slug: 'questmint',
    title: 'QuestMint',
    tagline: 'Top 25 global rank at HackHazard 2025 (Monad Track).',
    description:
      'A full stack hackathon build that shipped a complete user flow, from frontend and backend services to lightweight on chain integration, kept pragmatic under time pressure.',
    stack: ['Solidity', 'Hardhat', 'Ethers.js', 'Firebase'],
    repoUrl: 'https://github.com/ryugA17/hackHazard',
    date: '2025',
    highlights: [
      'End to end flow: UX, API and backend, chain interactions, persistence.',
      'Balanced delivery speed with reliability through clear abstractions and a small surface area.',
    ],
    color: 'lilac',
    floors: 2,
  },
  {
    slug: 'chikitchakai',
    title: 'ChikitchakAI',
    tagline: 'A healthcare accessibility prototype with an API first core.',
    description:
      'A hackathon prototype for healthcare accessibility: practical AI assisted flows behind a modular API, built to iterate quickly while keeping the backend clean.',
    stack: ['Python', 'FastAPI'],
    repoUrl: 'https://github.com/ShashankaShekharSharma/ChikitchakAI_AMUHACKS4.0',
    date: '2025',
    highlights: [
      'API first backend with modular endpoints for rapid product iteration.',
      'Product focused AI workflows aimed at real usability, not a demo only model.',
    ],
    color: 'mint',
    floors: 1,
  },
]

export const featuredProject = projects[0]
