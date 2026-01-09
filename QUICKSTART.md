# 🚀 Guia Rápido de Início

## Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:3000
```

## 📝 Antes de Fazer Deploy

### 1. Atualizar Informações de Contato

Edite os seguintes arquivos com suas informações reais:

- `components/footer.tsx` - Links de redes sociais
- `app/contato/page.tsx` - Email e telefone
- `app/metadata.ts` - URLs e informações do site

### 2. Personalizar Conteúdo

- **Portfólio**: Edite `app/portfolio/page.tsx` com seus projetos reais
- **Sobre**: Ajuste `app/sobre/page.tsx` com sua história
- **Atuação**: Personalize `app/atuacao/page.tsx` conforme necessário

### 3. Integrar Formulário de Contato

O formulário está pronto, mas precisa de integração real:

1. Escolha um serviço (Resend, SendGrid, etc.)
2. Configure a API key nas variáveis de ambiente
3. Atualize `app/api/contact/route.ts` com a lógica real

Veja `DEPLOY.md` para instruções detalhadas.

### 4. Adicionar Imagens (Opcional)

Se quiser adicionar imagens:
1. Crie a pasta `public/`
2. Adicione suas imagens
3. Use `<Image>` do Next.js nas páginas

## 🎨 Personalização Rápida

### Cores
Edite `app/globals.css` - variáveis CSS no `:root`

### Fontes
Já configuradas em `app/layout.tsx` - pode trocar se quiser

### Logo/Marca
Atualize o texto "Duda Rocha" em `components/navigation.tsx`

## ✅ Checklist Pré-Deploy

- [ ] Informações de contato atualizadas
- [ ] Projetos reais no portfólio
- [ ] Formulário de contato integrado
- [ ] Links de redes sociais atualizados
- [ ] Domínio configurado (se aplicável)
- [ ] SEO verificado
- [ ] Testes em diferentes dispositivos

## 🚢 Deploy

```bash
# Via Vercel CLI
npm i -g vercel
vercel --prod
```

Ou use o dashboard da Vercel (mais fácil).

Veja `DEPLOY.md` para instruções completas.

## 📚 Documentação

- `README.md` - Documentação geral
- `PROJETO.md` - Visão completa do projeto
- `DEPLOY.md` - Guia de deploy detalhado

---

**Pronto para começar!** 🎉


