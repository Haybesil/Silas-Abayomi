"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, Bot, User } from "lucide-react"
import { useChat } from "ai/react"

interface AIChatProps {
  onClose: () => void
}

export default function AIChat({ onClose }: AIChatProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isStarted, setIsStarted] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      name,
      email,
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setIsStarted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-slate-900 border border-white/10 rounded-xl w-full max-w-md overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Bot className="w-6 h-6 text-white mr-2" />
            <div>
              <h3 className="text-lg font-medium text-white">AI Assistant</h3>
              {isStarted && <p className="text-sm text-blue-100">Ask me anything about the developer!</p>}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Chat Content */}
        <div className="h-96 overflow-y-auto bg-slate-800/50">
          {!isStarted ? (
            <div className="p-4">
              <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-start">
                  <Bot className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white text-sm">
                    Hi! I&apos;m an AI assistant that can help answer questions about this developer&apos;s skills, projects, and
                    availability. Please provide your details to get started.
                  </p>
                </div>
              </div>

              <form onSubmit={handleStart} className="space-y-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Name *</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Email *</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Start Chat
                </Button>
              </form>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Welcome message */}
              <div className="flex items-start">
                <Bot className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <div className="bg-slate-700/50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Hi {name}! I&apos;m here to help answer any questions about this developer&apos;s work, skills, or
                    availability. What would you like to know?
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && <Bot className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user" ? "bg-blue-600 text-white ml-2" : "bg-slate-700/50 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && <User className="w-5 h-5 text-blue-400 ml-2 mt-0.5 flex-shrink-0" />}
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-start">
                  <Bot className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        {isStarted && (
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-slate-800/80">
            <div className="flex space-x-2">
              <Textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything about the developer..."
                className="bg-slate-700/50 border-slate-600 text-white resize-none placeholder:text-white/50"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e as any)
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-2">Press Enter to send, Shift+Enter for new line</p>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
