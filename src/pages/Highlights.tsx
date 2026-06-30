import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Award, BadgeCheck, Flame } from 'lucide-react'

import { certifications, leetcodeHighlight } from '../data/highlights'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
}

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
      >
      </motion.div>

      <div className="mt-16 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <motion.article
          className="group relative overflow-hidden rounded-[1.6rem] border border-[#171512]/10 bg-[#171512] p-4 shadow-[0_35px_110px_rgba(23,21,18,0.22)]"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#4e7efc]/25 blur-3xl transition group-hover:scale-125" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#ff6c4a]/25 blur-3xl transition group-hover:scale-125" />

          <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-black">
            <video
              className="aspect-video w-full object-cover"
              src={leetcodeHighlight.video}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          <div className="relative p-4 pt-6 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Featured Badge</p>
                <h3 className="mt-3 max-w-2xl text-[clamp(2.3rem,5vw,4.8rem)] font-black uppercase leading-[0.86] text-[#f2efe8]">
                  {leetcodeHighlight.title}
                </h3>
              </div>
              <Flame className="text-[#ff6c4a]" size={38} />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#f2efe8]/72">{leetcodeHighlight.summary}</p>
          </div>
        </motion.article>

        <motion.div
          className="grid gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((certification, index) => (
            <motion.a
              href={certification.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[1.35rem] border border-[#171512]/10 bg-[#fffaf0]/72 p-5 shadow-[0_28px_90px_rgba(23,21,18,0.1)] backdrop-blur transition hover:-translate-y-2"
              key={certification.title}
              variants={item}
            >
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125"
                style={{ backgroundColor: `${certification.accent}26` }}
              />
              <div className="relative flex items-start gap-4">
                <motion.div
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[#171512]/10 bg-[#f2efe8]/80 text-[#b3843d] shadow-[0_16px_40px_rgba(23,21,18,0.08)]"
                  animate={{ rotate: index === 1 ? [0, 4, 0] : [0, -4, 0] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {certification.issuer === 'Postman' ? <BadgeCheck size={28} /> : <Award size={28} />}
                </motion.div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7f72]">
                      {certification.issuer}
                    </p>
                    <ArrowUpRight className="shrink-0 text-[#b3843d] transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  <h3 className="mt-3 text-2xl font-black uppercase leading-none text-[#171512]">
                    {certification.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certification.meta.map((meta) => (
                      <span
                        className="rounded-full border border-[#171512]/10 bg-[#f2efe8]/70 px-4 py-2 text-sm font-semibold text-[#47413a]"
                        key={meta}
                      >
                        {meta}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
