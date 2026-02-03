import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import './Hero.css'

// 3D Morphing sphere for hero
function HeroSphere() {
  const mesh = useRef()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-badge" variants={itemVariants}>
            ✨ Available for Freelance Work
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            Hi, I'm <span className="text-gradient">Archana</span>
            <br />
            Freelance Digital Marketer
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            <strong>Digital Marketing Specialist since 2018</strong> who makes brands 
            impossible to ignore. Based in Dubai, helping businesses grow through 
            strategic, data-driven digital solutions.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
          
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Done</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="hero-3d-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
              <HeroSphere />
            </Canvas>
          </div>
          <div className="hero-glow"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  )
}
