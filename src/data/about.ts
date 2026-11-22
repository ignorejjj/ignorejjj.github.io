export const aboutData = {
  name: 'Jiajie Jin',
  nameCn: '金佳杰',
  title: 'PhD Student @ RUC',
  email: 'jinjiajie@ruc.edu.cn',
  avatar: '/profile.jpg?v=2',
  github: 'https://github.com/ignorejjj',
  scholar: 'https://scholar.google.com/citations?user=iHCuEo8AAAAJ',
  bio: [
    "Hello! I am a second-year Ph.D. student at the Gaoling School of Artificial Intelligence, Renmin University of China, advised by Prof. Zhicheng Dou. I am currently a research intern at Shanghai AI Laboratory, leading search capability development for foundation-model post-training. Previously, I interned at Microsoft Research Asia and Alibaba Tongyi Lab.",
    "I have published 20+ papers, including 8 first/co-first-author CCF-A papers and 5 oral presentations, with 3,000+ Google Scholar citations. My work received the ACL 2026 SAC Highlight Paper Award (FinSight) and the BAAI Conference 2026 AI4Science Highlight (Arbor). I was selected for the CAST Young Science and Technology Talent Cultivation Program and the CIE-Tencent Ph.D. Research Incentive Program.",
    "I lead open-source work including FlashRAG, Arbor, WebThinker, FlashRSI, and CoworkOS, spanning information retrieval, autonomous research, self-improvement, and human-agent collaboration. These projects have approximately 7k GitHub stars and 400k+ framework/dataset downloads in total (as of November 2026). Feel free to reach out to discuss research collaborations or AI agents.",
  ],
  researchIntro:
    "My research focuses on search and LLM agents, post-training, and self-improvement, with an emphasis on efficient information acquisition, long-horizon planning and execution, and verifiable results.",
  researchThemes: [
    {
      title: 'Long-Horizon Autonomy',
      desc: "Building agents that plan, search, reason, and run extended experiments on their own, with persistent state across open-ended research workflows.",
      projects: ['WebThinker', 'HiRA', 'Arbor', 'CoworkOS', 'FlashRSI'],
    },
    {
      title: 'Efficient Knowledge Use',
      desc: "Developing infrastructure and methods that let LLMs acquire, refine, and exploit external knowledge accurately at lower cost.",
      projects: ['FlashRAG', 'LongRefiner', 'BIDER', 'LaSER'],
    },
    {
      title: 'Trustworthiness & Traceability',
      desc: "Making agent reasoning verifiable and auditable, so computations are reproducible and conclusions can be traced back to evidence.",
      projects: ['VeriGraph', 'FinSight'],
    },
  ],
  researchGoal:
    "My long-term goal is to build trustworthy, efficient, autonomous, and long-horizon intelligence - agents that reason reliably over extended trajectories and remain accountable for every claim they make. Beyond the lab, I am equally fascinated by how AI can improve the real world, turning these capabilities into practical systems that make everyday life better.",
  interests: ['Long-Horizon Autonomy', 'Efficient Knowledge Use', 'Trustworthy & Traceable AI'],
}
