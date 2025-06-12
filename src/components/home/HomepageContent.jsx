'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import AIChat from './ai-chat';
import BentoProjectGrid from './bento-project-grid';
import SkillBadge from './skill-badge';
import FloatingElements from './floating-elements';
import Navbar from '../navigation/navbar';
import SkillGlobe from './skill-globe';
import SkillCircle from './skill-circle';
import SkillSpiral from './skill-spiral';

export default function HomepageContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: 'Healthcare Tender Bidding Platform',
      description:
        'This project involved building a tender bidding web application specifically tailored for the healthcare industry. It enables hospitals, clinics, and government health departments to post tenders for medical equipment, drugs, and services — while allowing verified vendors to bid competitively.',
      image: '/images/assuredbid.png',
      tech: ['React', 'Javascript', 'Tailwind CSS', 'Redux', 'Stripe', 'Axios'],
      github: 'https://github.com/NUPAT-TECHNOLOGIES/assuredbid',
      live: 'http://portal.assuredbid.co.uk/',
      size: 'large',
      featured: true,
    },
    {
      title: 'Learning Management System',
      description:
        'A Learning Management System (LMS) focused on vocational training — offering online lessons in practical skills like barbing, sewing, baking, and leatherwork. The platform provides structured video courses, assignments, and certification pathways to help users learn and monetize their skills.',
      image: '/images/suwk.png',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind'],
      github: '#',
      live: '#',
      size: 'medium',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      image: '/images/payscrow.png',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS3', 'PWA'],
      github: '#',
      live: '#',
      size: 'small',
    },
    {
      title: 'Crypto Trading Bot',
      description:
        'An automated cryptocurrency trading bot with machine learning algorithms.',
      image: '/placeholder.svg?height=300&width=400',
      tech: ['Python', 'TensorFlow', 'WebSocket', 'React', 'Docker'],
      github: '#',
      live: '#',
      size: 'small',
    },
    {
      title: 'Social Media Analytics',
      description:
        'A comprehensive social media analytics platform with sentiment analysis.',
      image: '/images/payscrow.png',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      size: 'medium',
    },
    // {
    //   title: "AI Image Generator",
    //   description: "A creative tool that generates images from text descriptions using AI.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   tech: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
    //   github: "#",
    //   live: "#",
    //   size: "small",
    // },
  ];

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    // 'Node.js',
    'GraphQL',
    'REST API',
    'Framer Motion',
    'Redux',
    'Git',
    'Responsive Design',
    // 'Web3',
    // 'Blockchain',
    // 'Three.js',
    // 'GSAP',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dotted-bg">
      <Navbar />

      {/* AI Chat Button - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isLoaded ? 1 : 0 }}
          transition={{ delay: 1, type: 'spring' }}
        >
          <Button
            onClick={() => setShowAIChat(true)}
            className="rounded-full w-16 h-16 glass hover:bg-white/20 shadow-2xl border-white/20"
            aria-label="Open AI Chat"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </Button>
        </motion.div>
      </div>

      {/* AI Chat Modal */}

      <AnimatePresence>
        {showAIChat && <AIChat onClose={() => setShowAIChat(false)} />}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingElements />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-4 glass text-blue-300 hover:bg-white/20 transition-colors border-blue-400/30">
                Frontend Developer
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Creating{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  digital experiences
                </span>{' '}
                that inspire
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                I build modern, responsive web applications with cutting-edge
                technologies, stunning animations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/20 text-white hover:bg-white/10"
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-6 mt-8">
                {[
                  { Icon: Github, href: 'https://github.com/haybesil' },
                  {
                    Icon: Linkedin,
                    href: 'https://linkedin.com/in/silasabayomi',
                  },
                  { Icon: Mail, href: 'mailto:abayomisilas50@gmail.com' },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors p-2 glass rounded-full hover:bg-white/10"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl glass" />
                <div className="absolute inset-4 glass rounded-xl overflow-hidden">
                  <div className="w-full h-8 bg-slate-800/50 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="p-6 font-mono text-sm text-blue-300">
                    <div className="flex items-center mb-4">
                      <span className="text-white/60">const</span>
                      <span className="text-green-400 mx-2">developer</span>
                      <span className="text-white/60">=</span>
                      <span className="text-blue-400 mx-2">{'{'}</span>
                    </div>
                    <div className="ml-6 mb-2">
                      <span className="text-purple-400">name:</span>
                      <span className="text-yellow-300 ml-2">
                        &apos;Silas Abayomi&apos;
                      </span>
                      ,
                    </div>
                    <div className="ml-6 mb-2">
                      <span className="text-purple-400">role:</span>
                      <span className="text-yellow-300 ml-2">
                        &apos;Frontend Developer&apos;
                      </span>
                      ,
                    </div>
                    <div className="ml-6 mb-2">
                      <span className="text-purple-400">skills:</span>
                      <span className="text-blue-400 ml-2">[</span>
                      <span className="text-yellow-300">&apos;React&apos;</span>
                      ,
                      <span className="text-yellow-300">
                        &apos;Next.js&apos;
                      </span>
                      ,
                      <span className="text-yellow-300">
                        &apos;Typescript&apos;
                      </span>
                      <span className="text-blue-400">]</span>,
                    </div>
                    <div className="ml-6 mb-2">
                      <span className="text-purple-400">available:</span>
                      <span className="text-green-400 ml-2">true</span>,
                    </div>
                    <div className="ml-6 mb-2">
                      <span className="text-purple-400">passion:</span>
                      <span className="text-yellow-300 ml-2">
                        &apos;Building the future&apos;
                      </span>
                      ,
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-400">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 glass text-blue-300 hover:bg-white/20 transition-colors border-blue-400/30">
              My Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I specialize in modern frontend technologies, with a focus on
              creating responsive, accessible, and performant web applications
              with cutting-edge animations.
            </p>
          </motion.div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} />
            ))}
          </div> */}
          <div className="space-y-8">
            <section>
              <SkillCircle />
            </section>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 glass text-blue-300 hover:bg-white/20 transition-colors border-blue-400/30">
              My Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore my latest projects featuring modern web technologies,
              stunning animations, and innovative solutions.
            </p>
          </motion.div>

          <BentoProjectGrid projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 glass text-blue-300 hover:bg-white/20 transition-colors border-blue-400/30">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have a project in mind? Feel free to reach out and let&apos;s
              discuss how I can help bring your ideas to life with cutting-edge
              technology and stunning design.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() => setShowAIChat(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 glass border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} Frontend Developer Portfolio. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { Icon: Github, href: 'https://github.com/haybesil' },
                {
                  Icon: Linkedin,
                  href: 'https://linkedin.com/in/silasabayomi',
                },
                { Icon: Mail, href: 'mailto:abayomisilas50@gmail.com' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
