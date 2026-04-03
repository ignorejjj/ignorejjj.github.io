import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './InteractiveTerminal.module.css'

interface HistoryEntry {
  command: string
  output: React.ReactNode
}

const ASCII_LOGO = `    ___  ___  ___
   |   ||   ||   |
   | J || J || J |
   |___||___||___|
   |___|_Jiajie Jin___|`

const publications = { total: 25, ccfA: 12 }
const projectStars = '5k+'

function getNeofetch(): React.ReactNode {
  return (
    <div className={styles.neofetch}>
      <pre className={styles.neofetchArt}>{ASCII_LOGO}</pre>
      <div className={styles.neofetchInfo}>
        <div><strong style={{ color: 'var(--accent-green)' }}>visitor</strong><span style={{ color: 'var(--text-muted)' }}>@</span><strong style={{ color: 'var(--accent-cyan)' }}>jjj.dev</strong></div>
        <div className={styles.neofetchSep}>{'─'.repeat(20)}</div>
        <div><span className={styles.neofetchLabel}>Name:</span> <span className={styles.neofetchValue}>Jiajie Jin (金佳杰)</span></div>
        <div><span className={styles.neofetchLabel}>Role:</span> <span className={styles.neofetchValue}>PhD Student @ RUC</span></div>
        <div><span className={styles.neofetchLabel}>Research:</span> <span className={styles.neofetchValue}>RAG · LLM · AI Agents</span></div>
        <div><span className={styles.neofetchLabel}>Papers:</span> <span className={styles.neofetchValue}>{publications.total} ({publications.ccfA} CCF-A)</span></div>
        <div><span className={styles.neofetchLabel}>GitHub Stars:</span> <span className={styles.neofetchValue}>{projectStars}</span></div>
        <div><span className={styles.neofetchLabel}>Advisor:</span> <span className={styles.neofetchValue}>Prof. Zhicheng Dou</span></div>
        <div><span className={styles.neofetchLabel}>Location:</span> <span className={styles.neofetchValue}>Beijing, China 🇨🇳</span></div>
        <div><span className={styles.neofetchLabel}>Uptime:</span> <span className={styles.neofetchValue}>Since Sep. 2023</span></div>
        <div className={styles.colorBlocks}>
          {['var(--nord11)', 'var(--nord12)', 'var(--nord13)', 'var(--nord14)', 'var(--nord7)', 'var(--nord8)', 'var(--nord9)', 'var(--nord15)'].map((c, i) =>
            <span key={i} className={styles.colorBlock} style={{ backgroundColor: c }} />
          )}
        </div>
      </div>
    </div>
  )
}

const COMMANDS: Record<string, { desc: string }> = {
  help: { desc: 'Show available commands' },
  neofetch: { desc: 'Display system info' },
  whoami: { desc: 'Who is the visitor?' },
  ls: { desc: 'List sections' },
  cat: { desc: 'Read a file (try: cat readme.txt)' },
  echo: { desc: 'Echo a message' },
  date: { desc: 'Show current date' },
  clear: { desc: 'Clear terminal' },
  fortune: { desc: 'Get a random fortune' },
  skills: { desc: 'Show skill tree' },
  stats: { desc: 'Show research stats' },
  coffee: { desc: '☕ Brew some coffee' },
  sudo: { desc: 'Try superuser...' },
}

const fortunes = [
  '"The best way to predict the future is to invent it." — Alan Kay',
  '"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke',
  '"In the middle of difficulty lies opportunity." — Albert Einstein',
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Premature optimization is the root of all evil." — Donald Knuth',
  '"AI is the new electricity." — Andrew Ng',
]

const skillTree = `
┌─── Languages ────────────────────────┐
│ Python     ████████████████████ 95%  │
│ TypeScript ██████████████░░░░░░ 70%  │
│ C/C++      ████████░░░░░░░░░░░ 40%  │
└──────────────────────────────────────┘
┌─── Frameworks ───────────────────────┐
│ PyTorch    ████████████████████ 95%  │
│ HuggingFace████████████████░░░░ 80%  │
│ React      ██████████░░░░░░░░░ 50%  │
└──────────────────────────────────────┘
┌─── Research ─────────────────────────┐
│ RAG        ████████████████████ 99%  │
│ LLM        ████████████████████ 95%  │
│ AI Agents  ████████████████░░░░ 85%  │
│ Deep Search████████████████░░░░ 80%  │
└──────────────────────────────────────┘`

