'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ClinicFlowTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Dra. Maria Silva',
      role: 'Diretora Clínica',
      clinic: 'Clínica Saúde Total',
      specialty: 'Odontologia',
      image: '/images/avatar-dra-maria.jpg',
      quote: 'O ClinicFlow AI reduziu nossas faltas em 85% no primeiro mês. É como ter o melhor recepcionista do mundo, trabalhando 24 horas por dia. Minha equipe finalmente pode focar em cuidar dos pacientes.',
      results: [
        { metric: '85%', label: 'Redução de faltas' },
        { metric: 'R$ 32k', label: 'Receita adicional/mês' },
        { metric: '4h/dia', label: 'Tempo economizado' }
      ],
      rating: 5
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Proprietário',
      clinic: 'Clínica VidaPlena',
      specialty: 'Medicina Geral',
      image: '/images/avatar-dr-carlos.jpg',
      quote: 'Nossa produtividade aumentou 60%. A equipe agora pode focar nos pacientes em vez de ficar no telefone agendando consultas. O ROI foi alcançado em menos de 2 meses.',
      results: [
        { metric: '60%', label: 'Aumento de produtividade' },
        { metric: '200+', label: 'Agendamentos/mês' },
        { metric: '< 2 meses', label: 'ROI atingido' }
      ],
      rating: 5
    },
    {
      name: 'Dra. Ana Paula Costa',
      role: 'CEO',
      clinic: 'Rede BeautyMed',
      specialty: 'Estética',
      image: '/images/avatar-dra-ana.jpg',
      quote: 'Conseguimos escalar de 1 para 3 unidades sem aumentar o time de recepção. O ClinicFlow cuida de tudo: agendamento, confirmação, reagendamento. É simplesmente revolucionário.',
      results: [
        { metric: '3x', label: 'Crescimento de unidades' },
        { metric: '0', label: 'Aumento de equipe' },
        { metric: '95%', label: 'Taxa de ocupação' }
      ],
      rating: 5
    },
    {
      name: 'Dr. Ricardo Almeida',
      role: 'Diretor Médico',
      clinic: 'Clínica Ortopédica Premium',
      specialty: 'Ortopedia',
      image: '/images/avatar-dr-ricardo.jpg',
      quote: 'O dashboard de inteligência mudou como tomamos decisões. Sabemos exatamente quais campanhas funcionam, quais horários são mais procurados e como otimizar nossa operação.',
      results: [
        { metric: 'R$ 18k', label: 'Economia em faltas' },
        { metric: '92%', label: 'Taxa de confirmação' },
        { metric: '100%', label: 'Visibilidade de dados' }
      ],
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.05 }} />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-purple-400 text-sm font-semibold">Resultados Reais</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Clínicas que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Transformaram</span> Resultados
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça histórias reais de profissionais que multiplicaram seus resultados com ClinicFlow AI
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Profile & Quote */}
              <div className="space-y-8">
                {/* Profile */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-full blur-xl" />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500/30">
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-purple-400 font-semibold">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[activeTestimonial].clinic}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400">
                        {testimonials[activeTestimonial].specialty}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  <span className="text-6xl text-purple-500/30 leading-none">&ldquo;</span>
                  <p className="mt-4">
                    {testimonials[activeTestimonial].quote}
                  </p>
                </blockquote>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-6">Resultados Alcançados:</h4>
                {testimonials[activeTestimonial].results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                          {result.metric}
                        </div>
                        <div className="text-gray-400 text-lg mt-2">
                          {result.label}
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Selector */}
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTestimonial === index
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {testimonial.name.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-400">Avaliação Média</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  500+
                </div>
                <div className="text-gray-400">Clínicas Satisfeitas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  98%
                </div>
                <div className="text-gray-400">Renovam Todo Ano</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  2x
                </div>
                <div className="text-gray-400">ROI Médio</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}