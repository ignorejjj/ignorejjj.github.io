import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    className?: string
}

export default function AnimatedCounter({ end, duration = 1500, suffix = '', prefix = '', className }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const startTime = performance.now()
                    const animate = (now: number) => {
                        const elapsed = now - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * end))
                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        const el = ref.current
        if (el) observer.observe(el)
        return () => { if (el) observer.unobserve(el) }
    }, [end, duration])

    return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>
}
