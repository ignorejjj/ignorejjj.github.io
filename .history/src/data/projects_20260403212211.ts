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
    description: 'A Python toolkit for efficient RAG research — plug-and-play components covering 16+ advanced RAG methods, 50+ pre-built pipelines, and one-click evaluation. Adopted by 2k+ developers worldwide.',
    url: 'https://github.com/RUC-NLPIR/FlashRAG',
    stars: '2k+',
    tags: ['RAG', 'Toolkit', 'LLM'],
  },
  {
    name: 'WebThinker',
    description: 'Teaching large reasoning models to think deeply while autonomously searching the web — enabling o1/R1-style models to perform open-ended deep research like a human expert.',
    url: 'https://github.com/RUC-NLPIR/WebThinker',
    stars: '1k+',
    tags: ['Reasoning', 'Web Search', 'Agent'],
  },
  {
    name: 'Search-o1',
    description: 'Supercharging reasoning models with real-time search — seamlessly injecting external knowledge into chain-of-thought reasoning to tackle knowledge-intensive tasks.',
    url: 'https://github.com/sunnynexus/Search-o1',
    stars: '1k+',
    tags: ['Search', 'Reasoning', 'LLM'],
  },
  {
    name: 'FinSight',
    description: 'An agentic deep-research system built for the real financial world — automated multi-step analysis, report generation, and decision support across markets.',
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
    description: 'Taming long documents for RAG — a hierarchical refinement pipeline that distills lengthy retrieved passages into concise, high-quality context for LLMs.',
    url: 'https://github.com/ignorejjj/LongRefiner',
    tags: ['RAG', 'Long Context', 'Document'],
  },
]
