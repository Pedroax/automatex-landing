'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TypingEffect from './TypingEffect'
import HeroBackground from './HeroBackground'
import ChatMockup from './ChatMockup'

export default function Hero() {
  const whatsappNumber = "5511999999999"
  const whatsappMessage = "Olá! Quero saber mais sobre como a AutomateX pode acelerar o crescimento da minha empresa."

  const handleMeetingClick = () => {
    // Scroll to the meeting section
    const meetingSection = document.getElementById('agendar-reuniao')
    if (meetingSection) {
      meetingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { value: '127+', label: 'Empresas ativas' },
    { value: '50K+', label: 'Conversas processadas' },
    { value: '98%', label: 'Satisfação' },
    { value: '24/7', label: 'Suporte ativo' },
  ]

  const typingPhrases = [
    'IA Generativa',
    'Agentes de Vendas',
    'Automação de Processos',
    'Atendimento Omnichannel'
  ]

  return (
    <HeroBackground className="min-h-screen">
      <section className="bg-gray-900 section-padding pt-20 pb-24 relative overflow-hidden min-h-screen flex items-center">
        {/* Cyberpunk Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />

        <div className="container-custom relative w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Título principal com hierarquia clara */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-center lg:text-left">
                    <span className="text-white">Transforme seu negócio com</span>
                  </h1>
                  <div className="relative inline-block">
                    <TypingEffect
                      phrases={typingPhrases}
                      className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold text-5xl md:text-6xl lg:text-7xl"
                      typingSpeed={80}
                      deletingSpeed={40}
                      delayBetweenPhrases={2000}
                    />
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full blur-sm"
                    />
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl text-center lg:text-left">
                  Agentes de IA que <span className="text-white font-semibold">aumentam vendas</span>,{' '}
                  <span className="text-white font-semibold">reduzem custos</span> e fazem seu negócio{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">escalar 24/7</span>.
                </p>
              </motion.div>

              {/* CTAs - Design premium */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={handleMeetingClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl font-bold text-white text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 overflow-hidden"
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Quero Acelerar Meu Crescimento</span>
                  </span>
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </motion.button>

                <button
                  onClick={handleMeetingClick}
                  className="group px-10 py-5 bg-gray-800/30 backdrop-blur-xl border-2 border-cyan-400/40 rounded-2xl font-semibold text-cyan-400 text-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Agendar Reunião Grátis</span>
                  </span>
                </button>
              </motion.div>

              {/* Stats Premium com Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative z-10 space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 font-mono tracking-wider uppercase leading-tight">
                          {stat.label}
                        </div>
                      </div>

                      {/* Animated border */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm -z-10"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual Container - Chat Mockup Animado */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <ChatMockup />
            </motion.div>
          </div>
        </div>
      </section>
    </HeroBackground>
  )
}