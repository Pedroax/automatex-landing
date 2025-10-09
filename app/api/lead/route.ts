import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica dos campos obrigatórios
    const { name, email, phone, company } = body

    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, email, phone, company' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com:
    // - CRM (HubSpot, Pipedrive, etc.)
    // - Email marketing (MailChimp, SendGrid, etc.)
    // - Banco de dados
    // - Webhooks

    console.log('Novo lead recebido:', {
      name,
      email,
      phone,
      company,
      employees: body.employees,
      message: body.message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    })

    // Simular processamento (remover em produção)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Resposta de sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Lead registrado com sucesso!',
        leadId: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar lead:', error)

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Método GET para healthcheck
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      message: 'API de leads funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}