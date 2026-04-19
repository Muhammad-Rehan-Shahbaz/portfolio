import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.05] pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.015))' }} />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold text-neon"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                MR
              </div>
              <span className="font-display font-semibold text-text-primary">Muhammad Rehan</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              MERN Stack Developer based in Lahore, Pakistan. Building the future, one commit at a time.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono text-text-secondary/60 uppercase tracking-wider mb-3">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className="text-text-secondary text-sm hover:text-neon transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-text-secondary/60 uppercase tracking-wider mb-3">Connect</p>
            <div className="space-y-2 text-sm text-text-secondary mb-4">
              <a href="mailto:connectmrehan@gmail.com" className="block hover:text-neon transition-colors">connectmrehan@gmail.com</a>
              <a href="tel:+923341147986" className="block hover:text-neon transition-colors">+92-334-1147986</a>
              <p>Lahore, Pakistan</p>
            </div>
            <div className="flex gap-2">
              {[
                { icon: <Github size={15} />, href: 'https://github.com/', label: 'GitHub' },
                { icon: <Linkedin size={15} />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
                { icon: <Mail size={15} />, href: 'mailto:connectmrehan@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-neon transition-all hover:bg-white/5 border border-white/[0.06] hover:border-neon/30"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-text-secondary text-xs">
          <p className="flex items-center gap-1.5">
            Built with <Heart size={10} className="text-neon-3 fill-current" /> by Muhammad Rehan — MERN Stack
          </p>
          <p className="font-mono">© {new Date().getFullYear()} Muhammad Rehan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
