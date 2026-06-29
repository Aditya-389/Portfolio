import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const words = ['Design', 'develop', 'Deploye']
const typingSpeed = 120
const deletingSpeed = 78
const holdDelay = 900

export function TypingHeadline() {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const isWordComplete = letterCount === currentWord.length
    const isWordEmpty = letterCount === 0

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && isWordComplete) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && isWordEmpty) {
          setIsDeleting(false)
          setWordIndex((current) => (current + 1) % words.length)
          return
        }

        setLetterCount((current) => current + (isDeleting ? -1 : 1))
      },
      !isDeleting && isWordComplete ? holdDelay : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => window.clearTimeout(timeout)
  }, [isDeleting, letterCount, wordIndex])

  return (
    <motion.h1
      className="max-w-[12ch] text-[clamp(2.4rem,5vw,3.8rem)] font-black uppercase leading-[0.78] text-[#171512]"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="ml-4">I, </span>
      <span className="inline-block min-w-[7ch]">{words[wordIndex].slice(0, letterCount)}</span>
      <motion.span
        className="ml-2 inline-block h-[0.72em] w-[0.08em] bg-[#171512] align-[-0.02em]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
      />
    </motion.h1>
  )
}
