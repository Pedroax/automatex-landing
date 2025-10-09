'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoPlaceholder from './LogoPlaceholder'

export default function LogosCarousel() {
  const logos = [
    { name: 'Araguaia', variant: 'fintech' as const, imageSrc: '/images/logos/araguaia.svg' },
    { name: 'Bateral', variant: 'edtech' as const, imageSrc: '/images/logos/bateral.svg' },
    { name: 'Borges', variant: 'fintech' as const, imageSrc: '/images/logos/borges.svg' },
    { name: 'Dunkin', variant: 'default' as const, imageSrc: '/images/logos/dunkin.svg' },
    { name: 'LC', variant: 'fintech' as const, imageSrc: '/images/logos/lc.svg' },
    { name: 'TechCorp', variant: 'edtech' as const },
    { name: 'InnovateLab', variant: 'default' as const },
    { name: 'DataFlow', variant: 'fintech' as const },
    { name: 'SmartSys', variant: 'edtech' as const },
    { name: 'CloudBase', variant: 'default' as const },
    { name: 'EduTech', variant: 'fintech' as const },
    { name: 'DevCore', variant: 'edtech' as const },
    { name: 'FinanceAI', variant: 'default' as const },
  ]

  return (
    <section id="empresas-confiam" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Efeito Holofote de Confiança */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl"
             style={{
               background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)'
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-400 font-mono tracking-wider">
              🎆 HOLOFOTE DE CONFIANÇA
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Empresas que confiam em nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              tecnologia
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Mais de 500 empresas já transformaram seus resultados com nossa IA
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            animate={{
              x: [-(logos.length * (128 + 48)), 0] // Move from left to right
            }}
            transition={{
              duration: 35, // 35 seconds for slower movement
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex space-x-12 items-center"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {logo.imageSrc ? (
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name}
                    width={128}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <LogoPlaceholder
                    name={logo.name}
                    variant={logo.variant}
                    size="md"
                    darkTheme={true}
                  />
                )}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {logo.imageSrc ? (
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name}
                    width={128}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <LogoPlaceholder
                    name={logo.name}
                    variant={logo.variant}
                    size="md"
                    darkTheme={true}
                  />
                )}
              </div>
            ))}

          </motion.div>
        </div>

        {/* Métricas Holofote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Container com fundo sutil */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  127
                </div>
                <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
                  Clientes em 14 setores diferentes
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  +45.000
                </div>
                <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
                  Leads qualificados
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  98%
                </div>
                <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
                  Redução de tarefas manuais
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400 transition-all duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
                  Vendas fora do horário comercial
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400 transition-all duration-300"></div>
              </motion.div>
            </div>
          </div>

          {/* Efeitos de brilho adicional */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 rounded-2xl blur-xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  )
}