'use client'

import { motion } from 'framer-motion'

export default function ClinicFlowProblems() {
  const problems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-3 3m0 0l-3-3m3 3V14" />
        </svg>
      ),
      title: 'Agenda Caótica',
      description: 'Horários vagos, duplas marcações e pacientes perdidos entre ligações e WhatsApp.',
      impact: 'Perda de até 30% da capacidade'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
        </svg>
      ),
      title: 'Prejuízo com Faltas',
      description: 'Pacientes esquecem consultas. Sem lembretes automatizados, o no-show corrói sua receita.',
      impact: 'R$ 15.000/mês em consultas perdidas'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Atendimento Limitado',
      description: 'Clínica fecha às 18h, mas o paciente só pode ligar às 19h. Oportunidade perdida.',
      impact: '40% dos leads chegam fora do horário'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Equipe Sobrecarregada',
      description: 'Recepcionistas gastam horas repetindo as mesmas informações, sem tempo para o que importa.',
      impact: '70% do tempo em tarefas repetitivas'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-red-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.05 }} />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-red-400 text-sm font-semibold">Os Problemas que Custam Caro</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sua clínica está
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> sangrando dinheiro</span>?
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enquanto você lê isso, pacientes estão desistindo de agendar, consultas estão sendo perdidas e sua equipe está exausta.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                  {problem.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {problem.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {problem.description}
                </p>

                {/* Impact Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-red-400 text-sm font-semibold">
                    {problem.impact}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-300 mb-8">
            Não precisa ser assim. <span className="text-emerald-400 font-semibold">Existe uma solução.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}