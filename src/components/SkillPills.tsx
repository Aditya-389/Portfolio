import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export function SkillPills() {
  const skillGroups = [0, 1, 2, 3]
  const anchorRef = useRef<HTMLDivElement>(null)
  const [bleed, setBleed] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const update = () => {
      if (!anchorRef.current) return
      const rect = anchorRef.current.getBoundingClientRect()
      setBleed({
        left: -rect.left,
        width: document.documentElement.clientWidth, // excludes scrollbar, unlike 100vw
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div ref={anchorRef}>
      <motion.div
        className="mb-28 mt-24 overflow-hidden lg:mb-36 lg:mt-32"
        style={{ marginLeft: bleed.left, width: bleed.width }}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.44, ease: 'easeOut' }}
      >
        <motion.div
          className="flex w-max items-center py-4 mt-10"
          animate={{ x: ['-25%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {skillGroups.map((group) => (
            <div
              className="flex min-w-max shrink-0 items-center gap-4 pr-4"
              key={group}
              aria-hidden={group !== 1}
            >
              {skills.map((skill) => (
                <motion.span
                  className="shrink-0 rounded-full border border-[#171512]/10 bg-[#fffaf0]/70 px-6 py-3 text-base font-semibold text-[#47413a] shadow-[0_14px_38px_rgba(23,21,18,0.07)] backdrop-blur transition-colors hover:border-[#4e7efc]/40 hover:bg-[#171512] hover:text-[#f2efe8]"
                  key={`${group}-${skill}`}
                  whileHover={{ y: -6, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
