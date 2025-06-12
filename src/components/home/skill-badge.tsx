"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  index: number
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white"
    >
      {skill}
    </motion.div>
  )
}
