'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PricingCard from './PricingCard'

export default function PricingSection() {
  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      price: 'R$ 97',
      period: '/mês',
      description: 'Para pequenos negócios que estão começando',
      features: [
        'Até 500 conversas/mês',
        '1 agente de IA',
        'WhatsApp Business',
        'Dashboard básico',
        'Suporte por email'
      ],
      cta: 'Agendar reunião',
      popular: false,
      type: 'subscription' as const
    },
    {
      id: 'business',
      title: 'Business',
      price: 'R$ 297',
      period: '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Até 2.000 conversas/mês',
        '3 agentes de IA',
        'WhatsApp + Instagram + Facebook',
        'Análise de fotos e vídeos',
        'Dashboard avançado',
        'Integrações com CRM',
        'Suporte prioritário'
      ],
      cta: 'Agendar reunião',
      popular: true,
      type: 'subscription' as const
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Para grandes empresas com necessidades específicas',
      features: [
        'Conversas ilimitadas',
        'Agentes ilimitados',
        'Todos os canais disponíveis',
        'IA personalizada para seu negócio',
        'API dedicada',
        'Manager de sucesso dedicado',
        'Suporte 24/7',
        'Setup e treinamento incluído'
      ],
      cta: 'Agendar reunião',
      popular: false,
      type: 'contact' as const
    }
  ]

  return (
    <section className="section-padding bg-gray-50" id="planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              popular={plan.popular}
              type={plan.type}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            ✨ Todos os planos incluem: Setup gratuito, migração de dados,
            treinamento da equipe e 14 dias de teste grátis
          </p>
          <Link
            href="/planos"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
          >
            Ver todos os detalhes dos planos
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}