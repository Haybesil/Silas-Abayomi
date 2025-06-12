"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  size?: "small" | "medium" | "large"
  featured?: boolean
}

interface BentoProjectGridProps {
  projects: Project[]
}

export default function BentoProjectGrid({ projects }: BentoProjectGridProps) {
  // Assign sizes if not already assigned
  const projectsWithSizes = projects.map((project, index) => {
    if (!project.size) {
      // Alternate between medium and small, with the first one being large
      if (index === 0) return { ...project, size: "large", featured: true }
      return { ...project, size: index % 3 === 0 ? "medium" : "small" }
    }
    return project
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsWithSizes.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${
            project.size === "large" ? "lg:col-span-2 lg:row-span-2" : project.size === "medium" ? "lg:col-span-2" : ""
          }`}
        >
          <Card
            className="h-full glass-card overflow-hidden border-white/10 hover:border-blue-400/30 transition-all duration-500 group"
            style={{
              background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`,
            }}
          >
            <div className="relative overflow-hidden h-48 md:h-56">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500/80 text-white border-none">Featured</Badge>
                </div>
              )}
            </div>

            <CardHeader className="relative z-10">
              <CardTitle className="text-white text-xl md:text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-white/70">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col justify-between space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, project.size === "small" ? 3 : 5).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > (project.size === "small" ? 3 : 5) && (
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                    +{project.tech.length - (project.size === "small" ? 3 : 5)} more
                  </Badge>
                )}
              </div>

              <div className="flex space-x-4 pt-2">
                <Button size="sm" variant="outline" className="border-white/20 text-slate-900 hover:bg-white/10 flex-1 hover:text-white">
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
      ))}
    </div>
  )
}
