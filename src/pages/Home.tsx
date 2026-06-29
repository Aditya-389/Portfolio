import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

import { SkillPills } from '../components/SkillPills'
import { TypingHeadline } from '../components/TypingHeadline'

export function Home() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10"
    >
      <div className="max-w-3xl mt-30">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#171512]/10 bg-[#fffaf0]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_16px_50px_rgba(23,21,18,0.07)] backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <span className="text-2xl leading-none sm:text-3xl">{'\u{1F468}\u200D\u{1F4BB}'}</span>
          <span className="ml-1">Software Developer</span>
        </motion.div>

        <TypingHeadline />

        <motion.div
          className="mt-8 grid gap-6 border-l border-[#171512]/15 pl-5 sm:grid-cols-[1fr_auto] sm:items-end"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: 'easeOut' }}
        >
          <p className="max-w-xl text-lg leading-8 text-[#47413a]">
            I build scalable backend systems, reliable APIs, efficient databases, and secure architectures while creating clean, responsive interfaces.
          </p>
          <a
            href="#projects"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#171512] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#f2efe8] shadow-[0_22px_65px_rgba(23,21,18,0.25)] transition hover:-translate-y-1 hover:bg-[#4e7efc]"
          >
            My Work
            <ArrowDownRight className="transition group-hover:translate-x-1 group-hover:translate-y-1" size={18} />
          </a>
        </motion.div>

        <SkillPills />
      </div>
    </section>
  )
}
