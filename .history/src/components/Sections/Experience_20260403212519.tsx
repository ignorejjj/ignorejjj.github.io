import { motion } from 'framer-motion'
import { experiences, internships, awards } from '../../data/experience'
import CommandPrompt from '../Terminal/CommandPrompt'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CommandPrompt command="cat experience.log" />

      {/* Education */}
      <h3 className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>🎓</span> Education
      </h3>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={styles.item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className={styles.dot} />
            <div className={styles.content}>
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.institution}>{exp.institution}</div>
              <div className={styles.department}>{exp.department}</div>
              {exp.advisor && (
                <div className={styles.advisor}>
                  Advisor:{' '}
                  {exp.advisorUrl ? (
                    <a href={exp.advisorUrl} target="_blank" rel="noopener noreferrer">
                      {exp.advisor}
                    </a>
                  ) : (
                    exp.advisor
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Internships */}
      <h3 className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>💼</span> Research Internships
      </h3>
      <div className={styles.timeline}>
        {internships.map((intern, idx) => (
          <motion.div
            key={idx}
            className={styles.item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className={`${styles.dot} ${styles.dotIntern}`} />
            <div className={styles.content}>
              <div className={styles.period}>{intern.period}</div>
              <div className={styles.role}>{intern.company}{intern.team ? ` — ${intern.team}` : ''}</div>
              <div className={styles.topic}>Topic: {intern.topic}</div>
              {intern.mentor && (
                <div className={styles.advisor}>Mentor: {intern.mentor}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Awards */}
      <h3 className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>🏆</span> Awards
      </h3>
      <div className={styles.awardsList}>
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className={styles.awardItem}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <span className={styles.awardDate}>{award.date}</span>
            <span className={styles.awardTitle}>{award.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
