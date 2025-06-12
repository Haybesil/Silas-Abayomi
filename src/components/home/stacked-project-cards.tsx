"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}

interface StackedProjectCardsProps {
  projects: Project[]
}

export default function StackedProjectCards({ projects }: StackedProjectCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[500px] stacked-cards">
        {projects.map((project, index) => {
          const offset = index - currentIndex
          const isVisible = Math.abs(offset) <= 2

          if (!isVisible) return null

          return (
            <motion.div
              key={project.title}
              className="absolute inset-0 card-stack"
              initial={false}
              animate={{
                rotateY: offset * 15,
                z: -Math.abs(offset) * 100,
                x: offset * 50,
                scale: 1 - Math.abs(offset) * 0.1,
                opacity: 1 - Math.abs(offset) * 0.3,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              style={{
                zIndex: projects.length - Math.abs(offset),
              }}
            >
              <Card className="w-full h-full glass-card hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-white/70 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          onClick={prevProject}
          variant="outline"
          size="icon"
          className="glass border-white/20 text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-400 scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextProject}
          variant="outline"
          size="icon"
          className="glass border-white/20 text-white hover:bg-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
