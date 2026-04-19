import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import axios from 'axios'
import SectionHeader from './SectionHeader'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'connectmrehan@gmail.com', href: 'mailto:connectmrehan@gmail.com', color: '#00d4ff' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+92-334-1147986', href: 'tel:+923341147986', color: '#7b2fff' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Lahore, Pakistan', href: '#', color: '#ff2d78' },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('')

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`,
        form
      )
      setStatus('success')
      setServerMessage(res.data.message)
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setServerMessage(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(123,47,255,0.06), transparent 60%)' }} />

      <div className="section-container">
        <SectionHeader
          tag="06 / Contact"
          title={<>Let's <span className="text-gradient">Work Together</span></>}
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6 mb-4">
              <h3 className="font-display font-semibold text-text-primary mb-2">Open to Opportunities</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I'm actively looking for full-time or part-time MERN stack roles. Response time is usually within 24 hours.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 4, borderColor: `${color}40` }}
                className="flex items-center gap-4 glass rounded-xl p-4 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}15`, border: `1px solid ${color}25`, color }}>
                  {icon}
                </div>
                <div>
                  <p className="text-text-secondary text-xs mb-0.5">{label}</p>
                  <p className="text-text-primary text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon" />
              </span>
              <div>
                <p className="text-text-primary text-sm font-medium">Available</p>
                <p className="text-text-secondary text-xs">For new projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}>
                    <CheckCircle size={32} className="text-neon" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary">Message Sent!</h3>
                  <p className="text-text-secondary text-sm">{serverMessage}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2 rounded-lg text-sm font-medium text-neon neon-border hover:bg-neon/5 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Muhammad Rehan"
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-all duration-200 focus:border-neon/50 focus:bg-white/[0.05] ${errors.name ? 'border-red-500/60' : 'border-white/[0.07]'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-all duration-200 focus:border-neon/50 focus:bg-white/[0.05] ${errors.email ? 'border-red-500/60' : 'border-white/[0.07]'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Job Opportunity"
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-all duration-200 focus:border-neon/50 focus:bg-white/[0.05] ${errors.subject ? 'border-red-500/60' : 'border-white/[0.07]'}`}
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-all duration-200 focus:border-neon/50 focus:bg-white/[0.05] resize-none ${errors.message ? 'border-red-500/60' : 'border-white/[0.07]'}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(255,45,120,0.08)', border: '1px solid rgba(255,45,120,0.2)' }}>
                      <AlertCircle size={16} className="text-neon-3 flex-shrink-0" />
                      <p className="text-text-secondary text-xs">{serverMessage}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm text-void transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #00d4ff, #7b2fff)' }}
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
