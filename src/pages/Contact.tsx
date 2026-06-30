import { type FormEvent, useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { MessageSquareText, Send } from 'lucide-react'

import { socialLinks } from '../data/socials'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${formData.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    const mailtoUrl = `mailto:adityachouhan929@gmail.com?subject=${subject}&body=${body}`

    setShowToast(true)
    window.setTimeout(() => {
      window.location.href = mailtoUrl
    }, 550)
    window.setTimeout(() => setShowToast(false), 3600)
  }

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
    >
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed right-5 top-5 z-50 flex max-w-sm items-center gap-3 rounded-2xl border border-[#171512]/10 bg-[#fffaf0]/90 p-4 text-[#171512] shadow-[0_24px_80px_rgba(23,21,18,0.18)] backdrop-blur"
            initial={{ opacity: 0, x: 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.94 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#4e7efc]/12 text-[#4e7efc]">
              <Send size={18} />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.14em]">Message sent successfully</span>
              <span className="mt-1 block text-sm font-semibold text-[#47413a]">Opening your email app.</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
      >
        <div>
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8a7f72]"
            variants={item}
          >
            Contact
          </motion.p>
          <motion.h2
            className="max-w-3xl text-[clamp(3.4rem,8vw,7.5rem)] font-black uppercase leading-[0.84] text-[#171512]"
            variants={item}
          >
            Let's Work Together.
          </motion.h2>
          <motion.p className="mt-8 max-w-xl text-lg leading-8 text-[#47413a]" variants={item}>
            Reach out for project work, collaboration, or a simple chat about software and systems.
          </motion.p>

          <motion.div className="mt-12 flex flex-wrap items-center gap-5" variants={container}>
            {socialLinks.map((social) => (
              <motion.a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                title={social.name}
                key={social.name}
                variants={item}
                className="group relative grid h-16 w-16 place-items-center rounded-full border border-[#171512]/10 bg-[#fffaf0]/85 p-2 shadow-[0_16px_40px_rgba(23,21,18,0.1)] backdrop-blur transition hover:-translate-y-1 hover:border-[#4e7efc]/40 hover:bg-[#f2efe8]"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              >
                <img
                  src={social.icon}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.form
          className="relative overflow-hidden rounded-[1.6rem] border border-[#171512]/10 bg-[#fffaf0]/76 p-5 shadow-[0_35px_110px_rgba(23,21,18,0.12)] backdrop-blur sm:p-7"
          variants={item}
          onSubmit={handleSubmit}
        >
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#4e7efc]/14 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#ff6c4a]/14 blur-3xl" />

          <div className="relative mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a7f72]">Message</p>
              <h3 className="mt-3 text-4xl font-black uppercase leading-none text-[#171512]">Start a conversation</h3>
            </div>
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#171512]/10 bg-[#f2efe8]/80 text-[#b3843d]">
              <MessageSquareText size={24} />
            </div>
          </div>

          <div className="relative grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a7f72]">Name</span>
              <input
                className="h-14 rounded-2xl border border-[#171512]/10 bg-[#f2efe8]/70 px-4 text-base font-semibold text-[#171512] outline-none transition placeholder:text-[#8a7f72]/70 focus:border-[#4e7efc]/50 focus:bg-[#fffaf0]"
                name="name"
                onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                placeholder="Your name"
                type="text"
                value={formData.name}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a7f72]">Email</span>
              <input
                className="h-14 rounded-2xl border border-[#171512]/10 bg-[#f2efe8]/70 px-4 text-base font-semibold text-[#171512] outline-none transition placeholder:text-[#8a7f72]/70 focus:border-[#4e7efc]/50 focus:bg-[#fffaf0]"
                name="email"
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                placeholder="your.email@example.com"
                required
                type="email"
                value={formData.email}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a7f72]">Text Box</span>
              <textarea
                className="min-h-40 resize-none rounded-2xl border border-[#171512]/10 bg-[#f2efe8]/70 p-4 text-base font-semibold leading-7 text-[#171512] outline-none transition placeholder:text-[#8a7f72]/70 focus:border-[#4e7efc]/50 focus:bg-[#fffaf0]"
                name="message"
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell me if you want to work on a project, collaborate, or just have a chat."
                required
                value={formData.message}
              />
            </label>

            <button
              className="group mt-2 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#171512] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#f2efe8] shadow-[0_22px_65px_rgba(23,21,18,0.2)] transition hover:-translate-y-1 hover:bg-[#4e7efc]"
              type="submit"
            >
              Send Message
              <Send className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}
