import { useMemo, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Search } from 'lucide-react'

import { projectFilters, projects, type ProjectFilter } from '../data/projects'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.technologies.includes(activeFilter))
  }, [activeFilter])

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
    >
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        
        <motion.div
          className="rounded-[1.35rem] border border-[#171512]/10 bg-[#fffaf0]/72 p-4 shadow-[0_24px_70px_rgba(23,21,18,0.08)] backdrop-blur"
          variants={item}
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a7f72]">
            <Search size={17} />
            Filter By Technology
          </div>
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'border-[#171512] bg-[#171512] text-[#f2efe8] shadow-[0_16px_40px_rgba(23,21,18,0.16)]'
                      : 'border-[#171512]/10 bg-[#f2efe8]/70 text-[#47413a] hover:border-[#4e7efc]/40 hover:text-[#4e7efc]'
                  }`}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        layout
      >
        {filteredProjects.length === 0 && (
          <motion.div
            className="md:col-span-2 xl:col-span-3 rounded-[1.45rem] border border-[#171512]/10 bg-[#fffaf0]/72 p-8 text-center shadow-[0_28px_90px_rgba(23,21,18,0.1)] backdrop-blur"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none text-[#171512]">
              I am Learning this technology will make project soon
            </p>
          </motion.div>
        )}

        {filteredProjects.map((project, index) => (
          <motion.article
            className="group relative overflow-hidden rounded-[1.45rem] border border-[#171512]/10 bg-[#fffaf0]/72 p-4 shadow-[0_28px_90px_rgba(23,21,18,0.1)] backdrop-blur"
            key={project.title}
            layout
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-[1.05rem] border border-[#171512]/10 bg-[#171512]"
              aria-label={`Open ${project.title} live project`}
            >
              <div
                className="relative aspect-[1.35] overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 25% 20%, ${project.accent}66, transparent 30%), linear-gradient(135deg, #171512, ${project.accent})`,
                }}
              >
                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f2efe8]/85" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f2efe8]/45" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f2efe8]/30" />
                </div>
                <motion.div
                  className="absolute inset-x-5 bottom-5 rounded-[0.9rem] border border-white/12 bg-[#f2efe8]/12 p-5 text-[#f2efe8] backdrop-blur"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Live Preview</p>
                  <p className="mt-3 text-4xl font-black uppercase leading-none">{project.previewLabel}</p>
                </motion.div>
                <ArrowUpRight className="absolute right-5 top-5 text-[#f2efe8]" size={24} />
              </div>
            </a>

            <div className="pt-5">
              <h3 className="text-3xl font-black uppercase leading-none text-[#171512]">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#47413a]">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    className="rounded-full border border-[#171512]/10 bg-[#f2efe8]/70 px-3 py-1.5 text-xs font-semibold text-[#47413a]"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
