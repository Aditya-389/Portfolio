import { motion, type Variants } from 'framer-motion'

import aboutImage from '../assets/aditya-about.png'

const aboutText = [
  "Hi, I'm Aditya, a full-stack developer with a strong interest in backend engineering. I enjoy building systems that are reliable, scalable, and designed to solve real-world problems. For me, software development is more than writing code, it's about understanding how things work, improving them, and creating solutions that people can depend on.",
  'Outside of coding, I enjoy solving algorithmic problems, exploring new technologies, and continuously refining the way I approach software development. My goal is to build products that are not only functional but also reliable, efficient, and meaningful.',
]

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
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

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:px-10"
    >
      <motion.div
        className="relative order-2 lg:order-1"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div
          className="absolute -left-4 -top-4 h-32 w-32 rounded-full border border-[#171512]/10 bg-[#ff6c4a]/12 blur-2xl"
          animate={{ scale: [1, 1.12, 1], y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative overflow-hidden rounded-[1.6rem] border border-[#171512]/10 bg-[#fffaf0]/70 p-3 shadow-[0_35px_110px_rgba(23,21,18,0.14)] backdrop-blur"
          variants={item}
          whileHover={{ y: -8, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <img
            src={aboutImage}
            alt="Aditya Chouhan"
            className="aspect-4/5 w-full rounded-[1.15rem] object-cover object-top"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="order-1 lg:order-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.h2
          className="max-w-3xl text-[clamp(3.4rem,8vw,7.5rem)] font-black uppercase leading-[0.84] text-[#171512]"
          variants={item}
        >
          Building systems people can depend on.
        </motion.h2>

        <motion.div className="mt-9 space-y-6 border-l border-[#171512]/15 pl-5" variants={item}>
          {aboutText.map((paragraph) => (
            <p className="max-w-2xl text-lg leading-8 text-[#47413a]" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
