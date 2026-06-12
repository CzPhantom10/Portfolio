export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  stack: string[]
  repoUrl: string
  demoUrl?: string
  highlights: string[]
}

export const person = {
  name: 'Prateek Sinha',
  headline: "Hey There, I'm Prateek.",
  subheadline:
    'CSE student at SRM Institute of Science and Technology. I build AI systems across LLMs, RAG, and reinforcement learning with a strong focus on practical problem solving.',
  terminalIntro: 'prateek@portfolio:~$ whoami',
  terminalOutput: 'AI systems engineer • LLMs • RAG • RL',
  email: 'ps826105@gmail.com',
  phone: '+91 9142116703',
  links: {
    github: 'https://github.com/CzPhantom10',
    linkedin: 'https://www.linkedin.com/in/prateek-sinha-6597a32a1/',
    leetcode: 'https://leetcode.com/u/____prateek_/',
  },
} as const

export const achievements = [
  {
    title: 'Top 25 AIR — HackHazard 2025 (Monad Track)',
    year: '2025',
  },
  {
    title: 'Top 100 AIR — HackHazard 2025',
    year: '2025',
  },
  {
    title: 'Top 10 — AMU Hacks 4.0',
    year: '2025',
  },
] as const

export const skills = {
  Languages: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  Frontend: ['React', 'Next.js'],
  Backend: ['Flask', 'FastAPI', 'Firebase'],
  'AI/ML': [
    'PyTorch',
    'TensorFlow',
    'Transformers',
    'LangChain',
    'ChromaDB',
    'OpenCV',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Streamlit',
  ],
  'Tools / DevOps': ['Docker', 'Git', 'GitHub'],
  Domains: ['RAG Systems', 'LLM Applications', 'Reinforcement Learning', 'Solidity', 'Hardhat', 'Ethers.js', 'Pygame'],
} as const

export const projects: Project[] = [
  {
    slug: 'lawgpt',
    title: 'LawGPT',
    tagline: 'Indian legal QA with retrieval-first reasoning.',
    description:
      'A domain-tuned legal QA system designed around retrieval-first workflows: retrieve relevant Indian legal context, then answer with citations and controlled generation.',
    stack: ['Python', 'Transformers', 'Retrieval', 'LangChain'],
    repoUrl: 'https://github.com/CzPhantom10/LawGPT',
    highlights: [
      'Built an Indian legal QA loop: query → retrieve → reason → answer with sources',
      'Optimized experimentation for fine-tuning and prompt/retrieval ablations',
    ],
  },
  {
    slug: 'rag-chatbot-system',
    title: 'RAG Chatbot System',
    tagline: 'Composable retrieval pipeline for grounded generation.',
    description:
      'A modular retrieval architecture with clear boundaries across ingestion → embedding → vector search → response synthesis, built to swap components without rewriting the system.',
    stack: ['Python', 'Embeddings', 'Vector Search', 'LangChain'],
    repoUrl: 'https://github.com/CzPhantom10/ragmodel',
    highlights: [
      'End-to-end pipeline with replaceable modules (chunking, models, retrievers, prompts)',
      'Grounded responses by design: retrieved context drives generation, not free-form guesswork',
    ],
  },
  {
    slug: 'apex-ai-survival-arena',
    title: 'APEX AI Survival Arena',
    tagline: 'Reinforcement learning in a simulated survival arena.',
    description:
      'A simulation-first RL project: a game-like environment with controllable dynamics, agent observation/action loops, and DQN-style training runs for emergent behavior exploration.',
    stack: ['Python', 'Reinforcement Learning', 'DQN', 'Pygame'],
    repoUrl: 'https://github.com/ShashankaShekharSharma/SamsungPrismHackathon',
    highlights: [
      'Built the environment loop: state, rewards, termination, and reproducible resets',
      'Ran DQN experiments for agent policies and multi-agent interactions',
    ],
  },
  {
    slug: 'questmint',
    title: 'QuestMint',
    tagline: 'Hackathon product built end-to-end with on-chain hooks.',
    description:
      'A full-stack hackathon build that shipped a complete user flow—frontend, backend services, and lightweight blockchain integration—kept intentionally pragmatic under time pressure.',
    stack: ['Solidity', 'Hardhat', 'Ethers.js', 'Firebase'],
    repoUrl: 'https://github.com/ryugA17/hackHazard',
    highlights: [
      'Engineered an end-to-end flow: UX → API/backend → chain interactions → persistence',
      'Balanced delivery speed with reliability (clear abstractions, minimal surface area)',
    ],
  },
  {
    slug: 'chikitchakai',
    title: 'ChikitchakAI',
    tagline: 'Healthcare accessibility prototype with an API-first core.',
    description:
      'A hackathon prototype focused on healthcare accessibility: practical AI-assisted flows wrapped behind a modular API, designed to iterate quickly while keeping the backend clean and testable.',
    stack: ['Python', 'FastAPI', 'Applied ML'],
    repoUrl: 'https://github.com/ShashankaShekharSharma/ChikitchakAI_AMUHACKS4.0',
    highlights: [
      'API-first backend with modular endpoints to support rapid product iteration',
      'Product-focused AI workflows aimed at real usability, not a demo-only model',
    ],
  },
  {
    slug: 'llm-from-scratch',
    title: 'LLM From Scratch',
    tagline: 'Transformer internals implemented from first principles.',
    description:
      'An educational build that reconstructs transformer components and training loops to understand attention, tokenization, optimization dynamics, and failure modes through experiments.',
    stack: ['Python', 'PyTorch', 'Transformer Internals'],
    repoUrl: 'https://github.com/CzPhantom10/LLM-FROM-SCRATCH',
    highlights: [
      'Implemented core blocks (attention/MLP/norm) and a minimal training pipeline',
      'Structured experiments to learn training dynamics and debugging workflows',
    ],
  },
  {
    slug: 'stock-price-predictor',
    title: 'Stock Price Predictor',
    tagline: 'Forecasting pipeline with evaluation-first iteration.',
    description:
      'A time-series forecasting project centered on feature engineering, live data ingestion, and evaluation-driven iteration across modeling baselines and pipeline variants.',
    stack: ['Python', 'Feature Engineering', 'Time Series', 'Scikit-learn'],
    repoUrl: 'https://github.com/CzPhantom10/Stock-Price-Predictor',
    highlights: [
      'Built a practical data workflow: fetch → clean → feature → train → evaluate',
      'Compared baselines with repeatable evaluation rather than one-off results',
    ],
  },
  {
    slug: 'efficient-fine-tuning-strategies',
    title: 'Efficient Fine-Tuning Strategies',
    tagline: 'Full fine-tuning vs LoRA vs prompting, side-by-side.',
    description:
      'A reproducible NLP study comparing adaptation strategies on AG News: full fine-tuning, LoRA-based parameter-efficient updates, and prompt baselines—optimized for fast, repeatable runs.',
    stack: ['Python', 'PyTorch', 'LoRA', 'Transformers'],
    repoUrl: 'https://github.com/CzPhantom10/minor-project',
    highlights: [
      'Designed an apples-to-apples comparison across tuning strategies and baselines',
      'Reproducible experiment harness for efficient transformer adaptation',
    ],
  },
]

export const featuredProject =
  projects.find((p) => p.slug === 'efficient-fine-tuning-strategies') ??
  projects[0]
