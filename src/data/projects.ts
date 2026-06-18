export interface Project {
  name: string
  description: string
  url: string
  stars?: string
  language?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'FlashRAG',
    description: 'A Python toolkit for efficient knowledge-grounded generation research - plug-and-play components for retrieval, generation, and one-click evaluation. Adopted by 2k+ developers worldwide.',
    url: 'https://github.com/RUC-NLPIR/FlashRAG',
    stars: '3k+',
    tags: ['Knowledge Use', 'Retrieval', 'Toolkit'],
  },
  {
    name: 'Arbor',
    description: 'A general autonomous-research framework that turns scattered experiments into a persistent hypothesis tree, coordinating long-horizon search, evidence, and verified artifact improvement. Selected as a BAAI Conference 2026 AI4Science Highlight Paper and ranked #1 on Hugging Face Daily Papers.',
    url: 'https://github.com/RUC-NLPIR/Arbor',
    tags: ['Autonomous Research', 'Hypothesis Tree', 'Agent'],
  },
  {
    name: 'WebThinker',
    description: 'Teaching large reasoning models to think deeply while autonomously searching the web - enabling o1/R1-style models to perform open-ended deep research like a human expert. Ranked #1 on Hugging Face Daily Papers.',
    url: 'https://github.com/RUC-NLPIR/WebThinker',
    stars: '1k+',
    tags: ['Reasoning', 'Web Search', 'Agent'],
  },
  {
    name: 'Search-o1',
    description: 'Supercharging reasoning models with real-time search — seamlessly injecting external knowledge into chain-of-thought reasoning to tackle knowledge-intensive tasks.',
    url: 'https://github.com/sunnynexus/Search-o1',
    stars: '1k+',
    tags: ['Search', 'Reasoning', 'Agent'],
  },
  {
    name: 'FinSight',
    description: 'An agentic deep-research system built for the real financial world - automated multi-step analysis, report generation, and decision support across markets. Accepted to ACL 2026 Main, Oral, and selected as a Best Paper Candidate.',
    url: 'https://github.com/ignorejjj/FinSight',
    tags: ['Finance', 'Deep Research', 'Agent'],
  },
  {
    name: 'HiRA',
    description: 'Hierarchical reasoning meets deep search — decoupling high-level planning from low-level execution for more structured, efficient, and accurate information discovery.',
    url: 'https://github.com/ignorejjj/HiRA',
    tags: ['Deep Search', 'Reasoning', 'Agent'],
  },
  {
    name: 'LongRefiner',
    description: 'Refining long documents into concise, high-quality context for LLMs - a hierarchical pipeline for long-context knowledge use.',
    url: 'https://github.com/ignorejjj/LongRefiner',
    tags: ['Long Context', 'Knowledge Use', 'Document'],
  },
]
