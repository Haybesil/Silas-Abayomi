"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SkillBadgeProps {
  skill: string
  index: number
  position: { x: number; y: number; z: number }
  rotation: { x: number; y: number }
}

function SkillBadge({ skill, index, position, rotation }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.2,
        z: 50,
        transition: { duration: 0.2 },
      }}
      className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {skill}
    </motion.div>
  )
}

export default function SkillGlobe() {
  const [isRotating, setIsRotating] = useState(true)

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GraphQL",
    "REST API",
    "Framer Motion",
    "Redux",
    "Git",
    "Responsive Design",
  ]

  // Generate positions on a sphere
  const generateSpherePositions = (count: number, radius = 200) => {
    const positions = []
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // Golden angle in radians

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2 // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = goldenAngle * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      positions.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        rotation: {
          x: Math.atan2(z, Math.sqrt(x * x + y * y)) * (180 / Math.PI),
          y: Math.atan2(x, z) * (180 / Math.PI),
        },
      })
    }
    return positions
  }

  const positions = generateSpherePositions(skills.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">My Skills</h2>

        <motion.div
          className="relative w-[500px] h-[500px] mx-auto"
          animate={isRotating ? { rotateY: 360 } : {}}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          onHoverStart={() => setIsRotating(false)}
          onHoverEnd={() => setIsRotating(true)}
        >
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill}
              skill={skill}
              index={index}
              position={positions[index]}
              rotation={positions[index].rotation}
            />
          ))}
        </motion.div>

        <p className="text-white/70 mt-8">Hover to pause rotation</p>
      </div>
    </div>
  )
}
