import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, timestamp, sessionId } = body

    console.log('📨 Mensagem recebida:', { message, timestamp, sessionId })

    // URL do webhook do n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/chat'
    console.log('🎯 Enviando para webhook:', n8nWebhookUrl)

    const payload = {
      message,
      timestamp,
      sessionId,
      source: 'automatex_website'
    }
    console.log('📤 Payload enviado:', payload)

    // Enviar mensagem para o webhook do n8n
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    console.log('📊 Status da resposta n8n:', n8nResponse.status)
    console.log('📋 Headers da resposta:', Object.fromEntries(n8nResponse.headers.entries()))

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text()
      console.error('❌ Erro do webhook n8n:', errorText)
      throw new Error(`N8N webhook error: ${n8nResponse.status} - ${errorText}`)
    }

    const responseText = await n8nResponse.text()
    console.log('📥 Resposta bruta do n8n:', responseText)

    let aiResponse = responseText

    // Tentar fazer parse como JSON primeiro
    try {
      const n8nData = JSON.parse(responseText)
      console.log('✅ Resposta JSON do n8n:', n8nData)
      aiResponse = n8nData.response || n8nData.message || n8nData.text || responseText
    } catch (parseError) {
      console.log('📝 Resposta em texto puro do n8n (não é JSON):', responseText)
      // Se não for JSON, usar o texto diretamente
      aiResponse = responseText
    }

    // Retornar a resposta do agente de IA
    const response = {
      response: aiResponse || 'Desculpe, não consegui processar sua mensagem.',
      sessionId: sessionId,
      timestamp: new Date().toISOString()
    }

    console.log('🚀 Resposta final:', response)
    return NextResponse.json(response)

  } catch (error) {
    console.error('💥 Chat API Error:', error)

    // Resposta de fallback caso o webhook não esteja disponível
    return NextResponse.json({
      response: 'Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.',
      error: true,
      timestamp: new Date().toISOString()
    }, { status: 200 }) // Retornamos 200 para não quebrar a UX
  }
}

// Método GET opcional para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json({
    status: 'Chat API is running',
    timestamp: new Date().toISOString()
  })
}