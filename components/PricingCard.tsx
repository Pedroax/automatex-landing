'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PricingCardProps {
  id: string
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  type: 'subscription' | 'contact'
}

export default function PricingCard({
  id,
  title,
  price,
  period,
  description,
  features,
  cta,
  popular = false,
  type
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCTAClick = () => {
    // All buttons now redirect to meeting section
    const meetingSection = document.getElementById('agendar-reuniao')
    if (meetingSection) {
      meetingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Close modal after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false)
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 2000)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
          popular
            ? 'border-primary-500 shadow-xl scale-105'
            : 'border-gray-100 shadow-lg'
        }`}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
              Mais popular
            </span>
          </div>
        )}

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-6">
              {description}
            </p>

            <div className="flex items-end justify-center mb-2">
              <span className="text-5xl font-bold text-gray-900">
                {price}
              </span>
              {period && (
                <span className="text-gray-600 ml-2 text-lg">
                  {period}
                </span>
              )}
            </div>

            {type === 'subscription' && (
              <p className="text-sm text-gray-500">
                Cobrança mensal • Cancele quando quiser
              </p>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 ml-3 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              popular
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl focus:ring-primary-500'
                : type === 'contact'
                ? 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:ring-gray-500'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-lg hover:shadow-xl focus:ring-gray-500'
            }`}
          >
            {cta}
          </button>

          {type === 'subscription' && (
            <p className="text-center text-sm text-gray-500 mt-4">
              14 dias grátis • Sem compromisso
            </p>
          )}
        </div>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitted ? (
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Falar com comercial
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Nossa equipe entrará em contato em até 2 horas para apresentar o plano Enterprise personalizado.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="modal-company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Conte-nos sobre suas necessidades..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Solicitar contato'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Obrigado!
                  </h3>
                  <p className="text-gray-600">
                    Recebemos suas informações e nossa equipe entrará em contato em breve.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}