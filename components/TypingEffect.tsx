'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  phrases: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
}

export default function TypingEffect({
  phrases,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000
}: TypingEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenPhrases)

      return () => clearTimeout(waitTimer)
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      const deleteTimer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1))
      }, deletingSpeed)

      return () => clearTimeout(deleteTimer)
    } else {
      if (currentText === currentPhrase) {
        setIsWaiting(true)
        return
      }

      const typeTimer = setTimeout(() => {
        setCurrentText(prev => currentPhrase.slice(0, prev.length + 1))
      }, typingSpeed)

      return () => clearTimeout(typeTimer)
    }
  }, [currentText, currentPhraseIndex, isDeleting, isWaiting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}