# 💻 Como Trabalhar no Projeto em 2 Computadores

## ✅ Passo 1: No Computador Atual (Este)

### 1.1 - Salvar e Enviar Alterações para o GitHub

```bash
# Verificar o que foi alterado
git status

# Adicionar todas as alterações
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push origin main
```

**Pronto!** Todas as alterações estão salvas no GitHub.

---

## 📥 Passo 2: No Notebook (Novo Computador)

### 2.1 - Instalar o Git (se ainda não tiver)

- Windows: Baixe em https://git-scm.com/download/win
- Mac: Já vem instalado ou use Homebrew
- Linux: `sudo apt install git`

### 2.2 - Instalar o Cursor

- Baixe em: https://cursor.sh
- Instale normalmente

### 2.3 - Clonar o Repositório

1. Abra o terminal no Cursor (ou PowerShell/CMD)
2. Navegue até onde quer salvar o projeto:
   ```bash
   cd Desktop
   # ou
   cd Documents
   ```

3. Clone o repositório:
   ```bash
   git clone https://github.com/KesiaDev/portifolioProfissional.git
   ```

4. Entre na pasta do projeto:
   ```bash
   cd portifolioProfissional
   ```

### 2.4 - Instalar Dependências

```bash
npm install
```

### 2.5 - Executar o Projeto

```bash
npm run dev
```

**Pronto!** O projeto está rodando no notebook.

---

## 🔄 Passo 3: Trabalhar e Sincronizar

### Quando estiver trabalhando no Notebook:

1. **Fazer alterações no código**
2. **Salvar e enviar para o GitHub:**
   ```bash
   git add .
   git commit -m "Descrição do que foi feito"
   git push origin main
   ```

### Quando voltar para o Computador Original:

1. **Puxar as alterações do GitHub:**
   ```bash
   git pull origin main
   ```

2. **Instalar novas dependências (se houver):**
   ```bash
   npm install
   ```

3. **Continuar trabalhando normalmente**

---

## 📋 Fluxo de Trabalho Recomendado

### Ao Iniciar o Dia (em qualquer computador):

```bash
# 1. Puxar as últimas alterações
git pull origin main

# 2. Instalar dependências (se necessário)
npm install

# 3. Iniciar o servidor
npm run dev
```

### Ao Finalizar o Trabalho:

```bash
# 1. Verificar o que foi alterado
git status

# 2. Adicionar alterações
git add .

# 3. Fazer commit
git commit -m "Descrição clara do que foi feito"

# 4. Enviar para o GitHub
git push origin main
```

---

## 🔐 Configurar Git (Primeira Vez no Notebook)

Se for a primeira vez usando Git no notebook:

```bash
# Configurar seu nome
git config --global user.name "Seu Nome"

# Configurar seu email
git config --global user.email "seu@email.com"
```

---

## ⚠️ Dicas Importantes

1. **Sempre faça `git pull` antes de começar a trabalhar**
   - Evita conflitos
   - Garante que você tem a versão mais recente

2. **Faça commits frequentes**
   - Não deixe acumular muitas alterações
   - Commits pequenos são mais fáceis de gerenciar

3. **Use mensagens de commit descritivas**
   - Exemplo: "Adiciona página de contato"
   - Exemplo: "Corrige bug no formulário"
   - Exemplo: "Atualiza informações de contato"

4. **Nunca commite arquivos sensíveis**
   - Senhas, API keys, etc.
   - O `.gitignore` já está configurado para ignorar arquivos sensíveis

---

## 🚨 Resolver Conflitos (se acontecer)

Se você alterar o mesmo arquivo nos dois computadores:

1. **No computador atual:**
   ```bash
   git pull origin main
   ```

2. **Se houver conflitos, o Git vai avisar**
   - Abra o arquivo com conflito
   - Procure por `<<<<<<<`, `=======`, `>>>>>>>`
   - Resolva manualmente
   - Salve o arquivo

3. **Depois de resolver:**
   ```bash
   git add .
   git commit -m "Resolve conflitos"
   git push origin main
   ```

---

## 📝 Resumo Rápido

### No Computador Atual:
```bash
git add .
git commit -m "Mensagem"
git push origin main
```

### No Notebook:
```bash
git clone https://github.com/KesiaDev/portifolioProfissional.git
cd portifolioProfissional
npm install
npm run dev
```

### Para Sincronizar (qualquer computador):
```bash
git pull origin main  # Puxar alterações
git push origin main  # Enviar alterações
```

---

**Agora você pode trabalhar em qualquer lugar! 🚀**


