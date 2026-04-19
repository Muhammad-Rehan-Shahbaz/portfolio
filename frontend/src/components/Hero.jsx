import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)' }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
          style={{
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            color: '#00d4ff',
          }}
        >
          <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse inline-block" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-text-secondary font-mono text-sm mb-3 tracking-widest uppercase">
            Hello, I'm
          </p>
          <h1 className="font-display font-bold leading-none mb-2"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            <span className="text-text-primary">Muhammad </span>
            <span className="text-gradient">Rehan</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 mb-6 text-xl md:text-2xl font-display font-medium text-text-secondary h-10 flex items-center justify-center gap-2"
        >
          <span className="text-neon/40">&lt;</span>
          <TypeAnimation
            sequence={[
              'MERN Stack Developer', 2000,
              'Full Stack Engineer', 2000,
              'React.js Enthusiast', 2000,
              'API Architect', 2000,
              'Problem Solver', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gradient"
          />
          <span className="text-neon/40">/&gt;</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-secondary max-w-xl mx-auto leading-relaxed mb-10 text-sm md:text-base"
        >
          CS Graduate from GCU Lahore. Building scalable web applications with the MERN stack —
          clean code, real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 glow-neon"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #7b2fff)', color: '#020408' }}
          >
            View My Work
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-text-primary transition-all duration-300 hover:bg-white/5 neon-border"
          >
            <Mail size={14} />
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: <Github size={18} />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:connectmrehan@gmail.com', label: 'Email' },
            { icon: <Phone size={18} />, href: 'tel:+923341147986', label: 'Phone' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-neon transition-all duration-200 hover:bg-white/5 border border-white/[0.06] hover:border-neon/30 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-secondary/40 text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-neon/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
