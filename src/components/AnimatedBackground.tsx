'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  animationDelay: number
  animationDuration: number
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      animationDelay: Math.random() * 20,
      animationDuration: 15 + Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-bg opacity-20" />
      
      {/* Floating particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 dark:bg-purple-400/10 rounded-lg blur-xl transform rotate-45" />
      <div className="absolute bottom-40 left-20 w-28 h-28 bg-green-500/10 dark:bg-green-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-pink-500/10 dark:bg-pink-400/10 rounded-lg blur-xl transform rotate-12" />
    </div>
  )
}

export default AnimatedBackground
