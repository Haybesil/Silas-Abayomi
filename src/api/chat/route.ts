import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const { messages, name, email } = await req.json()

    // Create a system prompt that includes context about the portfolio
    const systemPrompt = `You are an AI assistant for a frontend developer's portfolio website. 
    The visitor's name is ${name} and their email is ${email}.
    
    You should help answer questions about:
    - The developer's skills and experience
    - Project details and technical implementations
    - Availability for new projects
    - General web development questions
    - How to get in touch or collaborate
    
    Keep responses professional, helpful, and concise. If asked about specific projects, mention that you can provide more details or arrange a call to discuss further.
    
    The developer specializes in:
    - React and Next.js
    - TypeScript and JavaScript
    - Tailwind CSS and modern styling
    - Node.js and full-stack development
    - Responsive design and animations
    - Modern web technologies and best practices`

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages,
      maxTokens: 500,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Error processing chat request", { status: 500 })
  }
}