function processCommand(input: string, onNavigate?: (section: string) => void): React.ReactNode {
  const trimmed = input.trim()
  const parts = trimmed.split(/\s+/)
  const cmd = parts[0]?.toLowerCase() ?? ''
  const args = parts.slice(1).join(' ')

  switch (cmd) {
    case '':
      return null
    case 'help':
      return (
        <div>
          <div style={{ color: 'var(--accent-green)', marginBottom: 4 }}>Available commands:</div>
          {Object.entries(COMMANDS).map(([name, { desc }]) => (
            <div key={name}>
              <span style={{ color: 'var(--accent-cyan)', display: 'inline-block', width: 100 }}>{name}</span>
              <span style={{ color: 'var(--text-muted)' }}>{desc}</span>
            </div>
          ))}
          <div style={{ color: 'var(--text-muted)', marginTop: 6, fontSize: 11 }}>
            💡 Tip: Try typing "neofetch" or "fortune"!
          </div>
        </div>
      )
    case 'neofetch':
      return getNeofetch()
    case 'whoami':
      return <span style={{ color: 'var(--accent-green)' }}>visitor — Welcome to Jiajie Jin's homepage! 👋</span>
    case 'ls':
      return (
        <div>
          <span style={{ color: 'var(--accent-cyan)' }}>about.md</span>{' '}
          <span style={{ color: 'var(--accent-cyan)' }}>publications.json</span>{' '}
          <span style={{ color: 'var(--accent-purple)' }}>projects/</span>{' '}
          <span style={{ color: 'var(--accent-cyan)' }}>experience.log</span>{' '}
          <span style={{ color: 'var(--text-muted)' }}>readme.txt</span>
        </div>
      )
    case 'cat':
      if (args.toLowerCase().includes('readme')) {
        return (
          <div>
            <div style={{ color: 'var(--accent-yellow)' }}>{'='.repeat(40)}</div>
            <div style={{ color: 'var(--accent-green)' }}>  Welcome to Jiajie Jin's Homepage!</div>
            <div style={{ color: 'var(--accent-yellow)' }}>{'='.repeat(40)}</div>
            <br />
            <div>Hi there! I'm a PhD student working on</div>
            <div>RAG, LLMs, and AI Agents at RUC.</div>
            <br />
            <div>Navigate using the tabs above, or just</div>
            <div>type commands here for fun! Try "help"</div>
            <div>to see what's available.</div>
            <br />
            <div style={{ color: 'var(--text-muted)' }}>Last modified: {new Date().toLocaleDateString()}</div>
          </div>
        )
      }
      if (!args) return <span style={{ color: 'var(--accent-red)' }}>cat: missing file operand. Try: cat readme.txt</span>
      if (['about.md', 'about'].includes(args.toLowerCase())) {
        onNavigate?.('about')
        return <span style={{ color: 'var(--text-muted)' }}>→ Switching to about.md...</span>
      }
      if (['publications.json', 'publications'].includes(args.toLowerCase())) {
        onNavigate?.('publications')
        return <span style={{ color: 'var(--text-muted)' }}>→ Switching to publications.json...</span>
      }
      if (['experience.log', 'experience'].includes(args.toLowerCase())) {
        onNavigate?.('experience')
        return <span style={{ color: 'var(--text-muted)' }}>→ Switching to experience.log...</span>
      }
      return <span style={{ color: 'var(--accent-red)' }}>cat: {args}: No such file or directory</span>
    case 'cd':
      if (['projects', 'projects/'].includes(args.toLowerCase())) {
        onNavigate?.('projects')
        return <span style={{ color: 'var(--text-muted)' }}>→ Entering projects/...</span>
      }
      return <span style={{ color: 'var(--accent-red)' }}>cd: {args || '~'}: Not a directory</span>
    case 'echo':
      return <span>{args || ''}</span>
    case 'date':
      return <span>{new Date().toString()}</span>
    case 'clear':
      return '__CLEAR__'
    case 'fortune':
      return <span style={{ color: 'var(--accent-yellow)' }}>{fortunes[Math.floor(Math.random() * fortunes.length)]}</span>
    case 'stats':
      return (
        <div style={{ lineHeight: 1.8 }}>
          <div style={{ color: 'var(--accent-green)', marginBottom: 4 }}>📊 Research Stats</div>
          <div><span style={{ color: 'var(--accent-cyan)', display: 'inline-block', width: 160 }}>Publications:</span> <span style={{ color: 'var(--accent-yellow)' }}>25+</span></div>
          <div><span style={{ color: 'var(--accent-cyan)', display: 'inline-block', width: 160 }}>CCF-A Papers:</span> <span style={{ color: 'var(--accent-green)' }}>12</span></div>
          <div><span style={{ color: 'var(--accent-cyan)', display: 'inline-block', width: 160 }}>GitHub Stars:</span> <span style={{ color: 'var(--accent-yellow)' }}>5k+</span></div>
          <div><span style={{ color: 'var(--accent-cyan)', display: 'inline-block', width: 160 }}>Open Source Projects:</span> <span style={{ color: 'var(--accent-purple)' }}>6</span></div>
        </div>
      )
    case 'skills':
      return <pre style={{ color: 'var(--accent-green)', fontSize: 12, lineHeight: 1.4 }}>{skillTree}</pre>
    case 'coffee':
      return (
        <div>
          <pre style={{ color: 'var(--accent-yellow)', fontSize: 11 }}>{`
    ( (
     ) )
  ........
  |      |]
  \\      /
   \`----'`}</pre>
          <div style={{ color: 'var(--accent-green)', marginTop: 4 }}>☕ Here's your coffee! Now back to research...</div>
        </div>
      )
    case 'sudo':
      return <span style={{ color: 'var(--accent-red)' }}>Nice try! 🔒 You don't have sudo privileges on this server.</span>
    case 'rm':
      return <span style={{ color: 'var(--accent-red)' }}>rm: Permission denied. Nice try! 😏</span>
    case 'exit':
      return <span style={{ color: 'var(--text-muted)' }}>There is no escape. You're already home. 🏠</span>
    case 'ping':
      return <span style={{ color: 'var(--accent-green)' }}>PONG! 🏓 Response time: {Math.floor(Math.random() * 50 + 10)}ms</span>
    case 'matrix':
      return '__MATRIX__'
    default:
      return <span style={{ color: 'var(--accent-red)' }}>command not found: {cmd}. Type "help" for available commands.</span>
  }
}

