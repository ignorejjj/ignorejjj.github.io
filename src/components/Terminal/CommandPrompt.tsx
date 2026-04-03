import styles from './CommandPrompt.module.css'

interface CommandPromptProps {
  command: string
  path?: string
}

export default function CommandPrompt({ command, path = '~' }: CommandPromptProps) {
  return (
    <div className={styles.prompt}>
      <span className={styles.user}>visitor</span>
      <span className={styles.at}>@</span>
      <span className={styles.host}>jjj</span>
      <span className={styles.separator}>:</span>
      <span className={styles.path}>{path}</span>
      <span className={styles.dollar}>$</span>
      <span className={styles.command}>{command}</span>
    </div>
  )
}
