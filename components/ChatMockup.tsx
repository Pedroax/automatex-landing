'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
  delay: number
}

const messages: Message[] = [
  { id: 1, text: "Como posso aumentar minhas vendas?", isUser: true, delay: 0 },
  { id: 2, text: "Vou analisar seu funil de vendas e criar automações personalizadas...", isUser: false, delay: 1200 },
  { id: 3, text: "Identifiquei 3 oportunidades de automação que podem aumentar suas conversões em 40%", isUser: false, delay: 3000 },
  { id: 4, text: "Mostre-me as oportunidades!", isUser: true, delay: 5000 },
  { id: 5, text: "✅ Qualificação automática de leads\n✅ Follow-up inteligente via WhatsApp\n✅ Agendamento automático de reuniões", isUser: false, delay: 6200 },
]

export default function ChatMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    messages.forEach((message) => {
      setTimeout(() => {
        if (!message.isUser) {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            setVisibleMessages(prev => [...prev, message.id])
          }, 800)
        } else {
          setVisibleMessages(prev => [...prev, message.id])
        }
      }, message.delay)
    })

    // Loop infinito - reinicia após todas as mensagens
    const totalDuration = messages[messages.length - 1].delay + 4000
    const interval = setInterval(() => {
      setVisibleMessages([])
      setIsTyping(false)

      messages.forEach((message) => {
        setTimeout(() => {
          if (!message.isUser) {
            setIsTyping(true)
            setTimeout(() => {
              setIsTyping(false)
              setVisibleMessages(prev => [...prev, message.id])
            }, 800)
          } else {
            setVisibleMessages(prev => [...prev, message.id])
          }
        }, message.delay)
      })
    }, totalDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Chat Container */}
      <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold">Agente AutomateX</h3>
              <p className="text-xs text-cyan-400 flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Online</span>
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="px-6 py-6 space-y-4 h-96 overflow-y-auto custom-scrollbar">
          <AnimatePresence>
            {messages.map((message) => {
              if (!visibleMessages.includes(message.id)) return null

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-br-sm'
                        : 'bg-gray-700/50 text-gray-100 border border-cyan-500/20 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700/50 border border-cyan-500/20 px-5 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="border-t border-cyan-500/30 bg-gray-800/50 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-gray-700/50 rounded-full px-4 py-2 border border-cyan-500/20">
              <p className="text-sm text-gray-500">Digite sua mensagem...</p>
            </div>
            <button className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>
    </div>
  )
}
