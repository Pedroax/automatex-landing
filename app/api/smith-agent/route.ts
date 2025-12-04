import { NextRequest, NextResponse } from 'next/server'
import { runSmithAgent } from '@/lib/agents/smith-agent'
import { HumanMessage, AIMessage } from '@langchain/core/messages'

// Store para manter histórico de conversas em memória
// Em produção, você deve usar Redis, Upstash ou banco de dados
const conversationStore = new Map<string, any[]>()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, message, sessionId } = body

    // Validação
    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Mensagem é obrigatória' },
        { status: 400 }
      )
    }

    // ID da sessão (usa userId como fallback)
    const conversationId = sessionId || userId || `session_${Date.now()}`

    console.log('📨 Nova mensagem para Smith:', {
      conversationId,
      message,
      timestamp: new Date().toISOString()
    })

    // Recupera histórico de conversa (se existir)
    const conversationHistory = conversationStore.get(conversationId) || []

    // Executa o agente Smith
    const result = await runSmithAgent({
      message: message.trim(),
      sessionId: conversationId,
      conversationHistory
    })

    // Salva o histórico atualizado
    conversationStore.set(conversationId, result.conversationHistory)

    console.log('✅ Resposta do Smith gerada:', {
      conversationId,
      responseLength: result.response.length,
      historySize: result.conversationHistory.length
    })

    // Retorna resposta no formato compatível com o frontend
    return NextResponse.json({
      response: result.response,
      sessionId: conversationId,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Erro no Smith Agent:', error)

    // Log detalhado do erro
    if (error instanceof Error) {
      console.error('Detalhes do erro:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
    }

    // Resposta de fallback
    return NextResponse.json({
      response: 'Desculpe, estou com dificuldades técnicas no momento. Nossa equipe foi notificada e entrará em contato com você em breve.',
      error: true,
      timestamp: new Date().toISOString()
    }, { status: 200 }) // 200 para não quebrar a UX
  }
}

// Método GET para healthcheck
export async function GET() {
  return NextResponse.json({
    status: 'Smith Agent is online',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    model: 'gpt-4o-mini',
    agent: 'Smith - AutomateX Consultant'
  })
}
