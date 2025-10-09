'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Product {
  id: string
  headline: string
  subtext: string
  benefits: string[]
  price: string
  cta: string
  ctaStyle: string
  badge?: string
  badgeStyle?: string
  videoSrc: string
  videoTitle: string
}

export default function ProductGrid() {
  const handleSaibaMaisClick = () => {
    const agendamentoSection = document.getElementById('agendar-reuniao')
    if (agendamentoSection) {
      agendamentoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const products: Product[] = [
    {
      id: 'ia-omnichannel-avancada',
      headline: 'Quantos pacientes você perdeu por agendamento ineficiente?',
      subtext: 'Nossa IA organiza sua agenda, confirma consultas, preenche encaixes e reduz as faltas (no-show), garantindo que sua clínica opere com máxima eficiência.',
      benefits: [
        'Agendamento inteligente 24/7 via WhatsApp, sem intervenção humana.',
        'Confirmação e lembretes automáticos que diminuem o no-show em até 70%.',
        'Gestão de lista de espera para preencher horários vagos por desistências.'
      ],
      price: 'A partir de R$ 997/mês',
      cta: 'Expandir Presença Digital',
      ctaStyle: 'gradient-cyan-purple',
      badge: ' AGENDA CHEIA',
      badgeStyle: 'bg-cyan-500',
      videoSrc: '/videos/teste2.mp4',
      videoTitle: 'A GESTÃO DO FUTURO PARA SUA CLÍNICA'
    },
    {
      id: 'automacao-vendas-inteligente',
      headline: 'Sua imobiliária fecha apenas 30% dos leads que recebe?',
      subtext: '87% das imobiliárias perdem vendas porque não conseguem qualificar e nutrir leads adequadamente. ImoBot Pro resolve isso automaticamente.',
      benefits: [
        'Qualificação inteligente identifica compradores reais.',
        'Agendamento automático de visitas.',
        'Follow-up personalizado baseado em comportamento'
      ],
      price: 'A partir de R$ 1.497/mês',
      cta: 'Acelerar Crescimento',
      ctaStyle: 'gradient-blue-purple',
      badge: 'LEADS EM VENDAS',
      badgeStyle: 'bg-green-500',
      videoSrc: '/videos/teste1.1.mp4',
      videoTitle: 'A IMOBILIÁRIA DO FUTURO'
    },
    {
      id: 'solucoes-verticais-b2b',
      headline: 'Sua ideia de automação pode ser seu próximo negócio.',
      subtext: 'Acesse nosso arsenal de templates e treinamentos práticos para construir e monetizar seus próprios agentes de IA, mesmo que você não seja um programador.',
      benefits: [
        'Templates de agentes de IA prontos para você copiar, colar e vender.',
        'Aulas passo a passo para criar automações e sistemas do zero.',
        'Acesso ao nosso Marketplace de IA com dezenas de soluções prontas.'
      ],
      price: 'A partir de R$ 2.497/mês',
      cta: 'Eliminar Gargalos',
      ctaStyle: 'gradient-blue-green',
      badge: 'CRIE & LUCRE',
      badgeStyle: 'bg-orange-500',
      videoSrc: '/videos/teste1.mp4',
      videoTitle: 'DEIXE DE SER USUÁRIO. SEJA O CRIADOR.'
    },
    {
      id: 'ia-personalizada-enterprise',
      headline: 'Precisa de uma solução que não existe no mercado?',
      subtext: 'Desenvolvemos IA sob medida para resolver desafios únicos da sua operação',
      benefits: [
        '100% customizado para seu negócio',
        'Integração com sistemas proprietários',
        'Suporte dedicado durante todo o processo'
      ],
      price: 'Consulte valor',
      cta: 'Solicitar Proposta',
      ctaStyle: 'gradient-purple-pink',
      badge: 'ALTA PERFORMANCE',
      badgeStyle: 'bg-purple-500',
      videoSrc: '/videos/teste3.mp4',
      videoTitle: 'INTEGRAÇÃO CUSTOMIZADA'
    }
  ]

  return (
    <section id="produtos" className="py-24 bg-gray-900 relative overflow-hidden">
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
              💡 FLUXO DE DADOS VIVO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Arquiteto de IA que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              escala negócios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada automação é uma engenharia única. Veja como transformamos desafios em oportunidades de crescimento exponencial.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Product Card com Vídeo */}
              <div className="product-card bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20">

                {/* Video Container */}
                <div className="video-container relative h-64 overflow-hidden">
                  {/* Video Real */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={product.videoSrc} type="video/mp4" />
                    {/* Fallback estático cyberpunk se vídeo não carregar */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-purple-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center relative z-10">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                          {product.videoTitle}
                        </div>
                        <div className="flex justify-center space-x-1">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                          <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  </video>

                  {/* Overlay com efeito cyberpunk */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20"></div>

                  {/* Título do Vídeo Overlay */}
                  <h3 className="absolute top-4 left-4 text-white font-bold text-lg font-mono tracking-wider drop-shadow-lg">
                    {product.videoTitle}
                  </h3>

                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 ${product.badgeStyle} text-white text-xs font-bold rounded-full font-mono tracking-wider`}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 h-96 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-3 leading-tight h-12 overflow-hidden">
                    {product.headline}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-normal h-16 overflow-hidden">
                    {product.subtext}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6 flex-1">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-300 font-medium text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider Line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6 mt-auto"></div>

                  {/* CTA Buttons */}
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="/planos"
                      className={`btn-${product.ctaStyle} px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105`}
                    >
                      {product.cta}
                    </Link>
                    <button
                      onClick={handleSaibaMaisClick}
                      className="px-8 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg font-semibold text-center hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400/50"
                    >
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}