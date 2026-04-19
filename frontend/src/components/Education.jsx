import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import SectionHeader from './SectionHeader'

const education = [
  {
    degree: 'BS Computer Science',
    short: 'BSCS',
    institution: 'Government College University Lahore',
    abbr: 'GCU',
    period: '2021 – 2025',
    location: 'Lahore, Pakistan',
    status: 'Graduated',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Web Technologies',
      'Software Engineering',
    ],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,255,0.1))',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.02) 50%, transparent 100%)' }} />

      <div className="section-container">
        <SectionHeader
          tag="02 / Education"
          title={<>My <span className="text-gradient">Academic</span> Background</>}
          subtitle="The foundation that shaped my technical thinking and problem-solving approach."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card */}
              <div className="relative glass rounded-2xl p-8 overflow-hidden group hover:border-white/10 transition-all duration-300">
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: edu.gradient }}
                />

                {/* Decorative large text */}
                <div className="absolute right-6 top-4 font-display font-bold text-6xl pointer-events-none select-none"
                  style={{ color: 'rgba(0,212,255,0.05)', lineHeight: 1 }}>
                  {edu.abbr}
                </div>

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                      <GraduationCap size={24} className="text-neon" />
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl text-text-primary">{edu.degree}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(0,212,255,0.1)', color: edu.color, border: '1px solid rgba(0,212,255,0.2)' }}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-neon font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6 text-text-secondary text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-neon/60" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-neon/60" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mb-6" />

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={13} className="text-neon/60" />
                      <span className="text-text-secondary text-xs font-mono uppercase tracking-wider">Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.4)' }}
                          className="tag cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline decoration below */}
          <div className="flex flex-col items-center mt-8 gap-2 opacity-30">
            <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent" />
            <div className="w-2 h-2 rounded-full bg-neon" />
          </div>
        </div>
      </div>
    </section>
  )
}