interface InteractiveTerminalProps {
  onNavigate?: (section: string) => void
}

export default function InteractiveTerminal({ onNavigate }: InteractiveTerminalProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [showMatrix, setShowMatrix] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [history, scrollToBottom])

  useEffect(() => {
    if (showMatrix) {
      const timer = setTimeout(() => setShowMatrix(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [showMatrix])

  const handleSubmit = useCallback(() => {
    const trimmedInput = input.trim()
    if (trimmedInput) {
      setCmdHistory(prev => [...prev, trimmedInput])
      setHistoryIdx(-1)
    }

    const output = processCommand(input, onNavigate)

    if (output === '__CLEAR__') {
      setHistory([])
      setInput('')
      return
    }

    if (output === '__MATRIX__') {
      setShowMatrix(true)
      setHistory(prev => [...prev, { command: input, output: <span style={{ color: 'var(--accent-green)' }}>Initiating Matrix mode... 🟢</span> }])
      setInput('')
      return
    }

    setHistory(prev => [...prev, { command: input, output }])
    setInput('')
  }, [input, onNavigate])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const newIdx = historyIdx < cmdHistory.length - 1 ? historyIdx + 1 : historyIdx
        setHistoryIdx(newIdx)
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1
        setHistoryIdx(newIdx)
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx])
      } else {
        setHistoryIdx(-1)
        setInput('')
      }
    }
  }, [cmdHistory, historyIdx, handleSubmit])

  return (
    <div className={styles.wrapper} onClick={() => inputRef.current?.focus()}>
      {showMatrix && <MatrixRain />}
      <div className={styles.history}>
        {history.map((entry, i) => (
          <div key={i} className={styles.historyLine}>
            <div className={styles.inputLine}>
              <span className={styles.promptUser}>visitor</span>
              <span className={styles.promptAt}>@</span>
              <span className={styles.promptHost}>jjj</span>
              <span className={styles.promptColon}>:</span>
              <span className={styles.promptPath}>~</span>
              <span className={styles.promptDollar}>$ </span>
              <span>{entry.command}</span>
            </div>
            {entry.output && <div className={styles.outputLine}>{entry.output}</div>}
          </div>
        ))}
      </div>
      <div className={styles.inputLine}>
        <span className={styles.promptUser}>visitor</span>
        <span className={styles.promptAt}>@</span>
        <span className={styles.promptHost}>jjj</span>
        <span className={styles.promptColon}>:</span>
        <span className={styles.promptPath}>~</span>
        <span className={styles.promptDollar}>$ </span>
        <input
          ref={inputRef}
          className={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help' for commands..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <div className={styles.hint}>
        💡 Try: help · neofetch · stats · fortune · skills · coffee · matrix
      </div>
      <div ref={bottomRef} />
    </div>
  )
}

/* Simple Matrix rain effect */
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|;:,.<>?日本語中文한국어'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(46, 52, 64, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#A3BE8C'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => clearInterval(interval)
  }, [])

  return <canvas ref={canvasRef} className={styles.matrixOverlay} />
}
