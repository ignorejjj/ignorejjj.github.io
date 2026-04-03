import { motion } from 'framer-motion'
import { aboutData } from '../../data/about'
import { experiences } from '../../data/experience'
import CommandPrompt from '../Terminal/CommandPrompt'
import styles from './About.module.css'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CommandPrompt command="cat about.md" />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={aboutData.avatar}
            alt={aboutData.name}
            className={styles.avatar}
          />
          <div className={styles.info}>
            <h1 className={styles.name}>
              {aboutData.name}
              <span className={styles.nameCn}> ({aboutData.nameCn})</span>
            </h1>
            <p className={styles.title}>{aboutData.title}</p>
            <div className={styles.links}>
              <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>&#9733;</span> GitHub
              </a>
              <a href={aboutData.scholar} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>&#9670;</span> Google Scholar
              </a>
              <a href={`mailto:${aboutData.email}`} className={styles.link}>
                <span className={styles.linkIcon}>&#9993;</span> {aboutData.email}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          {aboutData.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              className={styles.paragraph}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            >
              <span className={styles.linePrefix}>{'>>'}</span> {paragraph}
            </motion.p>
          ))}
        </div>
        <div className={styles.interests}>
          <span className={styles.interestsLabel}>research_interests = [</span>
          {aboutData.interests.map((interest, i) => (
            <span key={i} className={styles.tag}>
              "{interest}"{i < aboutData.interests.length - 1 ? ',' : ''}
            </span>
          ))}
          <span className={styles.interestsLabel}>]</span>
        </div>

        <div className={styles.education}>
          <div className={styles.educationHeader}>
            <span className={styles.educationIcon}>🎓</span> Education
          </div>
          <div className={styles.educationList}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className={styles.eduItem}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
              >
                <div className={styles.eduPeriod}>{exp.period}</div>
                <div className={styles.eduRole}>{exp.role}</div>
                <div className={styles.eduInst}>{exp.institution}</div>
                {exp.advisor && (
                  <div className={styles.eduAdvisor}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
