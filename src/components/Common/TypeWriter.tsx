import { useState, useEffect } from 'react'

interface TypeWriterProps {
  text: string
  speed?: number
  className?: string
  onDone?: () => void
}

export default function TypeWriter({ text, speed = 50, className, onDone }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[index])
        setIndex(i => i + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      onDone?.()
    }
  }, [index, text, speed, onDone])

  return <span className={className}>{displayed}<span className="blink-cursor">█</span></span>
}
