import type { ReactNode } from 'react'
import styles from './TerminalWindow.module.css'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
}

export default function TerminalWindow({ title = 'visitor@jjj ~ terminal', children }: TerminalWindowProps) {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <span className={styles.titleText}>{title}</span>
        <div style={{ width: 52 }} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
