import { motion } from 'framer-motion'

import { navItems } from '../data/navigation'

export function Navbar() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <motion.a
        href="#home"
        className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em]"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border border-[#171512]/15 bg-[#171512] text-[#f2efe8]">
          AC
        </span>
        <span className="hidden sm:inline">Aditya Chouhan</span>
      </motion.a>

      <motion.nav
        className="hidden items-center gap-6 rounded-full border border-[#171512]/10 bg-[#fffaf0]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] shadow-[0_18px_60px_rgba(23,21,18,0.08)] backdrop-blur md:flex"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      >
        {navItems.map((item) => (
          <a className="transition hover:text-[#4e7efc]" href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </motion.nav>

      <motion.a
        href="https://drive.google.com/file/d/1nsqo77UOOP7Uhe7EmwbZvZNcSKMBKEo6/view?usp=sharing"
        target="_blank"   // opens in new tab
        rel="noopener noreferrer"
        className="hidden items-center gap-2 rounded-full border border-[#171512]/15 bg-[#171512] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2efe8] shadow-[0_16px_50px_rgba(23,21,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#4e7efc] sm:inline-flex"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
      >
        View Resume
      </motion.a>
    </header>
  )
}
