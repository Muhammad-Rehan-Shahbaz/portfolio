import { motion } from 'framer-motion'

/**
 * Reusable section header with animated accent line
 */
export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs font-mono tracking-[0.25em] uppercase text-neon mb-3"
      >
        {tag}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-bold text-text-primary mb-4"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto mt-5 h-px w-16 rounded-full"
        style={{ background: 'linear-gradient(90deg, #00d4ff, #7b2fff)', transformOrigin: 'left' }}
      />
    </div>
  )
}
