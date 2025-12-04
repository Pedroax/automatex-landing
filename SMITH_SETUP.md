# 🤖 Setup do Agente Smith - AutomateX

## ✅ Status: CRIADO (Não conectado ao frontend ainda)

O agente Smith foi criado com sucesso! Aqui está tudo que você precisa saber.

---

## 📂 Arquivos Criados

### 1. **Agente Principal**
- 📄 `lib/agents/smith-agent.ts` - Implementação do agente LangGraph
- 📘 `lib/agents/README.md` - Documentação completa

### 2. **API Route**
- 📄 `app/api/smith-agent/route.ts` - Endpoint Next.js para o agente

### 3. **Testes e Documentação**
- 📄 `scripts/test-smith-agent.ts` - Script de testes
- 📄 `SMITH_SETUP.md` - Este arquivo

### 4. **Configuração**
- ✏️ `.env.example` - Atualizado com OPENAI_API_KEY

---

## 🚀 Como Testar o Agente Agora

### Passo 1: Adicionar a chave OpenAI

Adicione no arquivo `.env.local`:

```env
OPENAI_API_KEY=sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

⚠️ **IMPORTANTE**: Não commite este arquivo! Ele já está no `.gitignore`.

### Passo 2: Testar via Script

```bash
# Instalar ts-node se não tiver
npm install -D ts-node

# Executar testes
npx ts-node --esm scripts/test-smith-agent.ts
```

Este script vai testar 4 cenários:
1. ✅ Saudação inicial
2. ✅ Problema de leads no WhatsApp (deve recomendar Alice IA)
3. ✅ Gestão de clínica (deve recomendar AURA Core)
4. ✅ Tarefas repetitivas (deve recomendar RPA)

### Passo 3: Testar via API (servidor rodando)

```bash
# Terminal 1 - Iniciar o servidor
npm run dev

# Terminal 2 - Testar a API
curl -X POST http://localhost:3000/api/smith-agent \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Olá, preciso de ajuda com atendimento",
    "userId": "test-user-123",
    "sessionId": "test-session-1"
  }'
```

### Passo 4: Verificar se está funcionando

Acesse no navegador:
```
http://localhost:3000/api/smith-agent
```

Você deve ver:
```json
{
  "status": "Smith Agent is online",
  "version": "1.0.0",
  "model": "gpt-4o-mini",
  "agent": "Smith - AutomateX Consultant"
}
```

---

## 🎯 Características do Agente Smith

### Personalidade
- 🎓 **Consultor especializado**, não vendedor
- 🔍 **Diagnostica problemas** antes de recomendar soluções
- 💬 **Comunicação clara e direta** (2-4 frases)
- 🧠 **Mantém contexto** da conversa

### Produtos que ele conhece
1. **AURA Core** - Gestão de clínicas
2. **Alice IA** - Atendimento WhatsApp 24/7
3. **AURA Connect** - App de pré-diagnóstico
4. **RPA** - Automação de processos
5. **Agentes IA Customizados** - Sob medida

### Fluxo de Conversa
```
1. Abertura (diagnóstico inicial)
   ↓
2. Investigação (perguntas)
   ↓
3. Recomendação (solução certa)
   ↓
4. Call to Action
```

---

## 🔧 Customizações Possíveis

### Trocar o Modelo LLM

Edite `lib/agents/smith-agent.ts` linha ~107:

```typescript
const model = new ChatOpenAI({
  modelName: "gpt-4o",        // Troque aqui
  temperature: 0.7,            // 0-1 (criatividade)
  openAIApiKey: process.env.OPENAI_API_KEY,
})
```

**Opções:**
- `gpt-4o-mini` - Rápido e barato (atual)
- `gpt-4o` - Mais inteligente, mais caro
- `gpt-3.5-turbo` - Mais rápido, menos preciso

### Ajustar o Prompt

Edite a constante `SMITH_SYSTEM_PROMPT` em `lib/agents/smith-agent.ts` (linha ~14).

### Modificar Temperatura

- **0.0-0.3**: Mais consistente e previsível
- **0.4-0.7**: Balanceado (recomendado) ✅
- **0.8-1.0**: Mais criativo e variado

---

## 📊 Formato de Comunicação

### Enviar para o Agente (POST)
```json
{
  "message": "Olá, preciso de ajuda",
  "userId": "user_123",
  "sessionId": "session_abc"
}
```

### Resposta do Agente
```json
{
  "response": "Olá! Sou o Smith, o agente de IA consultivo da AutomateX...",
  "sessionId": "session_abc",
  "timestamp": "2025-12-04T18:30:00.000Z"
}
```

---

## ⚠️ Próximos Passos (NÃO IMPLEMENTADOS AINDA)

Para conectar o Smith ao celular no site:

1. ✅ Agente criado (FEITO)
2. ✅ API route criada (FEITO)
3. ⏳ Modificar `AIInActionSection.tsx` (PENDENTE)
4. ⏳ Testar no site (PENDENTE)

**Você pediu para NÃO conectar ainda, apenas criar!** ✅

---

## 🐛 Troubleshooting

### "Cannot find module @langchain/..."
```bash
npm install langchain @langchain/core @langchain/openai @langchain/langgraph
```

### "OpenAI API key not found"
- Verifique se `.env.local` existe
- Verifique se a chave está correta
- Reinicie o servidor: `npm run dev`

### Resposta muito lenta
- Use `gpt-4o-mini` em vez de `gpt-4o`
- Aumente timeout da requisição
- Verifique sua conexão de internet

### Erro 500 na API
- Veja os logs no terminal do servidor
- Verifique se a chave OpenAI está válida
- Confirme que as dependências foram instaladas

---

## 📈 Melhorias Futuras (Opcionais)

### Persistência de Conversas
Atualmente em memória (Map). Para produção:
- Redis (Upstash)
- PostgreSQL
- MongoDB
- Vercel KV

### Analytics
- Rastrear tópicos mais perguntados
- Produtos mais recomendados
- Taxa de conversão por produto

### A/B Testing
- Testar diferentes prompts
- Testar diferentes modelos
- Otimizar temperatura

---

## 💰 Custos Estimados (OpenAI)

**Modelo atual: gpt-4o-mini**

- Input: $0.15 / 1M tokens
- Output: $0.60 / 1M tokens

**Exemplo:**
- 1.000 conversas/mês
- ~500 tokens/conversa
- **Custo: ~$0.50/mês** 💰

**Se usar gpt-4o:**
- 10x mais caro
- **Custo: ~$5/mês**

---

## 📞 Suporte

Qualquer dúvida sobre o agente:
1. Leia o README em `lib/agents/README.md`
2. Execute os testes: `npx ts-node --esm scripts/test-smith-agent.ts`
3. Veja os logs do console

---

## ✅ Checklist de Verificação

- [ ] `.env.local` criado com OPENAI_API_KEY
- [ ] Dependências instaladas (`npm install`)
- [ ] Script de teste executado com sucesso
- [ ] API endpoint respondendo (GET /api/smith-agent)
- [ ] Teste de conversa funcionando (POST /api/smith-agent)

---

**Status:** 🟢 Agente criado e pronto para testes!

**Próximo passo:** Adicionar chave OpenAI e testar! 🚀
