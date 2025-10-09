'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  logoUrl?: string
}

export default function Navbar({ logoUrl }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const whatsappNumber = "5511999999999"
  const whatsappMessage = "Olá! Quero saber mais sobre a AutomateX."

  const handleWhatsAppClick = () => {
    // Scroll to the meeting section instead of opening WhatsApp
    const meetingSection = document.getElementById('agendar-reuniao')
    if (meetingSection) {
      meetingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFalarEspecialistaClick = () => {
    // Close dropdown and scroll to meeting section
    setActiveDropdown(null)
    const meetingSection = document.getElementById('agendar-reuniao')
    if (meetingSection) {
      meetingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCasosSucessoClick = () => {
    // Scroll to empresas section
    const empresasSection = document.getElementById('empresas-confiam')
    if (empresasSection) {
      empresasSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSolutionsClick = () => {
    // Close dropdown and scroll to products section
    setActiveDropdown(null)
    const productsSection = document.getElementById('produtos')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    {
      title: 'ImoBot Pro',
      description: 'Soluções de IA para o Mercado Imobiliário',
      href: '/solucoes/imobot-pro',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'ClinicFlow AI',
      description: 'Automação e Gestão para Clínicas de Saúde',
      href: '/solucoes/clinicflow-ai',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'AutomateX Enterprise',
      description: 'Projetos de IA e Automação Sob Demanda',
      href: '/solucoes/automatex-enterprise',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'IA Launchpad',
      description: 'Cursos e Ferramentas para Criadores de IA',
      href: '/solucoes/ia-launchpad',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-lg">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="AutomateX Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-mono">A</span>
                </div>
              )}
              <span className="text-xl font-bold text-white font-mono tracking-wider">
                AutomateX
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Soluções com Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 flex items-center space-x-1">
                <span>Soluções</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu */}
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Coluna Esquerda - Lista de Soluções */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 font-mono">Nossas Soluções</h3>
                      <div className="space-y-4">
                        {solutions.map((solution, index) => (
                          <button
                            key={index}
                            onClick={handleSolutionsClick}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 group w-full text-left"
                          >
                            <div className="flex-shrink-0">{solution.icon}</div>
                            <div>
                              <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                                {solution.title}
                              </h4>
                              <p className="text-gray-400 text-sm mt-1">{solution.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Coluna Direita - Card de Destaque */}
                    <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-400/30 rounded-lg p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🔧</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 font-mono">Hub de Automação</h4>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Descubra como nossas soluções podem revolucionar seu negócio
                        </p>
                        <button
                          onClick={handleFalarEspecialistaClick}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                          Falar com Especialista
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleCasosSucessoClick}
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
            >
              Casos de Sucesso
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Agendar reunião
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={closeMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <span className="text-xl font-bold text-white font-mono">Menu</span>
                    <button
                      onClick={closeMenu}
                      className="text-gray-400 hover:text-gray-300 focus:outline-none"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 py-6 px-6">
                    <div className="space-y-4">
                      {/* Soluções Mobile */}
                      <div>
                        <h3 className="text-gray-300 font-semibold mb-2">Soluções</h3>
                        <div className="pl-4 space-y-2">
                          {solutions.map((solution, index) => (
                            <Link
                              key={index}
                              href={solution.href}
                              className="block text-gray-400 hover:text-cyan-400 font-medium text-sm"
                              onClick={closeMenu}
                            >
                              <span className="inline-flex items-center space-x-2">
                                <span className="w-4 h-4">{solution.icon}</span>
                                <span>{solution.title}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          closeMenu()
                          handleCasosSucessoClick()
                        }}
                        className="text-gray-300 hover:text-cyan-400 font-medium text-left"
                      >
                        Casos de Sucesso
                      </button>
                    </div>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="p-6 border-t border-gray-700">
                    <button
                      onClick={() => {
                        closeMenu()
                        handleWhatsAppClick()
                      }}
                      className="block w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg text-center"
                    >
                      Agendar reunião
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}