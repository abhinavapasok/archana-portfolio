import { motion } from 'framer-motion'
import logo from '../assets/WhatsApp_Image_2025-11-26_at_19.15.08-removebg-preview.png'
import './Navbar.css'

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.a
          href="#home"
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="AP Logo" style={{ height: '100px', width: 'auto' }} />
        </motion.a>

        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="btn btn-primary navbar-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}
