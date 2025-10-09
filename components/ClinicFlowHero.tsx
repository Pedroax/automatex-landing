'use client'

import { motion } from 'framer-motion'

export default function ClinicFlowHero() {
  return (
    <div className="w-full">
      {/* MISSÃO 1: Seção Herói - A Promessa */}
      <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Coluna da Esquerda - Imagem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/imagem-final-clinicflow.png"
                alt="ClinicFlow AI - Plataforma de automação para clínicas"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Coluna da Direita - Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                A Saúde da sua Clínica Começa na Recepção.
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                Transforme seu atendimento com a plataforma de automação que agenda, confirma e encanta pacientes 24/7.
              </p>

              <button className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                Ver Demonstração ao Vivo
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MISSÃO 2: Seção do Problema */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Sua equipe está presa em um ciclo de tarefas repetitivas?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Coluna 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Agenda Caótica</h3>
              <p className="text-gray-300 leading-relaxed">
                Buracos na agenda, agendamentos duplicados e tempo perdido tentando organizar horários.
              </p>
            </motion.div>

            {/* Coluna 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  <circle cx="12" cy="12" r="10" strokeDasharray="5,5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Prejuízo com Faltas</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada paciente que não aparece é tempo e dinheiro que sua clínica perde.
              </p>
            </motion.div>

            {/* Coluna 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8L18 20M6 20l12-12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Atendimento Limitado</h3>
              <p className="text-gray-300 leading-relaxed">
                Seu paciente só consegue agendar em horário comercial, e muitas vezes encontra o telefone ocupado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSÃO 3: Seção da Solução */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Coluna da Esquerda - GIF */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/gifs/produto-em-acao.gif"
                alt="ClinicFlow AI em ação"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Coluna da Direita - Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Apresentando ClinicFlow AI: A sua Recepção Autônoma.
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Nossa plataforma de IA assume o trabalho pesado da sua recepção. Ela conversa com pacientes, agenda consultas nos horários ideais, envia lembretes inteligentes e integra tudo ao seu sistema, liberando sua equipe para focar no que realmente importa: o cuidado humano.
              </p>

              <button className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                Quero Automatizar minha Clínica
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSÃO 4: Seção de Prova Social */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Clínicas que já se transformaram.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card de Depoimento 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <p className="text-xl italic leading-relaxed mb-6 text-gray-100">
                &ldquo;O ClinicFlow AI reduziu nossas faltas em 85% no primeiro mês. É como ter o melhor recepcionista do mundo, trabalhando 24 horas por dia.&rdquo;
              </p>

              <div className="flex items-center">
                <img
                  src="/images/avatar-dra-maria.jpg"
                  alt="Dra. Maria Silva"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-white">Dra. Maria Silva</div>
                  <div className="text-gray-300">Diretora Clínica Saúde Total</div>
                </div>
              </div>
            </motion.div>

            {/* Card de Depoimento 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <p className="text-xl italic leading-relaxed mb-6 text-gray-100">
                &ldquo;Nossa produtividade aumentou 60%. A equipe agora pode focar nos pacientes em vez de ficar no telefone agendando consultas.&rdquo;
              </p>

              <div className="flex items-center">
                <img
                  src="/images/avatar-dr-carlos.jpg"
                  alt="Dr. Carlos Mendes"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-white">Dr. Carlos Mendes</div>
                  <div className="text-gray-300">Proprietário Clínica VidaPlena</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSÃO 5: Seção de CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            Pronto para ter uma clínica mais lucrativa e eficiente?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed mb-12 text-blue-100"
          >
            Agende uma demonstração gratuita de 15 minutos e veja como o ClinicFlow AI pode transformar seu atendimento.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-blue-700 bg-white rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            Agendar Demonstração Gratuita
          </motion.button>
        </div>
      </section>
    </div>
  )
}