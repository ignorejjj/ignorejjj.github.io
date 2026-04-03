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
    description: 'A modular toolkit for efficient Retrieval-Augmented Generation research. Supports various RAG pipelines with plug-and-play components.',
    url: 'https://github.com/RUC-NLPIR/FlashRAG',
    stars: '2k+',
    tags: ['RAG', 'Toolkit', 'LLM'],
  },
  {
    name: 'WebThinker',
    description: 'Empowering Large Reasoning Models with Deep Research Capability through autonomous web search and thinking.',
    url: 'https://github.com/RUC-NLPIR/WebThinker',
    stars: '1k+',
    tags: ['Reasoning', 'Web Search', 'Agent'],
  },
  {
    name: 'Search-o1',
    description: 'Agentic Search-Enhanced Large Reasoning Models. Integrates search capabilities into reasoning workflows.',
    url: 'https://github.com/sunnynexus/Search-o1',
    stars: '1k+',
    tags: ['Search', 'Reasoning', 'LLM'],
  },
  {
    name: 'FinSight',
    description: 'Towards Real-World Financial Deep Research. An agentic system for comprehensive financial analysis and research.',
    url: 'https://github.com/ignorejjj/FinSight',
    tags: ['Finance', 'Deep Research', 'Agent'],
  },
  {
    name: 'HiRA',
    description: 'Hierarchical Reasoning Framework for Deep Search with decoupled planning and execution.',
    url: 'https://github.com/ignorejjj/HiRA',
    tags: ['Deep Search', 'Reasoning', 'Agent'],
  },
  {
    name: 'LongRefiner',
    description: 'Hierarchical Document Refinement for Long-Context Retrieval-Augmented Generation.',
    url: 'https://github.com/ignorejjj/LongRefiner',
    tags: ['RAG', 'Long Context', 'Document'],
  },
  {
    name: 'MetaRAG',
    description: 'Metacognitive Retrieval-Augmented Large Language Models with self-reflective retrieval strategies.',
    url: 'https://github.com/ignorejjj/MetaRAG',
    tags: ['RAG', 'Metacognition', 'LLM'],
  },
]
