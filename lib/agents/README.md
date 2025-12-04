# Smith Agent - Agente Consultor AutomateX

## 📋 Visão Geral

O **Smith** é um agente de IA consultivo construído com LangChain e LangGraph que atua como consultor de soluções da AutomateX. Sua missão é diagnosticar o principal desafio de negócio do visitante e recomendar a solução mais adequada.

## 🧠 Arquitetura

### Tecnologias
- **LangChain**: Framework para construção de aplicações com LLMs
- **LangGraph**: Sistema de grafos para fluxos de conversa complexos
- **OpenAI GPT-4o-mini**: Modelo de linguagem (configurável)

### Estrutura
```
lib/agents/
├── smith-agent.ts          # Implementação principal do agente
└── README.md               # Esta documentação

app/api/
└── smith-agent/
    └── route.ts            # API Route Next.js

scripts/
└── test-smith-agent.ts     # Script de testes
```

## 🎯 Portfólio de Soluções

O Smith conhece profundamente 5 produtos da AutomateX:

1. **AURA Core** - Sistema de gestão para clínicas
2. **Alice IA** - Agente de atendimento e vendas WhatsApp
3. **AURA Connect** - App de pré-diagnóstico para pacientes
4. **RPA** - Automação de processos robóticos
5. **Agentes IA Customizados** - Projetos sob medida

## 🔄 Fluxo de Conversa

```
1. Abertura/Diagnóstico Inicial
   ↓
2. Investigação (Perguntas de aprofundamento)
   ↓
3. Recomendação (Apresentação da solução certa)
   ↓
4. Call to Action (Próximo passo)
```

## 🚀 Como Usar

### 1. Configuração

Adicione sua chave OpenAI no `.env.local`:

```env
OPENAI_API_KEY=sk-proj-...
```

### 2. Teste Local

```bash
# Instale dependências (se ainda não instalou)
npm install

# Execute o script de teste
npx ts-node --esm scripts/test-smith-agent.ts
```

### 3. Uso via API

```typescript
// Fazer requisição para a API
const response = await fetch('/api/smith-agent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'user_123',
    message: 'Preciso de ajuda com meu atendimento',
    sessionId: 'session_abc'
  })
})

const data = await response.json()
console.log(data.response) // Resposta do Smith
```

### 4. Uso Programático

```typescript
import { runSmithAgent } from '@/lib/agents/smith-agent'

const result = await runSmithAgent({
  message: 'Olá, preciso de ajuda',
  sessionId: 'unique-session-id',
  conversationHistory: [] // Opcional
})

console.log(result.response)
```

## 📊 Interface

### Input
```typescript
interface SmithAgentInput {
  message: string                    // Mensagem do usuário
  sessionId: string                  // ID único da sessão
  conversationHistory?: BaseMessage[] // Histórico opcional
}
```

### Output
```typescript
interface SmithAgentOutput {
  response: string                   // Resposta gerada
  conversationHistory: BaseMessage[] // Histórico atualizado
  sessionId: string                  // ID da sessão
}
```

## 🎨 Personalização

### Alterar o Modelo

Edite `lib/agents/smith-agent.ts`:

```typescript
const model = new ChatOpenAI({
  modelName: "gpt-4o",  // ou "gpt-3.5-turbo"
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
})
```

### Modificar o Prompt

O prompt completo está em `SMITH_SYSTEM_PROMPT` no arquivo `smith-agent.ts`.

### Ajustar Temperatura

- `0.0-0.3`: Mais determinístico e focado
- `0.4-0.7`: Balanceado (recomendado)
- `0.8-1.0`: Mais criativo e variado

## 🧪 Testes

### Cenários de Teste Inclusos

1. **Saudação inicial**
2. **Problema de atendimento WhatsApp** → Deve recomendar Alice IA
3. **Gestão de clínica** → Deve recomendar AURA Core
4. **Tarefas repetitivas** → Deve recomendar RPA

### Executar Testes

```bash
npx ts-node --esm scripts/test-smith-agent.ts
```

## 📝 Regras de Comportamento

1. ✅ **NUNCA** oferecer todos os produtos de uma vez
2. ✅ **SEMPRE** usar o nome do produto recomendado
3. ✅ **SER ADAPTÁVEL** a mudanças de contexto
4. ✅ **MANTER MEMÓRIA** da conversa
5. ✅ **SER CONCISO** (2-4 frases quando possível)
6. ✅ **TOM PROFISSIONAL** mas amigável

## 🔧 Manutenção

### Gestão de Memória

Atualmente, o histórico de conversas é mantido em **memória** (Map) na API route.

**Para produção**, considere usar:
- **Redis** (Upstash, Vercel KV)
- **Banco de dados** (PostgreSQL, MongoDB)
- **LangChain Memory** (ConversationBufferMemory)

### Monitoramento

Logs são gerados em:
- `/api/smith-agent` (API route)
- `lib/agents/smith-agent.ts` (execução do agente)

### Debugging

Para debug detalhado, ative logs do LangChain:

```typescript
process.env.LANGCHAIN_VERBOSE = 'true'
```

## 🚨 Troubleshooting

### Erro: "OpenAI API key not found"
- Verifique se `OPENAI_API_KEY` está no `.env.local`
- Reinicie o servidor Next.js

### Erro: "Module not found @langchain/..."
- Execute: `npm install langchain @langchain/core @langchain/openai @langchain/langgraph`

### Resposta lenta
- Considere usar `gpt-4o-mini` em vez de `gpt-4o`
- Ajuste timeout na requisição

## 📚 Referências

- [LangChain Docs](https://js.langchain.com/docs)
- [LangGraph Docs](https://langchain-ai.github.io/langgraphjs/)
- [OpenAI API](https://platform.openai.com/docs)

## 📄 Licença

Propriedade da AutomateX - Uso interno apenas.
