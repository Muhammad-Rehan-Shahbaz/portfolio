import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const projects = [
  {
    id: 1,
    title: 'Zooki Landing Page',
    tagline: 'Full-stack landing page with form handling',
    description:
      'A fully responsive, high-converting landing page built with the MERN stack. Features a Node/Express backend for contact form handling, MongoDB for message storage, and a clean, scalable architecture ready for production.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['Responsive UI', 'Backend form handling', 'MongoDB integration', 'Scalable architecture'],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(123,47,255,0.08))',
    borderColor: 'rgba(0,212,255,0.2)',
    type: 'Full Stack',
    github: '#',
    live: '#',
    emoji: '🚀',
  },
  {
    id: 2,
    title: 'TextDiffChecker',
    tagline: 'Real-time text comparison & merging tool',
    description:
      'A powerful developer utility for comparing text in real time. Features a dual-editor system powered by CodeMirror with word-level and line-level diff highlighting, alongside merge, copy, and reset functionality for maximum productivity.',
    tech: ['JavaScript', 'Tailwind CSS', 'CodeMirror', 'HTML5'],
    features: ['Dual editor system', 'Word & line-level diff', 'Merge / copy / reset', 'Syntax highlighting'],
    color: '#7b2fff',
    gradient: 'linear-gradient(135deg, rgba(123,47,255,0.12), rgba(255,45,120,0.08))',
    borderColor: 'rgba(123,47,255,0.2)',
    type: 'Utility Tool',
    github: '#',
    live: '#',
    emoji: '⚡',
  },
  {
    id: 3,
    title: 'Blinkit E-Commerce UI',
    tagline: 'Mobile-first responsive e-commerce frontend',
    description:
      'A pixel-perfect clone of the Blinkit quick-commerce UI, built mobile-first with pure HTML and CSS. Features a clean modern layout, smooth hover animations, product cards, category navigation, and fully responsive design across all breakpoints.',
    tech: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    features: ['Mobile-first layout', 'Product cards', 'Category nav', 'Smooth animations'],
    color: '#ff2d78',
    gradient: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(255,149,0,0.08))',
    borderColor: 'rgba(255,45,120,0.2)',
    type: 'Frontend UI',
    github: '#',
    live: '#',
    emoji: '🛒',
  },
]

export default function Projects() {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Wait for Swiper global to be available
    const init = () => {
      if (typeof window.Swiper === 'undefined') {
        setTimeout(init, 100)
        return
      }
      if (swiperRef.current && !swiperRef.current.swiper) {
        new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          grabCursor: true,
          centeredSlides: true,
          autoplay: { delay: 5000, disableOnInteraction: false },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.4 },
          },
        })
      }
    }
    init()
  }, [])

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 60%, rgba(255,45,120,0.04), transparent 55%)' }} />

      <div className="section-container">
        <SectionHeader
          tag="05 / Projects"
          title={<>Featured <span className="text-gradient">Projects</span></>}
          subtitle="A selection of things I've built — from full-stack apps to polished UIs."
        />
      </div>

      {/* Swiper carousel */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper pb-12">
            {projects.map((project) => (
              <div key={project.id} className="swiper-slide">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl overflow-hidden group relative"
                  style={{ border: `1px solid ${project.borderColor}` }}
                >
                  {/* Card top banner */}
                  <div className="h-48 relative overflow-hidden flex items-center justify-center"
                    style={{ background: project.gradient }}>
                    {/* Grid pattern */}
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                      }} />
                    {/* Emoji + title display */}
                    <div className="relative text-center">
                      <div className="text-6xl mb-3 filter drop-shadow-lg">{project.emoji}</div>
                      <div className="px-4 py-1.5 rounded-full text-xs font-mono"
                        style={{ background: 'rgba(0,0,0,0.4)', color: project.color, border: `1px solid ${project.borderColor}` }}>
                        {project.type}
                      </div>
                    </div>
                    {/* Shine sweep */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-text-primary">{project.title}</h3>
                        <p className="text-sm mt-0.5" style={{ color: project.color }}>{project.tagline}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary transition-all hover:bg-white/5 border border-white/[0.06]">
                          <Github size={15} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                          style={{ background: `${project.color}18`, border: `1px solid ${project.borderColor}`, color: project.color }}>
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="tag text-[11px]" style={{ borderColor: `${project.color}25` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>

      {/* Project count */}
      <div className="section-container mt-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-text-secondary/50 text-xs font-mono">{projects.length} projects • more on GitHub</p>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  )
}
