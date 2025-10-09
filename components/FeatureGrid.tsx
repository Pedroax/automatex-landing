'use client'

import { motion } from 'framer-motion'

export default function FeatureGrid() {
  const features = [
    {
      title: 'IA Omnichannel',
      description: 'Conecte WhatsApp, Instagram, Facebook e site em uma única plataforma. Seus agentes de IA respondem instantaneamente em todos os canais.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'LXP Inteligente',
      description: 'Sistema de aprendizado que treina seus agentes com base no seu conhecimento de produto e processo de vendas.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Agente SDR',
      description: 'Prospecção automatizada que identifica leads qualificados, inicia conversas personalizadas e agenda reuniões diretamente na sua agenda.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Agente de Voz',
      description: 'Atendimento telefônico com IA que compreende linguagem natural, resolve dúvidas complexas e agenda demonstrações.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      title: 'Chatbots Avançados',
      description: 'Bots inteligentes com machine learning que aprendem com cada interação e melhoram continuamente.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      title: 'Analytics Avançado',
      description: 'Dashboard completo com métricas em tempo real, insights de conversas e relatórios de performance detalhados.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-50 to-blue-50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-white" id="produtos">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary-700">
              ✨ Soluções Completas em IA
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tecnologia que{' '}
            <span className="text-gradient-hero">
              transforma negócios
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cada solução é projetada para automatizar processos, melhorar atendimento
            e impulsionar o crescimento do seu negócio com inteligência artificial de ponta.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className={`relative card-gradient group-hover:shadow-2xl bg-gradient-to-br ${feature.bgGradient} border-0`}>
                {/* Icon */}
                <div className={`feature-icon bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Arrow icon */}
                  <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold mr-2">Saiba mais</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-lg opacity-30"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para revolucionar seu atendimento?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Descubra como nossas soluções podem transformar sua empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Ver demonstração
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-1">
                  Falar com especialista
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}