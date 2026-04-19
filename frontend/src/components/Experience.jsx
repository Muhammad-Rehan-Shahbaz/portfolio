import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Xpert Prime (PVT) LTD',
    period: 'Sep 2025 – Dec 2025',
    location: 'Lahore, Pakistan',
    type: 'Internship',
    description: 'Contributed to full-stack development, API integration, and CRM customization in a fast-paced startup environment.',
    responsibilities: [
      'Built full-stack MERN applications from scratch with scalable architecture',
      'Designed and integrated RESTful APIs for frontend-backend communication',
      'Worked on Zoho CRM integrations including workflows and third-party APIs',
      'Collaborated with cross-functional teams to deliver features on schedule',
      'Implemented responsive UI components using React.js and Tailwind CSS',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Zoho CRM', 'REST APIs', 'Git'],
    color: '#00d4ff',
    accentGrad: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,47,255,0.05))',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.02) 50%, transparent)' }} />

      <div className="section-container">
        <SectionHeader
          tag="04 / Experience"
          title={<>Work <span className="text-gradient">Experience</span></>}
          subtitle="Professional experience building real-world software solutions."
        />

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(0,212,255,0.3), rgba(0,212,255,0.05))' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-16 lg:pl-20 mb-12 last:mb-0 timeline-item"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-6 top-6 -translate-x-1/2 timeline-dot relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  className="w-5 h-5 rounded-full border-2 border-neon bg-void flex items-center justify-center"
                  style={{ boxShadow: '0 0 12px rgba(0,212,255,0.5)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-neon" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-7 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
                {/* BG hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: exp.accentGrad }} />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                        <Briefcase size={20} className="text-neon" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-text-primary leading-tight">{exp.role}</h3>
                        <p className="text-neon font-medium mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
                      style={{ background: 'rgba(0,212,255,0.08)', color: exp.color, border: '1px solid rgba(0,212,255,0.15)' }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-text-secondary text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-neon/60" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-neon/60" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.05] mb-5" />

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.responsibilities.map((r, ri) => (
                      <motion.li
                        key={ri}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ri * 0.07 }}
                        className="flex items-start gap-3 text-text-secondary text-sm"
                      >
                        <CheckCircle2 size={14} className="text-neon mt-0.5 flex-shrink-0" />
                        {r}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* "Now" marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pl-16 lg:pl-20 relative"
          >
            <div className="absolute left-4 lg:left-6 -translate-x-1/2">
              <div className="w-5 h-5 rounded-full border-2 border-dashed border-neon/30 bg-void flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon/30 animate-pulse" />
              </div>
            </div>
            <p className="text-text-secondary/40 text-xs font-mono py-3">open to new opportunities</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
