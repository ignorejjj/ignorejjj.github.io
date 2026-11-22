export interface Experience {
  role: string
  institution: string
  department: string
  period: string
  advisor?: string
  advisorUrl?: string
}

export interface Internship {
  company: string
  team: string
  topic: string
  period: string
  mentor?: string
}

export interface Award {
  title: string
  date: string
}

export const internships: Internship[] = [
  {
    company: 'Shanghai AI Laboratory',
    team: 'Foundation LLM Team',
    topic: 'Search capability lead for Atria-Dawn / Intern-S2.1 post-training; complex search task and trajectory synthesis, reinforcement learning, and long-horizon agent harnesses',
    period: 'Jul. 2026 - Present',
    mentor: 'Tao Gui',
  },
  {
    company: 'Microsoft Research Asia',
    team: 'Deep Search Team',
    topic: 'Led Arbor, an autonomous research framework using hypothesis-tree refinement for long-horizon experimentation',
    period: 'Mar. 2026 - Jun. 2026',
    mentor: 'Kai Qiu, Chong Luo',
  },
  {
    company: 'Alibaba',
    team: 'Tongyi Lab, Search Agent Team',
    topic: 'Developed LaSER for efficient latent-reasoning dense retrieval; SIGIR 2026 Oral',
    period: 'Sep. 2025 - Feb. 2026',
    mentor: 'Dingkun Long',
  },
]

export const awards: Award[] = [
  { title: 'CAST Young Science and Technology Talent Cultivation Program', date: '2026' },
  { title: 'CIE-Tencent Ph.D. Research Incentive Program (Hunyuan Large Model Track)', date: '2026' },
  { title: 'ACL SAC Highlight Paper Award (FinSight)', date: '2026' },
  { title: 'BAAI Conference AI4Science Highlight Paper (Arbor; one of 16 selected)', date: '2026' },
  { title: "Dean's Scholarship, Renmin University of China", date: '2026' },
  { title: 'BAAI Qingyuan InnoVibe Academic Rising Star (25 selected worldwide)', date: '2026' },
  { title: 'AFAC Financial Intelligence Challenge Track Champion (1/1289)', date: '2025' },
  { title: 'First-Class Academic Scholarship, Renmin University of China', date: '2025' },
  { title: 'JAC-NIO Special Scholarship, USTC', date: '2022' },
  { title: 'First Prize (Anhui), National College Student Mathematics Competition', date: '2021' },
]

export const experiences: Experience[] = [
  {
    role: 'Ph.D. Student',
    institution: 'Renmin University of China (RUC)',
    department: 'Gaoling School of Artificial Intelligence',
    period: 'Sep. 2025 - Present',
    advisor: 'Prof. Zhicheng Dou',
    advisorUrl: 'http://playbigdata.ruc.edu.cn/dou/',
  },
  {
    role: 'Graduate Study in AI (transferred to Ph.D. program)',
    institution: 'Renmin University of China (RUC)',
    department: 'Gaoling School of Artificial Intelligence',
    period: 'Sep. 2023 - Jun. 2025',
    advisor: 'Prof. Zhicheng Dou',
    advisorUrl: 'http://playbigdata.ruc.edu.cn/dou/',
  },
  {
    role: 'B.S. in Statistics',
    institution: 'University of Science and Technology of China (USTC)',
    department: 'School of Mathematical Sciences',
    period: 'Sep. 2019 - Jun. 2023',
  },
]
