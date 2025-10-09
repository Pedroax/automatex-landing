'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ClinicFlowFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      title: 'Recepção Autônoma 24/7',
      subtitle: 'Nunca mais perca um paciente',
      description: 'Nossa IA conversa naturalmente pelo WhatsApp, agenda consultas, responde dúvidas e qualifica leads - mesmo quando você está dormindo.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      stats: [
        { value: '24/7', label: 'Disponibilidade' },
        { value: '3seg', label: 'Tempo de Resposta' },
        { value: '10x', label: 'Mais Conversões' }
      ]
    },
    {
      id: 1,
      title: 'Agenda Inteligente',
      subtitle: 'Zero buracos, máxima eficiência',
      description: 'O sistema analisa padrões, sugere horários ideais e preenche lacunas automaticamente. Sua agenda sempre otimizada.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      stats: [
        { value: '+30%', label: 'Ocupação' },
        { value: '0', label: 'Conflitos' },
        { value: '100%', label: 'Sincronização' }
      ]
    },
    {
      id: 2,
      title: 'Anti-Falta Inteligente',
      subtitle: 'Reduza no-show em até 85%',
      description: 'Lembretes personalizados via WhatsApp e SMS, confirmações automáticas e reagendamento inteligente. Cada consulta confirmada é dinheiro no bolso.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: [
        { value: '-85%', label: 'Faltas' },
        { value: '+R$18k', label: 'Receita Recuperada/mês' },
        { value: '92%', label: 'Taxa de Confirmação' }
      ]
    },
    {
      id: 3,
      title: 'Dashboard de Inteligência',
      subtitle: 'Decisões baseadas em dados reais',
      description: 'Acompanhe métricas em tempo real: taxa de ocupação, ROI de campanhas, horários de pico e origem dos pacientes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: [
        { value: '100+', label: 'Métricas' },
        { value: 'Real-time', label: 'Atualização' },
        { value: '360°', label: 'Visão do Negócio' }
      ]
    },
    {
      id: 4,
      title: 'Equipe Liberada',
      subtitle: 'Foco no que realmente importa',
      description: 'Sua equipe para de fazer trabalho repetitivo e volta a cuidar de pessoas. Mais produtividade, menos estresse, melhor atendimento.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: [
        { value: '-70%', label: 'Tarefas Repetitivas' },
        { value: '+60%', label: 'Produtividade' },
        { value: '4h/dia', label: 'Tempo Economizado' }
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.05 }} />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-emerald-400 text-sm font-semibold">Tecnologia que Transforma</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Conheça o
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> ClinicFlow AI</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A plataforma completa que automatiza sua recepção e multiplica seus resultados
          </p>
        </motion.div>

        {/* Features Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeFeature === index
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {feature.title}
            </motion.button>
          ))}
        </div>

        {/* Active Feature Display */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                {features[activeFeature].icon}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-xl text-emerald-400 font-semibold">
                  {features[activeFeature].subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {features[activeFeature].description}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Ver em Ação
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              {features[activeFeature].stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-lg mt-2">
                        {stat.label}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                500+
              </div>
              <div className="text-gray-400">Clínicas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                2M+
              </div>
              <div className="text-gray-400">Consultas Agendadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                98%
              </div>
              <div className="text-gray-400">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                R$25M
              </div>
              <div className="text-gray-400">Receita Gerada</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}