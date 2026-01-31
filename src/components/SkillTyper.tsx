import { useEffect, useMemo, useRef, useState } from 'react'

type SkillTyperProps = {
  skills: string[]
  speed?: number
  pauseMs?: number
  className?: string
}

function SkillTyper({ skills, speed = 60, pauseMs = 1200, className }: SkillTyperProps) {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const list = useMemo(() => skills.filter(Boolean), [skills])

  useEffect(() => {
    const current = list[index % list.length] ?? ''

    const tick = () => {
      if (!current) return

      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1)
        setDisplayed(next)

        if (next.length === current.length) {
          timeoutRef.current = window.setTimeout(() => setIsDeleting(true), pauseMs)
          return
        }
        timeoutRef.current = window.setTimeout(tick, speed)
      } else {
        const next = current.slice(0, Math.max(displayed.length - 1, 0))
        setDisplayed(next)

        if (next.length === 0) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % list.length)
          timeoutRef.current = window.setTimeout(tick, Math.max(40, speed * 0.6))
          return
        }
        timeoutRef.current = window.setTimeout(tick, Math.max(40, speed * 0.6))
      }
    }

    timeoutRef.current = window.setTimeout(tick, speed)

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [displayed.length, index, isDeleting, list, pauseMs, speed])

  return <span className={className}>{displayed}</span>
}

export default SkillTyper
