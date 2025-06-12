'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
  total: number;
  radius: number;
}

function SkillBadge({ skill, index, total, radius }: SkillBadgeProps) {
  const angle = (index / total) * 2 * Math.PI;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x,
        y: y,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.3,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
    >
      {skill}
    </motion.div>
  );
}

export default function SkillCircle() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'GraphQL',
    'REST API',
    'Framer Motion',
    'Redux',
    'Git',
    'Responsive Design',
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="text-center">
        {/* <motion.div
          className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          
          <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">Skills</span>
          </div>

          {skills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} index={index} total={skills.length} radius={200} />
          ))}
        </motion.div> */}
        <motion.div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center">
          {/* Center circle */}
          <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">Skills</span>
          </div>

          {skills.map((skill, index) => (
            <SkillBadge
              key={skill}
              skill={skill}
              index={index}
              total={skills.length}
              radius={200}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
