import { useEffect, useMemo, useRef, useState } from 'react'

type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

function TypingText({ text, speed = 40, className }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const baseText = useMemo(() => text, [text])
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    let index = 0

    const tick = () => {
      if (!isDeleting) {
        index = displayed.length + 1
        const next = baseText.slice(0, index)
        setDisplayed(next)

        if (next.length === baseText.length) {
          timeoutRef.current = window.setTimeout(() => setIsDeleting(true), 1400)
          return
        }
        timeoutRef.current = window.setTimeout(tick, speed)
      } else {
        index = displayed.length - 1
        const next = baseText.slice(0, Math.max(index, 0))
        setDisplayed(next)

        if (next.length === 0) {
          timeoutRef.current = window.setTimeout(() => setIsDeleting(false), 400)
          return
        }
        timeoutRef.current = window.setTimeout(tick, Math.max(20, speed * 0.6))
      }
    }

    timeoutRef.current = window.setTimeout(tick, speed)
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [baseText, speed, displayed.length, isDeleting])

  const combinedClassName = ['typing-text', className].filter(Boolean).join(' ')

  return <span className={combinedClassName}>{displayed}</span>
}

export default TypingText
