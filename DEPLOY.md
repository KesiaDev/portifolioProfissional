# Guia de Deploy

## Pré-requisitos

- Conta no Vercel (recomendado) ou outra plataforma de hospedagem
- Repositório Git (GitHub, GitLab ou Bitbucket)

## Deploy na Vercel (Recomendado)

### Opção 1: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New Project"
3. Importe seu repositório Git
4. A Vercel detectará automaticamente o Next.js
5. Configure as variáveis de ambiente (se necessário)
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## Configurações Pós-Deploy

### 1. Variáveis de Ambiente

Se você precisar de variáveis de ambiente (ex: API keys), configure-as no dashboard da Vercel:
- Settings → Environment Variables

### 2. Domínio Customizado

1. Vá em Settings → Domains
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções

### 3. Integração do Formulário de Contato

O formulário de contato precisa ser integrado com um serviço real. Opções:

#### Opção A: Resend (Recomendado)
```bash
npm install resend
```

Crie `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contato@dudarocha.com',
    to: 'contato@dudarocha.com',
    subject: `Nova mensagem: ${data.subject}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefone:</strong> ${data.phone || 'Não informado'}</p>
      <p><strong>Organização:</strong> ${data.organization || 'Não informado'}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${data.message}</p>
    `,
  });
  
  return NextResponse.json({ success: true });
}
```

#### Opção B: SendGrid
Similar ao Resend, mas usando SendGrid SDK.

#### Opção C: Formspree
Serviço externo que não requer backend.

## Otimizações de Performance

A plataforma já está otimizada, mas você pode:

1. **Imagens**: Use `next/image` para todas as imagens
2. **Fontes**: Já configuradas com `next/font`
3. **Analytics**: Adicione Google Analytics ou Vercel Analytics

## Monitoramento

- Use Vercel Analytics para monitorar performance
- Configure alertas para erros
- Monitore métricas de conversão

## Backup

- O código está no Git (backup automático)
- Considere fazer backup do banco de dados (se usar)
- Documente configurações importantes

## Atualizações

Para atualizar o site:
1. Faça alterações no código
2. Commit e push para o repositório
3. A Vercel fará deploy automático

Ou use:
```bash
vercel --prod
```

