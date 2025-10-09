'use client'

import { motion } from 'framer-motion'

export default function AboutFounderSection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
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
              👤 FUNDADOR & MISSÃO
            </span>
          </div>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Coluna da Esquerda - Foto do Fundador */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110" />

              {/* Photo Container */}
              <div className="relative">
                <img
                  src="/images/foto-fundador.jpg"
                  alt="Foto do Fundador da AutomateX"
                  className="w-full max-w-md h-auto object-cover rounded-3xl border-4 border-gray-700 shadow-2xl"
                />

                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/20 rounded-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita - Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              De Empreendedor para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Empreendedor.
              </span>
            </h2>

            {/* Subtítulo */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 leading-relaxed">
              Eu não vendo IA. Eu construo pontes para o seu crescimento.
            </h3>

            {/* Parágrafos de Texto */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Depois de 8 anos empreendendo e enfrentando os mesmos desafios que você enfrenta hoje, descobri que o problema não era falta de clientes ou de produto. Era falta de tempo para focar no que realmente importa: crescer o negócio.
              </p>

              <p>
                Passei noites tentando responder WhatsApp, qualificar leads e organizar agendas. Vi oportunidades de venda escaparem porque minha equipe estava ocupada com tarefas repetitivas. Foi aí que entendi: a IA não é sobre tecnologia, é sobre liberdade.
              </p>

              <p>
                A AutomateX nasceu para resolver um problema real: dar ao empreendedor a possibilidade de focar na estratégia enquanto a IA cuida da operação. Não vendemos software, vendemos tempo de volta para você.
              </p>
            </div>

            {/* Assinatura */}
            <div className="pt-6 border-t border-gray-700">
              <div className="text-xl font-bold text-white mb-1">Pedro Machado</div>
              <div className="text-cyan-400 font-medium">Fundador & CEO da AutomateX</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}