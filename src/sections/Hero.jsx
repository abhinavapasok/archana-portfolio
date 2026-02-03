import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import './Hero.css'
// The "Digital Strategy Core" 3D Element

function MarketingCore() {
  const coreRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const particlesRef = useRef()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime
    
    // Rotate the core with pulsing effect (representing brand heartbeat)
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2
      coreRef.current.rotation.y = t * 0.3
      const pulse = 1 + Math.sin(t * 2) * 0.1
      coreRef.current.scale.set(pulse, pulse, pulse)
    }
    
    // Rotate the rings in opposing directions (data flow)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4
      ring1Ref.current.rotation.y = t * 0.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.3
      ring2Ref.current.rotation.z = t * 0.2
    }
    
    // Animate particles (traffic/engagement)
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.15
    }
  })

  // Create keyword particles floating around
  const keywords = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = 3 + Math.random() * 2
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ],
        scale: 0.05 + Math.random() * 0.1
      })
    }
    return temp
  }, [])

  return (
    <group>
      {/* Central Brand Core (Glowing Sphere) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#6366f1" 
          emissive="#6366f1"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Ring - Social Media & Reach */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Ring - SEO & Targeting */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.8, 0.08, 16, 100]} />
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981"
          emissiveIntensity={0.4}
          metalness={0.9}
        />
      </mesh>

      {/* Keyword/Traffic Particles */}
      <group ref={particlesRef}>
        {keywords.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6"}
              emissive={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6"}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Analytics Ring (Thin outer orbit) */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Point lights for glow effect */}
      <pointLight position={[0, 0, 0]} intensity={1} color="#6366f1" />
      <pointLight position={[3, 0, 0]} intensity={0.5} color="#ec4899" />
      <pointLight position={[-3, 0, 0]} intensity={0.5} color="#10b981" />
    </group>
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
          <motion.span 
            className="hero-badge" 
            variants={itemVariants}
            style={{ 
              background: 'rgba(59, 130, 246, 0.1)', 
              color: '#60a5fa', 
              border: '1px solid rgba(59, 130, 246, 0.2)' 
            }}
          >
            ✨ Available for Freelance Work
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            Hi, I'm <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #ec4899)' }}>Archana</span>
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
              style={{ background: '#3b82f6', borderColor: '#3b82f6' }}
              whileHover={{ scale: 1.05, background: '#2563eb' }}
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
              <span className="stat-number" style={{ color: '#60a5fa' }}>7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number" style={{ color: '#ec4899' }}>50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number" style={{ color: '#14b8a6' }}>100+</span>
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
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              {/* Updated Lighting for Blue/Tech theme */}
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
              <spotLight position={[0, 10, 0]} intensity={0.5} color="#14b8a6" />
              
              <Stars radius={50} count={500} factor={4} fade speed={1} />
              
              <MarketingCore />
            </Canvas>
          </div>
          {/* Updated Glow color behind the 3D element */}
          <div className="hero-glow" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)' }}></div>
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