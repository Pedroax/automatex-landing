'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface CalendlySectionProps {
  title?: string
  subtitle?: string
}

export default function CalendlySection({
  title = "A Sala de Reunião Virtual",
  subtitle = "Onde o futuro do seu negócio é projetado"
}: CalendlySectionProps) {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (typeof window !== 'undefined' && !(window as any).Calendly) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        // Script loaded successfully
        console.log('Calendly script loaded')
      }
      script.onerror = () => {
        console.error('Failed to load Calendly script')
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section id="agendar-reuniao" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-gray-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-400 font-mono tracking-wider">
              💼 SALA DE REUNIÃO VIRTUAL
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna da Esquerda - Conteúdo CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Foto do Pedro */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    {/* Placeholder para foto - pode ser substituída por Image component */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white font-mono">PM</span>
                    </div>
                  </div>
                </div>
                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">Pedro Machado</h3>
                <p className="text-cyan-400 font-medium">Especialista em Automação e IA</p>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="space-y-6">
              <h4 className="text-3xl font-bold text-white leading-tight">
                Vamos desenhar o futuro do seu negócio?
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Em uma conversa de 30 minutos, sem compromisso, vamos fazer um diagnóstico gratuito da sua operação e mostrar o potencial de crescimento que a automação pode destravar para você.
              </p>

              {/* Lista de Benefícios */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-white font-medium text-lg">Diagnóstico de Oportunidades</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-white font-medium text-lg">Demonstração da IA em Ação</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0" />
                  <span className="text-white font-medium text-lg">Estimativa de ROI Personalizada</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 font-mono">127</div>
                    <div className="text-gray-400 text-sm">Projetos Entregues</div>
                  </div>
                  <div className="w-px h-12 bg-gray-700" />
                  <div>
                    <div className="text-2xl font-bold text-purple-400 font-mono">95%</div>
                    <div className="text-gray-400 text-sm">Satisfação</div>
                  </div>
                  <div className="w-px h-12 bg-gray-700" />
                  <div>
                    <div className="text-2xl font-bold text-green-400 font-mono">30 min</div>
                    <div className="text-gray-400 text-sm">Plano de Ação Rápido</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita - Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pl-8"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              {/* Calendly Widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/pedrohfmachado/agende-seu-horario"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}