'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          employees: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-white" id="contato">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Obrigado pelo seu interesse!
            </h3>
            <p className="text-gray-600 mb-6">
              Recebemos suas informações e nossa equipe entrará em contato em até 24 horas para agendar uma demonstração personalizada.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Enviar outro contato
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white" id="contato">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pronto para transformar seu{' '}
                <span className="text-gradient">atendimento?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Agende uma demonstração gratuita e veja como nossa IA pode
                revolucionar o relacionamento com seus clientes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@saas.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de funcionários
                </label>
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="1-10">1-10 funcionários</option>
                  <option value="11-50">11-50 funcionários</option>
                  <option value="51-200">51-200 funcionários</option>
                  <option value="201-1000">201-1000 funcionários</option>
                  <option value="1000+">1000+ funcionários</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar demonstração'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar, você concorda com nossa política de privacidade.
                Não enviamos spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}