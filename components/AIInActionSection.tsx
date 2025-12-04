'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

export default function AIInActionSection() {
  const benefits = [
    'Entende e responde mensagens de voz',
    'Qualifica leads e agenda reuniões',
    'Integra com seu CRM',
    'Funciona 24/7'
  ]

  // Gera um ID único para a sessão do usuário
  const generateUserId = () => {
    // Verifica se já existe um ID salvo no sessionStorage
    let userId = sessionStorage.getItem('chat-user-id')

    if (!userId) {
      // Gera um novo ID único usando timestamp + random
      const timestamp = Date.now()
      const random = Math.random().toString(36).substring(2, 15)
      userId = `user_${timestamp}_${random}`

      // Salva no sessionStorage para manter durante a sessão
      sessionStorage.setItem('chat-user-id', userId)
    }

    return userId
  }

  // Função para adicionar mensagem ao chat
  const addMessage = (message: string, isUser: boolean = false) => {
    const messageArea = document.getElementById('message-area')
    if (!messageArea) return

    const messageDiv = document.createElement('div')
    messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`

    messageDiv.innerHTML = `
      <div class="${isUser ? 'bg-cyan-500 text-black' : 'bg-gray-700 text-white'} rounded-lg p-3 max-w-xs text-sm">
        <p>${message}</p>
      </div>
    `

    messageArea.appendChild(messageDiv)
    messageArea.scrollTop = messageArea.scrollHeight
  }

  // Função para mostrar indicador de digitação
  const showTypingIndicator = () => {
    const messageArea = document.getElementById('message-area')
    if (!messageArea) return

    const typingDiv = document.createElement('div')
    typingDiv.id = 'typing-indicator'
    typingDiv.className = 'flex justify-start'

    typingDiv.innerHTML = `
      <div class="bg-gray-700 text-white rounded-lg p-3 max-w-xs text-sm">
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    `

    messageArea.appendChild(typingDiv)
    messageArea.scrollTop = messageArea.scrollHeight
  }

  // Função para remover indicador de digitação
  const hideTypingIndicator = () => {
    const typingIndicator = document.getElementById('typing-indicator')
    if (typingIndicator) {
      typingIndicator.remove()
    }
  }

  // Função para enviar mensagem para o agente Smith (LangGraph)
  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    console.log('=== ENVIANDO MENSAGEM ===')
    console.log('Mensagem:', message)

    // Adiciona mensagem do usuário
    addMessage(message, true)

    // Limpa o input
    const input = document.getElementById('chat-input') as HTMLInputElement
    if (input) input.value = ''

    // Mostra indicador de digitação
    showTypingIndicator()

    // Gera ou recupera o ID único do usuário
    const userId = generateUserId()
    console.log('User ID:', userId)

    const payload = {
      userId: userId,
      message: message,
      timestamp: new Date().toISOString(),
      source: 'website_chat',
      sessionId: userId, // ID da sessão para manter contexto
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    }

    console.log('Payload enviado:', payload)

    try {
      console.log('=== SMITH AGENT REQUEST ===')
      console.log('Endpoint:', '/api/smith-agent')
      console.log('Payload:', payload)

      const response = await fetch('/api/smith-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('HTTP error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const responseText = await response.text()
      console.log('Raw response:', responseText)

      let data
      try {
        data = JSON.parse(responseText)
        console.log('Parsed JSON data:', data)
      } catch (parseError) {
        console.error('JSON parse error:', parseError)
        console.log('Response is not JSON, treating as plain text')
        data = { message: responseText }
      }

      // Remove indicador de digitação
      hideTypingIndicator()

      // Debug: mostra a estrutura completa dos dados recebidos
      console.log('Tipo dos dados:', typeof data)
      console.log('Propriedades disponíveis:', Object.keys(data))
      console.log('Dados completos:', JSON.stringify(data, null, 2))

      // Adiciona resposta da IA - tenta várias propriedades possíveis
      let aiResponse = null

      // Tenta diferentes propriedades comuns
      if (data.response) aiResponse = data.response
      else if (data.message) aiResponse = data.message
      else if (data.reply) aiResponse = data.reply
      else if (data.answer) aiResponse = data.answer
      else if (data.text) aiResponse = data.text
      else if (data.content) aiResponse = data.content
      else if (data.output) aiResponse = data.output
      else if (data.result) aiResponse = data.result
      else if (data.data) aiResponse = data.data
      else if (typeof data === 'string') aiResponse = data
      else if (Array.isArray(data) && data.length > 0) aiResponse = data[0].message || data[0].text || data[0]
      else {
        // Se nenhuma propriedade conhecida, mostra todas as propriedades disponíveis
        const keys = Object.keys(data)
        if (keys.length > 0) {
          aiResponse = `Debug - Propriedades recebidas: ${keys.join(', ')}. Valor da primeira propriedade: ${JSON.stringify(data[keys[0]])}`
        } else {
          aiResponse = `Debug - Dados recebidos: ${JSON.stringify(data)}`
        }
      }

      console.log('AI Response escolhida:', aiResponse)
      addMessage(aiResponse, false)

    } catch (error) {
      console.error('Erro completo ao enviar mensagem:', error)

      // Remove indicador de digitação
      hideTypingIndicator()

      // Adiciona mensagem de erro mais detalhada
      addMessage(`Erro de conexão: ${error instanceof Error ? error.message : 'Erro desconhecido'}. Verifique o console para mais detalhes.`, false)
    }
  }

  useEffect(() => {
    // Adiciona event listeners após o componente montar
    const handleSendClick = () => {
      const input = document.getElementById('chat-input') as HTMLInputElement
      if (input && input.value.trim()) {
        sendMessage(input.value)
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        const input = event.target as HTMLInputElement
        if (input.value.trim()) {
          sendMessage(input.value)
        }
      }
    }

    // Adiciona listeners
    const sendButton = document.getElementById('send-button')
    const chatInput = document.getElementById('chat-input')

    if (sendButton) {
      sendButton.addEventListener('click', handleSendClick)
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', handleKeyPress)
    }

    // Cleanup
    return () => {
      if (sendButton) {
        sendButton.removeEventListener('click', handleSendClick)
      }
      if (chatInput) {
        chatInput.removeEventListener('keypress', handleKeyPress)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-gray-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-400 font-mono tracking-wider">
              🤖 IA EM AÇÃO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              IA em Ação
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como nossa inteligência artificial revoluciona o atendimento ao cliente
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda - Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Título Principal */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Transforme seu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  WhatsApp
                </span>{' '}
                em uma máquina de vendas.
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nossa IA qualifica leads, agenda reuniões e vende para você 24/7, diretamente no WhatsApp. Libere sua equipe para focar em fechar negócios, não em responder perguntas repetitivas.
              </p>
            </div>

            {/* Lista de Benefícios */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-white font-medium text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Botão de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/demonstracao"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Ver Demonstração
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>

            {/* Indicadores de Confiança */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 font-mono">98%</div>
                <div className="text-gray-400 text-sm">Precisão</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 font-mono">&lt;2s</div>
                <div className="text-gray-400 text-sm">Tempo Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 font-mono">24/7</div>
                <div className="text-gray-400 text-sm">Disponibilidade</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Direita - Mockup de Celular */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-2xl scale-110" />

              {/* Mockup Container */}
              <div className="mockup-container relative w-80 h-[600px] bg-gray-800 rounded-[3rem] p-2 border-2 border-gray-700">
                {/* Screen Area */}
                <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center justify-between px-6 text-white text-xs font-medium z-20">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="absolute top-8 left-0 right-0 h-16 bg-green-600 flex items-center px-4 text-white z-20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold font-mono">AI</span>
                      </div>
                      <div>
                        <div className="font-semibold">AutomateX Bot</div>
                        <div className="text-xs text-green-100">online</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Interface */}
                  <div className="absolute top-24 left-0 right-0 bottom-0">
                    <div id="chat-screen" className="flex flex-col h-full bg-black p-2">
                      {/* Cabeçalho do Chat */}
                      <div className="flex items-center p-2 bg-gray-800 rounded-t-lg">
                        <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-black text-sm">AI</div>
                        <div className="ml-3">
                          <p className="text-white font-semibold text-sm">AutomateX Bot</p>
                          <p className="text-green-400 text-xs">online</p>
                        </div>
                      </div>

                      {/* Área de Mensagens */}
                      <div id="message-area" className="flex-grow overflow-y-auto p-3 space-y-3" style={{maxHeight: 'calc(100% - 120px)'}}>
                        {/* Mensagem da IA (Exemplo inicial) */}
                        <div className="flex justify-start">
                          <div className="bg-gray-700 text-white rounded-lg p-3 max-w-xs text-sm">
                            <p>Olá! Eu sou a IA da AutomateX. Faça uma pergunta para me testar.</p>
                          </div>
                        </div>
                      </div>

                      {/* Área de Digitação */}
                      <div className="p-2 bg-gray-800 rounded-b-lg flex items-center">
                        <input
                          type="text"
                          id="chat-input"
                          className="flex-grow bg-gray-600 text-white text-sm rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          placeholder="Digite sua mensagem..."
                        />
                        <button id="send-button" className="ml-3 bg-cyan-500 text-black rounded-full p-2 hover:bg-cyan-400 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                </div>

                {/* Phone Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}