'use client'

import { motion } from 'framer-motion'

export default function ClinicFlowHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Integração Simples',
      description: 'Conectamos o ClinicFlow ao seu WhatsApp Business e sistema de agenda em menos de 24 horas. Sem complicação técnica.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      duration: '24 horas'
    },
    {
      number: '02',
      title: 'Treinamento da IA',
      description: 'Nossa equipe treina a IA com as particularidades da sua clínica: especialidades, horários, procedimentos, convênios e tom de voz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      duration: '2-3 dias'
    },
    {
      number: '03',
      title: 'Ativação e Monitoramento',
      description: 'A IA começa a atender pacientes 24/7. Nossa equipe monitora as primeiras semanas e faz ajustes para otimizar resultados.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      duration: 'Contínuo'
    },
    {
      number: '04',
      title: 'Crescimento Acelerado',
      description: 'Você acompanha métricas em tempo real no dashboard e vê sua clínica crescer enquanto a equipe foca no que importa.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      duration: 'Resultados em 30 dias'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.05 }} />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-400 text-sm font-semibold">Implementação Rápida</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Como Funciona na
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"> Prática</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Da integração aos resultados: um processo simples e guiado
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-blue-500/20 transform -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-6 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-400 text-sm font-semibold">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e veja o ClinicFlow funcionando com os dados reais da sua clínica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
              >
                Agendar Demonstração Gratuita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
              >
                Falar com Especialista
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Dados Criptografados</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}