import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Core Stack',
    color: '#00d4ff',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 82 },
    ],
  },
  {
    title: 'Frontend',
    color: '#7b2fff',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend & DB',
    color: '#ff2d78',
    skills: [
      { name: 'RESTful APIs', level: 85 },
      { name: 'MongoDB Atlas', level: 80 },
      { name: 'SQL (Basic)', level: 65 },
      { name: 'Zoho CRM', level: 78 },
    ],
  },
]

const toolsBadges = [
  'Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Atlas',
  'Vite', 'npm', 'Vercel', 'Render', 'Linux',
]

const conceptBadges = [
  'OOP', 'Data Structures', 'Algorithms', 'MVC Pattern',
  'REST Architecture', 'Responsive Design', 'Version Control',
]

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-text-secondary text-sm">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            width: `${level}%`,
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(123,47,255,0.04), transparent 60%)' }} />

      <div className="section-container">
        <SectionHeader
          tag="03 / Skills"
          title={<>Technical <span className="text-gradient">Expertise</ span></>}
          subtitle="Technologies and tools I use to build modern, scalable web applications."
        />

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
              className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 rounded-full" style={{ background: `linear-gradient(to bottom, ${cat.color}, ${cat.color}44)` }} />
                <h3 className="font-display font-semibold text-text-primary">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    index={si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Concepts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon inline-block" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {toolsBadges.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(0,212,255,0.4)', color: '#00d4ff' }}
                  className="tag cursor-default transition-all duration-200"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-2 inline-block" />
              Concepts & Practices
            </h3>
            <div className="flex flex-wrap gap-2">
              {conceptBadges.map((concept, i) => (
                <motion.span
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(123,47,255,0.4)', color: '#7b2fff' }}
                  className="tag cursor-default transition-all duration-200"
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
