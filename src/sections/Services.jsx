import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const services = [
  {
    id: 1,
    icon: '🔍',
    title: 'SEO',
    description: 'Strategic keyword research, optimized content structure, quality link-building, and long-term organic growth.',
    color: '#f59e0b'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Consistent planning, creative content execution, and data-driven platform management focused on enhancing brand visibility and user engagement.',
    color: '#f97316'
  },
  {
    id: 3,
    icon: '💻',
    title: 'Website Development',
    description: 'Responsive, fast, and visually compelling websites developed with functionality and user experience at the core.',
    color: '#ea580c'
  },
  {
    id: 4,
    icon: '📊',
    title: 'SEM',
    description: 'Precision-targeted advertising, optimized audience segmentation, and performance monitoring to maximize reach and engagement.',
    color: '#d97706'
  },
  {
    id: 5,
    icon: '🎨',
    title: 'Graphic Designing',
    description: 'Thoughtful visual design, cohesive branding elements, and engaging creative assets developed to strengthen recognition.',
    color: '#fbbf24'
  }
]

function ServiceCard({ service, index, isInView }) {
  return (
    <motion.div
      className="service-card glass"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{ '--accent-color': service.color }}
    >
      <div className="service-icon">
        <span>{service.icon}</span>
      </div>
      
      <h3 className="service-title">{service.title}</h3>
      
      <p className="service-description">{service.description}</p>
      
      <motion.div 
        className="service-arrow"
        whileHover={{ x: 5 }}
      >
        <a href="#contact">→</a>
      </motion.div>
      
      <div className="service-glow"></div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Services</span>
          <h2>What Services I'm <span className="text-gradient">Providing</span></h2>
          <p>Smart Services for Smarter Brands</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
