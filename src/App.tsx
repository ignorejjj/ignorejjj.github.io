import { useState, type FC } from 'react'
import TerminalWindow from './components/Terminal/TerminalWindow'
import TerminalNav from './components/Terminal/TerminalNav'
import About from './components/Sections/About'
import Publications from './components/Sections/Publications'
import Projects from './components/Sections/Projects'
import Experience from './components/Sections/Experience'
import './App.css'

const sections: Record<string, FC> = {
  about: About,
  publications: Publications,
  projects: Projects,
  experience: Experience,
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const ActiveComponent = sections[activeSection]

  return (
    <div className="app">
      <header className="app-header">
        <div className="ascii-art">
{`     _ _       _ _         _ _
    | (_) __ _(_|_) ___   | (_)_ __
 _  | | |/ _\` | | |/ _ \\  | | | '_ \\
| |_| | | (_| | | |  __/  | | | | | |
 \\___/|_|\\__,_|_|_|\\___|  |_|_|_| |_|`}
        </div>
        <p className="subtitle">PhD Student @ RUC | RAG &middot; LLM &middot; AI Agents</p>
      </header>

      <main className="app-main">
        <TerminalWindow title="visitor@jjj.dev ~ portfolio">
          <TerminalNav
            activeSection={activeSection}
            onNavigate={setActiveSection}
          />
          <div className="terminal-body">
            <ActiveComponent />
          </div>
        </TerminalWindow>
      </main>

      <footer className="app-footer">
        <span className="footer-prompt">$</span> echo "Built with React + Vite | Nord Theme"
        <br />
        <span className="footer-output">&copy; {new Date().getFullYear()} Jiajie Jin. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default App
