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
    company: 'Microsoft Research Asia',
    team: '',
    topic: 'Auto Research',
    period: 'Mar. 2026 - Present',
    mentor: 'Kai Qiu, Chong Luo',
  },
  {
    company: 'Alibaba',
    team: 'Tongyi Lab',
    topic: 'Latent Reasoning for Foundation Embedding Model',
    period: 'Sep. 2025 - Mar. 2026',
    mentor: 'Dingkun Long',
  },
]

export const awards: Award[] = [
  {
    title: 'WeiLai Special Scholarship',
    date: 'Dec. 2022',
  },
  {
    title: 'First-Class Merit Student Scholarship',
    date: 'Dec. 2024',
  },
  {
    title: 'First Prize (1/1289), AFAC Financial Intelligence Innovation Competition',
    date: 'Aug. 2025',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Ph.D. Student',
    institution: 'Renmin University of China (RUC)',
    department: 'Gaoling School of Artificial Intelligence',
    period: 'Jul. 2025 - Present',
    advisor: 'Prof. Zhicheng Dou',
    advisorUrl: 'http://playbigdata.ruc.edu.cn/dou/',
  },
  {
    role: 'M.Sc. Student',
    institution: 'Renmin University of China (RUC)',
    department: 'Gaoling School of Artificial Intelligence',
    period: 'Sep. 2023 - Jul. 2025',
    advisor: 'Prof. Zhicheng Dou',
    advisorUrl: 'http://playbigdata.ruc.edu.cn/dou/',
  },
  {
    role: 'B.Eng. in Statistics',
    institution: 'University of Science and Technology of China (USTC)',
    department: 'School of Mathematical Sciences',
    period: 'Sep. 2019 - Jul. 2023',
  },
]
