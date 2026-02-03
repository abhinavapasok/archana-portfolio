import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './WhyChooseMe.css'

const reasons = [
  {
    id: 1,
    icon: '🏆',
    title: '7+ Years of Proven Digital Excellence',
    description: 'Deep expertise in delivering measurable results across diverse marketing channels.'
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Experience Across Multiple Industries',
    description: 'Versatile skills developed through working with various business sectors.'
  },
  {
    id: 3,
    icon: '🎯',
    title: 'Mastery Over Comprehensive Digital Marketing',
    description: 'Full-stack digital marketing capabilities from SEO to paid advertising.'
  },
  {
    id: 4,
    icon: '💡',
    title: 'Strong Technical & Creative Blend',
    description: 'Engineering background combined with creative marketing expertise.'
  },
  {
    id: 5,
    icon: '🌟',
    title: 'Professional Freelancing Experience in Dubai',
    description: 'Understanding of the UAE market and international business practices.'
  },
  {
    id: 6,
    icon: '📈',
    title: 'Strategic, Transparent & Result-Oriented Approach',
    description: 'Clear communication and data-driven strategies for maximum ROI.'
  }
]

function ReasonCard({ reason, index, isInView }) {
  return (
    <motion.div
      className="reason-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="reason-icon">
        <span>{reason.icon}</span>
      </div>
      <div className="reason-content">
        <h4>{reason.title}</h4>
        <p>{reason.description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-choose-me" className="why-choose-me" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Why Choose Me</span>
          <h2>What Makes Me <span className="text-gradient">Stand Out</span></h2>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={reason.id} 
              reason={reason} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
      
      <div className="why-choose-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle small"></div>
      </div>
    </section>
  )
}
