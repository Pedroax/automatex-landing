'use client'

import { motion } from 'framer-motion'

export default function ClinicFlowPainSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 6l12 12M6 18L18 6" />
        </svg>
      ),
      title: "Agenda Fora de Controle",
      description: "Telefones que não param, erros de agendamento e buracos na agenda que poderiam ser preenchidos por pacientes pagantes.",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/30",
      accentColor: "text-red-400"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      ),
      title: "O Fantasma da Cadeira Vazia",
      description: "Cada paciente que falta sem avisar é um prejuízo direto no seu caixa. Multiplique isso pelo ano e veja o tamanho do rombo.",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-400/30",
      accentColor: "text-yellow-400"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6"
            animate={{ pathLength: [1, 0, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      ),
      title: "Equipe no Limite do Burnout",
      description: "Sua equipe de recepção, contratada para acolher, passa o dia em tarefas repetitivas que geram estresse e afetam a qualidade do atendimento.",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-400/30",
      accentColor: "text-purple-400"
    }
  ]

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Título da Seção */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sua recepção (e seu faturamento){' '}
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-red-400 via-yellow-500 to-purple-400 bg-clip-text text-transparent">
                  sofrem com isso
                </span>{' '}
                todos os dias?
              </span>
            </h2>
          </motion.div>

          {/* Grid de Cards de Dores */}
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative group hover:scale-105 transition-all duration-300`}
              >
                {/* Card com Glassmorphism */}
                <div className={`
                  bg-gradient-to-br ${pain.color}
                  backdrop-blur-sm
                  border ${pain.borderColor}
                  rounded-2xl p-8 h-full
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300
                  relative overflow-hidden
                `}>

                  {/* Brilho sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Ícone */}
                  <motion.div
                    className="mb-6 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`
                      w-20 h-20 rounded-2xl
                      bg-gradient-to-br from-slate-800/50 to-slate-700/50
                      border ${pain.borderColor}
                      flex items-center justify-center
                      shadow-lg
                    `}>
                      {pain.icon}
                    </div>
                  </motion.div>

                  {/* Título */}
                  <h3 className={`text-2xl font-bold ${pain.accentColor} mb-4 relative z-10`}>
                    {pain.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                    {pain.description}
                  </p>

                  {/* Indicador de impacto */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`w-3 h-3 ${pain.accentColor.replace('text-', 'bg-')} rounded-full`}
                    />
                  </div>
                </div>

                {/* Efeito de pulso no card ativo */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${pain.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action sutil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-300 text-lg mb-4">
                <span className="font-bold text-white">Reconhece esses problemas?</span>
                {' '}Eles custam mais do que você imagina.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span>Perda de receita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Estresse da equipe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Reputação afetada</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}