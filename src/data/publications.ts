export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  paperUrl?: string
  codeUrl?: string
  extraLinks?: { label: string; url: string }[]
  highlight?: boolean
}

export const publications: Publication[] = [
  // 2026
  {
    title: 'OmniGAIA: Towards Native Omni-Modal AI Agents',
    authors: 'Xiaoxi Li, Wenxiang Jiao, Jiarui Jin, Shijian Wang, Guanting Dong, Jiajie Jin, Hao Wang, Yinuo Wang, Ji-Rong Wen, Yuan Lu, Zhicheng Dou',
    venue: 'Preprint, 2026',
    year: 2026,
    paperUrl: 'https://arxiv.org/pdf/2602.22897',
  },
  {
    title: 'LaSER: Internalizing Explicit Reasoning into Latent Space for Dense Retrieval',
    authors: 'Jiajie Jin, Yanzhao Zhang, Mingxin Li, Dingkun Long, Pengjun Xie, Yutao Zhu, Zhicheng Dou',
    venue: 'SIGIR 2026',
    year: 2026,
    highlight: true,
    paperUrl: 'https://arxiv.org/pdf/2603.01425',
  },
  {
    title: 'GISA: A Benchmark for General Information-Seeking Assistant',
    authors: 'Yutao Zhu, Xingshuo Zhang, Maosen Zhang, Jiajie Jin, Lian Zhang, Xiaoshuai Song, Kangzhi Zhao, Wencong Zeng, Ruiming Tang, Han Li, Ji-Rong Wen, Zhicheng Dou',
    venue: 'Preprint, 2026',
    year: 2026,
    paperUrl: 'https://arxiv.org/pdf/2602.08543',
  },
  // 2025
  {
    title: 'HiRA: A Hierarchical Reasoning Framework for Decoupled Planning and Execution in Deep Search',
    authors: 'Jiajie Jin, Xiaoxi Li, Guanting Dong, Yuyao Zhang, Yutao Zhu, Yang Zhao, Hongjin Qian, Zhicheng Dou',
    venue: 'SIGIR 2026',
    year: 2025,
    highlight: true,
    paperUrl: 'https://arxiv.org/pdf/2507.02652',
    codeUrl: 'https://github.com/ignorejjj/HiRA',
  },
  {
    title: 'DeepAgent: A General Reasoning Agent with Scalable Toolsets',
    authors: 'Xiaoxi Li, Wenxiang Jiao, Jiarui Jin, Guanting Dong, Jiajie Jin, Yinuo Wang, Hao Wang, Yutao Zhu, Ji-Rong Wen, Yuan Lu, Zhicheng Dou',
    venue: 'Preprint, 2025',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2510.21618',
  },
  {
    title: 'FinSight: Towards Real-World Financial Deep Research',
    authors: 'Jiajie Jin, Yuyao Zhang, Yimeng Xu, Hongjin Qian, Yutao Zhu, Zhicheng Dou',
    venue: 'Preprint, 2025',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2510.16844',
  },
  {
    title: 'Tool-Star: Empowering LLM-Brained Multi-Tool Reasoner via Reinforcement Learning',
    authors: 'Guanting Dong, Yifei Chen, Xiaoxi Li, Jiajie Jin, Hongjin Qian, Yutao Zhu, Hangyu Mao, Guorui Zhou, Zhicheng Dou, Ji-Rong Wen',
    venue: 'Preprint, 2025',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2505.16410',
    codeUrl: 'https://github.com/dongguanting/Tool-Star',
  },
  {
    title: 'Hierarchical Document Refinement for Long-Context Retrieval-Augmented Generation',
    authors: 'Jiajie Jin, Xiaoxi Li, Guanting Dong, Yuyao Zhang, Yutao Zhu, Yongkang Wu, Zhonghua Li, Qi Ye, Zhicheng Dou',
    venue: 'ACL 2025 Main, Oral',
    year: 2025,
    highlight: true,
    paperUrl: 'https://arxiv.org/pdf/2505.10413',
    codeUrl: 'https://github.com/ignorejjj/LongRefiner',
  },
  {
    title: 'RAG-Critic: Leveraging Automated Critic-Guided Agentic Workflow for Retrieval Augmented Generation',
    authors: 'Guanting Dong, Jiajie Jin, Xiaoxi Li, Yutao Zhu, Zhicheng Dou, Ji-Rong Wen',
    venue: 'ACL 2025 Main',
    year: 2025,
    paperUrl: 'https://aclanthology.org/2025.acl-long.179.pdf',
  },
  {
    title: 'Neuro-Symbolic Query Compiler',
    authors: 'Yuyao Zhang, Zhicheng Dou, Xiaoxi Li, Jiajie Jin, Yongkang Wu, Zhonghua Li, Qi Ye, Ji-Rong Wen',
    venue: 'ACL 2025 Findings',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2505.11932',
    codeUrl: 'https://github.com/YuyaoZhangQAQ/QCompiler',
  },
  {
    title: 'RetroLLM: Empowering Large Language Models to Retrieve Fine-Grained Evidence within Generation',
    authors: 'Xiaoxi Li, Jiajie Jin, Yujia Zhou, Yongkang Wu, Zhonghua Li, Qi Ye, Zhicheng Dou',
    venue: 'ACL 2025 Main',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2412.11919',
  },
  {
    title: 'WebThinker: Empowering Large Reasoning Models with Deep Research Capability',
    authors: 'Xiaoxi Li*, Jiajie Jin*, Guanting Dong*, Hongjin Qian, Yutao Zhu, Yongkang Wu, Ji-Rong Wen, Zhicheng Dou',
    venue: 'NeurIPS 2025, Poster',
    year: 2025,
    highlight: true,
    paperUrl: 'https://arxiv.org/pdf/2504.21776',
    codeUrl: 'https://github.com/RUC-NLPIR/WebThinker',
    extraLinks: [
      { label: 'HuggingFace', url: 'https://huggingface.co/lixiaoxi45/WebThinker-QwQ-32B' },
    ],
  },
  {
    title: 'Search-o1: Agentic Search-Enhanced Large Reasoning Models',
    authors: 'Xiaoxi Li, Guanting Dong, Jiajie Jin, Yuyao Zhang, Yujia Zhou, Yutao Zhu, Peitian Zhang, Zhicheng Dou',
    venue: 'EMNLP 2025 Main, Oral',
    year: 2025,
    highlight: true,
    paperUrl: 'https://arxiv.org/pdf/2501.05366',
    codeUrl: 'https://github.com/sunnynexus/Search-o1',
    extraLinks: [
      { label: 'Twitter', url: 'https://x.com/_akhaliq/status/1877584951840764166' },
    ],
  },
  {
    title: 'Single LLM, Multiple Roles: A Unified Retrieval-Augmented Generation Framework Using Role-Specific Token Optimization',
    authors: 'Yutao Zhu, Jiajie Jin, Hongjin Qian, Zheng Liu, Zhicheng Dou, Ji-Rong Wen',
    venue: 'EMNLP 2025 Main',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2505.15444',
  },
  {
    title: 'FlashRAG: A Modular Toolkit for Efficient Retrieval-Augmented Generation Research',
    authors: 'Jiajie Jin, Yutao Zhu, Zhicheng Dou, Guanting Dong, Xinyu Yang, Chenghao Zhang, Tong Zhao, Zhao Yang, Ji-Rong Wen',
    venue: 'TheWebConf 2025 Resource, Oral',
    year: 2025,
    highlight: true,
    paperUrl: 'https://arxiv.org/abs/2405.13576',
    codeUrl: 'https://github.com/RUC-NLPIR/FlashRAG',
  },
  {
    title: 'From Matching to Generation: A Survey on Generative Information Retrieval',
    authors: 'Xiaoxi Li, Jiajie Jin, Yujia Zhou, Yuyao Zhang, Peitian Zhang, Yutao Zhu, Zhicheng Dou',
    venue: 'TOIS, 2025',
    year: 2025,
    paperUrl: 'https://arxiv.org/pdf/2404.14851',
    codeUrl: 'https://github.com/RUC-NLPIR/GenIR-Survey',
  },
  // 2024
  {
    title: 'Trustworthiness in Retrieval-Augmented Generation Systems: A Survey',
    authors: 'Yujia Zhou, Yan Liu, Xiaoxi Li, Jiajie Jin, Hongjin Qian, Zheng Liu, Chaozhuo Li, Zhicheng Dou, Tsung-Yi Ho, Philip S Yu',
    venue: 'Preprint, 2024',
    year: 2024,
    paperUrl: 'https://arxiv.org/pdf/2409.10102',
    codeUrl: 'https://github.com/smallporridge/TrustworthyRAG',
  },
  {
    title: 'Metacognitive Retrieval-Augmented Large Language Models',
    authors: 'Yujia Zhou, Zheng Liu, Jiajie Jin, Jian-Yun Nie, Zhicheng Dou',
    venue: 'TheWebConf 2024 Oral',
    year: 2024,
    paperUrl: 'https://arxiv.org/pdf/2402.11626',
    codeUrl: 'https://github.com/ignorejjj/MetaRAG',
  },
  {
    title: 'Cognitive Personalized Search Integrating Large Language Models with an Efficient Memory Mechanism',
    authors: 'Yujia Zhou, Qiannan Zhu, Jiajie Jin, Zhicheng Dou',
    venue: 'TheWebConf 2024 Oral',
    year: 2024,
    paperUrl: 'https://arxiv.org/pdf/2402.10548',
  },
  {
    title: 'Bider: Bridging Knowledge Inconsistency for Efficient Retrieval-Augmented LLMs via Key Supporting Evidence',
    authors: 'Jiajie Jin, Yutao Zhu, Yujia Zhou, Zhicheng Dou',
    venue: 'ACL 2024 Findings',
    year: 2024,
    paperUrl: 'https://arxiv.org/pdf/2402.12174',
  },
  // 2023
  {
    title: 'Reta-LLM: A Retrieval-Augmented Large Language Model Toolkit',
    authors: 'Jiongnan Liu, Jiajie Jin, Zihan Wang, Jiehan Cheng, Zhicheng Dou, Ji-Rong Wen',
    venue: 'Preprint, 2023',
    year: 2023,
    paperUrl: 'https://arxiv.org/pdf/2306.05212',
    codeUrl: 'https://github.com/RUC-GSAI/YuLan-IR',
  },
]

export const publicationYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)
