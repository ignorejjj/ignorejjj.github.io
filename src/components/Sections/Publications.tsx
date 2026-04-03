import { useState } from 'react'
import { motion } from 'framer-motion'
import { publications, publicationYears } from '../../data/publications'
import CommandPrompt from '../Terminal/CommandPrompt'
import styles from './Publications.module.css'

function highlightAuthor(authors: string) {
  return authors.replace(/Jiajie Jin/g, '**Jiajie Jin**').split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className={styles.me}>{part}</strong> : <span key={i}>{part}</span>
  )
}

type ViewMode = 'selected' | 'all'

export default function Publications() {
  const [viewMode, setViewMode] = useState<ViewMode>('selected')
  const [search, setSearch] = useState('')

  const selectedPubs = publications.filter(p => p.highlight)
  const basePubs = viewMode === 'selected' ? selectedPubs : publications
  const filteredPubs = search.trim()
    ? basePubs.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.venue.toLowerCase().includes(search.toLowerCase())
    )
    : basePubs
  const years = [...new Set(filteredPubs.map(p => p.year))].sort((a, b) => b - a)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CommandPrompt command="cat publications.json | jq '.[]'" />

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleBtn} ${viewMode === 'selected' ? styles.toggleActive : ''}`}
            onClick={() => setViewMode('selected')}
          >
            ★ Selected ({selectedPubs.length})
          </button>
          <button
            className={`${styles.toggleBtn} ${viewMode === 'all' ? styles.toggleActive : ''}`}
            onClick={() => setViewMode('all')}
          >
            All ({publications.length})
          </button>
        </div>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="grep publications..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch('')}>×</button>
          )}
        </div>
      </div>

      <p className={styles.note}>
        <span className={styles.comment}>{'// '}</span>
        * indicates equal contribution
        {search && (
          <span className={styles.searchResult}>
            {' '}— found {filteredPubs.length} result{filteredPubs.length !== 1 ? 's' : ''}
          </span>
        )}
      </p>

      {years.map(year => {
        const yearPubs = filteredPubs.filter(p => p.year === year)
        return (
          <div key={year} className={styles.yearGroup}>
            <div className={styles.yearHeader}>
              <span className={styles.yearLabel}>/* {year} */</span>
              <span className={styles.yearCount}>
                {yearPubs.length} paper{yearPubs.length !== 1 ? 's' : ''}
              </span>
            </div>

            {yearPubs.map((pub, idx) => (
              <motion.div
                key={pub.title}
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
        )
      })}

      {filteredPubs.length === 0 && (
        <div className={styles.empty}>
          <span className={styles.comment}>{'// '}</span>
          No publications found matching "{search}"
        </div>
      )}
    </motion.div>
  )
}
