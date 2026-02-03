import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const skills = [
    'On-Page SEO',
    'Off-Page SEO',
    'Technical SEO',
    'Website Development',
    'Graphic Designing',
    'Google Ads',
    'Social Media Campaigns',
    'Content Marketing',
    'Email Marketing',
    'Social Media Management'
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image">
              <div className="about-image-placeholder">
                <div className="profile-circle">
                  <span className="profile-initials">AP</span>
                </div>
              </div>
              <div className="about-image-decoration"></div>
              <div className="about-image-dots"></div>
            </div>
            
            <motion.div 
              className="experience-badge glass"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            >
              <span className="experience-number">7+</span>
              <span className="experience-text">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <motion.span className="section-label" variants={itemVariants}>
              About Me
            </motion.span>
            
            <motion.h2 variants={itemVariants}>
              Why I'm <span className="text-gradient">Different</span>?
            </motion.h2>
            
            <motion.p className="about-description" variants={itemVariants}>
              In 2018, a career shift from <strong>Electrical and Electronic Engineering</strong> to 
              full-time digital marketing marked the beginning of a journey that continues to grow 
              with purpose and expertise.
            </motion.p>
            
            <motion.p className="about-description" variants={itemVariants}>
              I don't just "do marketing" — I build <strong>digital growth engines</strong> with purpose. 
              Every project is analysed, structured, and executed with a blend of data, creativity, 
              and technical excellence.
            </motion.p>

            <motion.div className="skills-section" variants={itemVariants}>
              <h4>Areas of Expertise</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
