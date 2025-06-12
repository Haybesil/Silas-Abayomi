"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  index: number
  position: { x: number; y: number }
}

function SkillBadge({ skill, index, position }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        transition: { duration: 0.2 },
      }}
      className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
    >
      {skill}
    </motion.div>
  )
}

export default function SkillSpiral() {
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

  // Generate spiral positions
  const generateSpiralPositions = (count: number) => {
    const positions = []
    const centerX = 0
    const centerY = 0
    const maxRadius = 250

    for (let i = 0; i < count; i++) {
      const progress = i / (count - 1)
      const angle = progress * 4 * Math.PI // 2 full rotations
      const radius = progress * maxRadius

      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      positions.push({ x, y })
    }

    return positions
  }

  const positions = generateSpiralPositions(skills.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">My Skills</h2>

        <motion.div
          className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {skills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} index={index} position={positions[index]} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
