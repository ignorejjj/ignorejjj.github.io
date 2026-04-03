import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import CommandPrompt from '../Terminal/CommandPrompt'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CommandPrompt command="ls -la ~/projects/" />

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.folderIcon}>&#128193;</span>
              <span className={styles.projectName}>{project.name}</span>
              {project.stars && (
                <span className={styles.stars}>&#9733; {project.stars}</span>
              )}
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.cardFooter}>
              {project.language && (
                <span className={styles.language}>
                  <span className={styles.langDot} /> {project.language}
                </span>
              )}
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
