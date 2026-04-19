import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Download, Code2, Layers, Cpu } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../hooks/useScrollAnimation'

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '1', label: 'Internship' },
  { value: 'BSCS', label: 'Degree' },
  { value: '2025', label: 'Grad Year' },
]

const highlights = [
  {
    icon: <Code2 size={18} />,
    title: 'Full Stack Development',
    desc: 'End-to-end MERN applications from DB schema to pixel-perfect UI.'
  },
  {
    icon: <Layers size={18} />,
    title: 'RESTful API Design',
    desc: 'Clean, documented, and scalable API architecture with Express.js.'
  },
  {
    icon: <Cpu size={18} />,
    title: 'CRM Integration',
    desc: 'Zoho CRM workflows, third-party APIs, and automation pipelines.'
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="section-container">
        <SectionHeader
          tag="01 / About"
          title={<>Who I <span className="text-gradient">Am</ span></>}
          subtitle="A detail-oriented developer who loves turning ideas into production-ready software."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar & Stats */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar card */}
            <div className="relative">
              {/* Rotating border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #7b2fff, #ff2d78, #00d4ff)',
                  filter: 'blur(2px)',
                  opacity: 0.4,
                }}
              />
              <div className="relative glass rounded-3xl p-8 flex flex-col items-center gap-4 min-w-[220px]">
                {/* Avatar placeholder with initials */}
                <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-display font-bold text-void relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #00d4ff, #7b2fff)' }}>
                  MR
                  {/* Shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)' }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-text-primary">Muhammad Rehan</p>
                  <p className="text-neon text-sm font-mono mt-0.5">MERN Developer</p>
                </div>
                {/* Info badges */}
                <div className="flex flex-col gap-2 w-full">
                  {[
                    { icon: <MapPin size={12} />, text: 'Lahore, Pakistan' },
                    { icon: <Mail size={12} />, text: 'connectmrehan@gmail.com' },
                    { icon: <Phone size={12} />, text: '+92-334-1147986' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-text-secondary bg-white/[0.03] rounded-lg px-3 py-2">
                      <span className="text-neon flex-shrink-0">{icon}</span>
                      <span className="truncate">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-3 w-full">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-3 text-center"
                >
                  <p className="font-display font-bold text-lg text-gradient leading-none mb-1">{value}</p>
                  <p className="text-text-secondary text-[10px] leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text + Highlights */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a <span className="text-text-primary font-medium">Computer Science graduate</span> from
                Government College University Lahore (2021–2025) with hands-on experience building
                full-stack applications using the <span className="text-neon font-medium">MERN stack</span>.
              </p>
              <p>
                During my internship at <span className="text-text-primary font-medium">Xpert Prime (PVT) LTD</span>,
                I designed and integrated REST APIs, built full-stack MERN applications, and worked extensively on{' '}
                <span className="text-neon-2 font-medium">Zoho CRM integrations</span> with workflows and
                third-party APIs.
              </p>
              <p>
                I'm passionate about writing <span className="text-text-primary font-medium">clean, scalable code</span> and
                solving real-world problems through thoughtful architecture and modern tooling.
              </p>
            </div>

            {/* Highlight cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 pt-2"
            >
              {highlights.map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 glass rounded-xl p-4 cursor-default group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-neon group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.15)' }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-text-primary font-medium text-sm mb-0.5">{title}</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV button */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-neon neon-border hover:bg-neon/5 transition-all duration-200 mt-2"
            >
              <Download size={14} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
