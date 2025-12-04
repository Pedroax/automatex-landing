/**
 * Script de teste para o agente Smith
 *
 * Para executar:
 * 1. Adicione sua OPENAI_API_KEY no .env.local
 * 2. Execute: npx ts-node --esm scripts/test-smith-agent.ts
 */

import { runSmithAgent } from '../lib/agents/smith-agent'

async function testSmithAgent() {
  console.log('🧪 Iniciando teste do agente Smith...\n')

  // Cenário de teste 1: Primeira interação
  console.log('📝 Teste 1: Primeira mensagem do usuário')
  console.log('Usuário: "Olá"\n')

  try {
    const result1 = await runSmithAgent({
      message: 'Olá',
      sessionId: 'test-session-1'
    })

    console.log('✅ Resposta do Smith:')
    console.log(result1.response)
    console.log('\n' + '='.repeat(80) + '\n')

    // Cenário de teste 2: Usuário menciona problema de atendimento
    console.log('📝 Teste 2: Usuário descreve problema')
    console.log('Usuário: "Estou perdendo muitos leads no WhatsApp, minha equipe não consegue responder todos"\n')

    const result2 = await runSmithAgent({
      message: 'Estou perdendo muitos leads no WhatsApp, minha equipe não consegue responder todos',
      sessionId: 'test-session-2',
      conversationHistory: result1.conversationHistory
    })

    console.log('✅ Resposta do Smith:')
    console.log(result2.response)
    console.log('\n' + '='.repeat(80) + '\n')

    // Cenário de teste 3: Usuário fala sobre gestão de clínica
    console.log('📝 Teste 3: Problema de gestão')
    console.log('Usuário: "Tenho uma clínica de estética e não consigo ter visão clara do meu faturamento e agenda"\n')

    const result3 = await runSmithAgent({
      message: 'Tenho uma clínica de estética e não consigo ter visão clara do meu faturamento e agenda',
      sessionId: 'test-session-3'
    })

    console.log('✅ Resposta do Smith:')
    console.log(result3.response)
    console.log('\n' + '='.repeat(80) + '\n')

    // Cenário de teste 4: Tarefas repetitivas
    console.log('📝 Teste 4: Automação de processos')
    console.log('Usuário: "Minha equipe perde muito tempo copiando dados de planilhas para o sistema"\n')

    const result4 = await runSmithAgent({
      message: 'Minha equipe perde muito tempo copiando dados de planilhas para o sistema',
      sessionId: 'test-session-4'
    })

    console.log('✅ Resposta do Smith:')
    console.log(result4.response)
    console.log('\n' + '='.repeat(80) + '\n')

    console.log('🎉 Todos os testes concluídos com sucesso!')

  } catch (error) {
    console.error('❌ Erro durante os testes:', error)
    if (error instanceof Error) {
      console.error('Detalhes:', error.message)
      console.error('Stack:', error.stack)
    }
  }
}

// Executa os testes
testSmithAgent()
