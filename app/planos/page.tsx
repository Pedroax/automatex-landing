import type { Metadata } from 'next'
import PricingCard from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Planos - AutomateX',
  description: 'Escolha o plano ideal para sua empresa. Agentes de IA que trabalham 24/7 para gerar mais vendas.',
}

export default function PlanosPage() {
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
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Escolha o plano ideal para{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                sua empresa
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Todos os planos incluem setup gratuito, treinamento da equipe e 14 dias de teste grátis.
              Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-gray-600">
              Tire suas principais dúvidas sobre nossos planos
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posso mudar de plano a qualquer momento?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                As mudanças são aplicadas no próximo ciclo de cobrança.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Como funciona o período de teste gratuito?
              </h3>
              <p className="text-gray-600">
                Todos os planos incluem 14 dias grátis. Você pode cancelar a qualquer momento
                durante o período de teste sem ser cobrado.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                O que acontece se eu exceder o limite de conversas?
              </h3>
              <p className="text-gray-600">
                Você será notificado quando atingir 80% do limite. Se exceder,
                você pode fazer upgrade do plano ou as conversas extras serão cobradas separadamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}