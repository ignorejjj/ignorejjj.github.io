import { motion } from 'framer-motion'
import { publications, publicationYears } from '../../data/publications'
import CommandPrompt from '../Terminal/CommandPrompt'
import styles from './Publications.module.css'

function highlightAuthor(authors: string) {
  return authors.replace(/Jiajie Jin/g, '**Jiajie Jin**').split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={styles.me}>{part}</strong> : <span key={i}>{part}</span>
  )
}

export default function Publications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CommandPrompt command="cat publications.json | jq '.[]'" />

      <p className={styles.note}>
        <span className={styles.comment}>{'// '}</span>
        * indicates equal contribution
      </p>

      {publicationYears.map(year => (
        <div key={year} className={styles.yearGroup}>
          <div className={styles.yearHeader}>
            <span className={styles.yearLabel}>/* {year} */</span>
            <span className={styles.yearCount}>
              {publications.filter(p => p.year === year).length} papers
            </span>
          </div>

          {publications.filter(p => p.year === year).map((pub, idx) => (
            <motion.div
              key={idx}
              className={`${styles.paper} ${pub.highlight ? styles.highlight : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <div className={styles.paperTitle}>
                {pub.highlight && <span className={styles.star}>&#9733; </span>}
                {pub.title}
              </div>
              <div className={styles.authors}>{highlightAuthor(pub.authors)}</div>
              <div className={styles.venue}>{pub.venue}</div>
              <div className={styles.paperLinks}>
                {pub.paperUrl && (
                  <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className={styles.paperLink}>
                    [Paper]
                  </a>
                )}
                {pub.codeUrl && (
                  <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className={styles.paperLink}>
                    [Code]
                  </a>
                )}
                {pub.extraLinks?.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.paperLink}>
                    [{link.label}]
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  )
}
