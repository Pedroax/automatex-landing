'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ClinicFlowNewHero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: '85%', label: 'Redução de Faltas' },
    { value: '24/7', label: 'Atendimento Contínuo' },
    { value: '10x', label: 'Mais Agendamentos' },
    { value: '60%', label: 'Ganho de Produtividade' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">IA Médica Avançada</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Sua Clínica,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 animate-gradient">
                Sempre Aberta
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A recepção autônoma que agenda, confirma e encanta pacientes 24/7.
              Transforme atendimento em crescimento.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all"
              >
                Ver Demonstração ao Vivo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
              >
                Falar com Especialista
              </motion.button>
            </div>

            {/* Rotating Stats */}
            <motion.div
              key={currentStat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                  {stats[currentStat].value}
                </div>
                <div className="text-gray-400 text-lg">
                  {stats[currentStat].label}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Phone Mockup with Chat Interface */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 to-blue-500/50 rounded-[3rem] blur-3xl scale-105" />

              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 border-8 border-gray-800 shadow-2xl">
                {/* Screen */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden h-[600px]">
                  {/* WhatsApp Header */}
                  <div className="bg-emerald-600 px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">ClinicFlow AI</div>
                      <div className="text-emerald-200 text-xs">online</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 h-[480px] overflow-y-auto">
                    {/* Patient Message */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                        <p className="text-white text-sm">Olá, gostaria de agendar uma consulta</p>
                        <span className="text-xs text-gray-400">10:23</span>
                      </div>
                    </motion.div>

                    {/* AI Response */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex justify-end"
                    >
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                        <p className="text-white text-sm">Olá! Claro, vou te ajudar. Qual especialidade você precisa?</p>
                        <span className="text-xs text-emerald-100">10:23</span>
                      </div>
                    </motion.div>

                    {/* Patient Message */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                        <p className="text-white text-sm">Preciso de um dentista</p>
                        <span className="text-xs text-gray-400">10:24</span>
                      </div>
                    </motion.div>

                    {/* AI Response with Options */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0 }}
                      className="flex justify-end"
                    >
                      <div className="space-y-2 max-w-[80%]">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 rounded-2xl rounded-tr-sm">
                          <p className="text-white text-sm">Perfeito! Tenho horários disponíveis esta semana:</p>
                          <span className="text-xs text-emerald-100">10:24</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-emerald-500/20 border border-emerald-500/40 px-4 py-2 rounded-xl text-white text-sm">
                            📅 Amanhã às 14:00
                          </div>
                          <div className="bg-emerald-500/20 border border-emerald-500/40 px-4 py-2 rounded-xl text-white text-sm">
                            📅 Sexta às 10:00
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Typing Indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-tl-sm">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-sm">Role para explorar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}