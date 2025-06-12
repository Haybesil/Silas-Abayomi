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
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="bg-slate-800/50 backdrop-blur-sm border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        </div>
        <CardHeader>
          <CardTitle className="text-white">{project.title}</CardTitle>
          <CardDescription className="text-white/70">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-4 mt-auto">
            <Button size="sm" variant="outline" className="border-white/20 text-slate-900 hover:text-white hover:bg-white/10 flex-1">
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
}
