import styles from './TerminalNav.module.css'

interface TerminalNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const sections = [
  { id: 'about', label: 'about.md' },
  { id: 'publications', label: 'publications.json' },
  { id: 'projects', label: 'projects/' },
  { id: 'experience', label: 'experience.log' },
]

export default function TerminalNav({ activeSection, onNavigate }: TerminalNavProps) {
  return (
    <nav className={styles.nav}>
      {sections.map(section => (
        <button
          key={section.id}
          className={`${styles.tab} ${activeSection === section.id ? styles.tabActive : ''}`}
          onClick={() => onNavigate(section.id)}
        >
          <span className={styles.tabPrefix}>~/</span>
          {section.label}
        </button>
      ))}
    </nav>
  )
}
