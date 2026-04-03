export interface Experience {
  role: string
  institution: string
  department: string
  period: string
  advisor?: string
  advisorUrl?: string
}

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
