'use client'

import Link from 'next/link'

export default function Footer() {


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Coluna 1: Empresa */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-mono">A</span>
              </div>
              <span className="text-2xl font-bold font-mono tracking-wider">AutomateX</span>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Inteligência Artificial e automações acessíveis que aumentam seu faturamento, reduzem custos e fazem seu negócio escalar.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/pedro-machado-0b92961b6/"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/automatex_/"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-mono">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-left">
                  <span className="text-sm">🏠</span>
                  <span>ImoBot Pro</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-left">
                  <span className="text-sm">⚕️</span>
                  <span>ClinicFlow AI</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-left">
                  <span className="text-sm">⚡</span>
                  <span>AutomateX Enterprise</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 text-left">
                  <span className="text-sm">🚀</span>
                  <span>IA Launchpad</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Navegação */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-mono">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('empresas-confiam')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left">
                  Casos de Sucesso
                </button>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-mono">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">axcodee@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">(61) 99811-2622</span>
              </div>

              <button
                onClick={() => scrollToSection('agendar-reuniao')}
                className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 mt-6"
              >
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-gray-400 text-sm">
          © 2025 AutomateX. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}