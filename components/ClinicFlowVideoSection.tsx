'use client'

import { motion } from 'framer-motion'

export default function ClinicFlowVideoSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Layout de duas colunas */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Coluna da Esquerda - Vídeo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Container do vídeo com bordas arredondadas */}
              <div className="relative group">

                {/* Efeito de brilho ao redor do vídeo */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Card do vídeo */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-4 shadow-2xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-xl shadow-lg"
                    style={{ maxWidth: '640px' }}
                    onError={(e) => {
                      // Fallback se o vídeo não existir
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className += ' bg-gradient-to-br from-slate-700 via-blue-800 to-slate-700 min-h-[360px] flex items-center justify-center';
                        parent.innerHTML = `
                          <div class="text-center">
                            <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <p class="text-slate-300 text-lg">Clínica Moderna</p>
                            <p class="text-slate-500 text-sm">Demonstração ClinicFlow</p>
                          </div>
                        `;
                      }
                    }}
                  >
                    <source src="/videos/clinica-moderna.mp4" type="video/mp4" />
                  </video>

                  {/* Overlay com play button sutil */}
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Indicador de funcionalidade */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  animate={{
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨ IA em Ação
                </motion.div>
              </div>
            </motion.div>

            {/* Coluna da Direita - Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Título */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua nova recepcionista trabalha 24/7.{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  E nunca tira férias.
                </span>
              </h2>

              {/* Parágrafo */}
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                O ClinicFlow AI é a plataforma de automação que agenda pacientes, confirma consultas e organiza sua operação, para que sua equipe possa focar no que realmente importa: o atendimento humanizado.
              </p>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Ver Demonstração ao Vivo</span>
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </motion.svg>
                  </span>

                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </motion.div>

              {/* Estatísticas rápidas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-600/30"
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-slate-400">Disponível</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400">98%</div>
                  <div className="text-sm text-slate-400">Precisão</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-400">+30%</div>
                  <div className="text-sm text-slate-400">Eficiência</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}