import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Floating particles component
function FloatingParticles({ count = 200 }) {
  const mesh = useRef()
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      temp[i3] = (Math.random() - 0.5) * 25
      temp[i3 + 1] = (Math.random() - 0.5) * 25
      temp[i3 + 2] = (Math.random() - 0.5) * 25
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Animated geometric shapes
function FloatingShape({ position, color, speed = 1 }) {
  const mesh = useRef()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Glowing orb
function GlowingOrb({ position, color, size = 1 }) {
  const mesh = useRef()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={1.5} floatIntensity={0.3}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Torus knot
function AnimatedTorus({ position }) {
  const mesh = useRef()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1} floatIntensity={0.2}>
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  )
}

// Main 3D Background Scene
export default function Background3D() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        <Stars
          radius={50}
          depth={50}
          count={1500}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <FloatingParticles count={300} />
        
        <FloatingShape position={[-6, 3, -5]} color="#6366f1" speed={0.8} />
        <FloatingShape position={[6, -2, -3]} color="#8b5cf6" speed={1.2} />
        <FloatingShape position={[-4, -4, -4]} color="#ec4899" speed={1} />
        
        <GlowingOrb position={[5, 4, -8]} color="#6366f1" size={0.5} />
        <GlowingOrb position={[-5, -3, -6]} color="#ec4899" size={0.4} />
        <GlowingOrb position={[3, -5, -10]} color="#8b5cf6" size={0.6} />
        
        <AnimatedTorus position={[0, 0, -15]} />
      </Canvas>
    </div>
  )
}
