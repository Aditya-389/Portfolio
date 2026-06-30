import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react'

import { experiences } from '../data/experience'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
      >
      </motion.div>

      <div className="mt-16 space-y-8">
        {experiences.map((experience, index) => (
          <motion.article
            className="group relative overflow-hidden rounded-[1.6rem] border border-[#171512]/10 bg-[#fffaf0]/72 p-5 shadow-[0_35px_110px_rgba(23,21,18,0.12)] backdrop-blur sm:p-7"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
          >
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#ff6c4a]/12 blur-3xl transition group-hover:scale-125" />
            <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-[#4e7efc]/12 blur-3xl transition group-hover:scale-125" />

            <div className="relative grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                className="grid min-h-72 place-items-center overflow-hidden rounded-[1.25rem] border border-[#171512]/10 bg-white p-4"
                whileHover={{ rotate: -1.5, y: -6 }}
                transition={{ type: 'spring', stiffness: 190, damping: 18 }}
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="h-full max-h-72 w-full object-contain"
                />
              </motion.div>

              <div>
                <div className="mb-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#171512]/10 bg-[#f2efe8]/70 px-4 py-2 text-sm font-semibold text-[#47413a]">
                    <BriefcaseBusiness size={16} />
                    {experience.role}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#171512]/10 bg-[#f2efe8]/70 px-4 py-2 text-sm font-semibold text-[#47413a]">
                    <CalendarDays size={16} />
                    {experience.period}
                  </span>
                </div>

                <h3 className="text-[clamp(2.4rem,5vw,5rem)] font-black uppercase leading-[0.88] text-[#171512]">
                  {experience.company}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.highlights.map((highlight) => (
                    <span
                      className="rounded-full border border-[#171512]/10 bg-[#f2efe8]/70 px-4 py-2 text-sm font-semibold text-[#47413a]"
                      key={highlight}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <a
                  href={experience.letterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#171512] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#f2efe8] shadow-[0_22px_65px_rgba(23,21,18,0.2)] transition hover:-translate-y-1 hover:bg-[#4e7efc]"
                >
                  Experience Letter
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
