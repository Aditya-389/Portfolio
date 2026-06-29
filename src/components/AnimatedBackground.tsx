import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(23,21,18,.075)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,18,.075)_1px,transparent_1px)] [background-size:44px_44px]" />
      <motion.div
        className="pointer-events-none fixed -right-28 top-12 h-80 w-80 rounded-full bg-[#4e7efc]/20 blur-3xl"
        animate={{ scale: [1, 1.14, 1], x: [0, -24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none fixed -left-24 bottom-0 h-72 w-72 rounded-full bg-[#ff6c4a]/20 blur-3xl"
        animate={{ scale: [1.08, 1, 1.08], y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}
