# 🔧 Como Instalar Git no Notebook

## ⚠️ Erro: "git não é reconhecido"

Isso significa que o Git não está instalado no seu notebook. Siga os passos abaixo:

---

## 📥 Passo 1: Baixar o Git

1. **Acesse o site oficial:**
   - Vá para: https://git-scm.com/download/win
   - Ou pesquise "Git for Windows" no Google

2. **Baixe o instalador:**
   - Clique em "Download for Windows"
   - O arquivo será algo como: `Git-2.xx.x-64-bit.exe`

---

## 🚀 Passo 2: Instalar o Git

1. **Execute o instalador baixado**

2. **Durante a instalação:**
   - Clique em "Next" nas telas iniciais
   - **IMPORTANTE:** Na tela "Adjusting your PATH environment":
     - Selecione: **"Git from the command line and also from 3rd-party software"**
     - Isso adiciona o Git ao PATH automaticamente
   - Continue clicando "Next"
   - Na tela "Choosing the default editor":
     - Pode deixar "Use Visual Studio Code as Git's default editor" (se tiver VS Code)
     - Ou escolha outro editor
   - Continue até "Install"
   - Aguarde a instalação terminar

3. **Finalize a instalação:**
   - Clique em "Finish"

---

## ✅ Passo 3: Verificar se Funcionou

1. **Feche e reabra o terminal do Cursor/VS Code**
   - Isso é importante para carregar o PATH atualizado

2. **Teste o Git:**
   ```bash
   git --version
   ```

3. **Se aparecer algo como `git version 2.xx.x`, está funcionando! ✅**

---

## 🔄 Passo 4: Configurar Git (Primeira Vez)

Configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

**Exemplo:**
```bash
git config --global user.name "Duda Rocha"
git config --global user.email "duda@exemplo.com"
```

---

## 📥 Passo 5: Agora Clonar o Projeto

Depois de instalar o Git, você pode clonar:

```bash
# Navegue até onde quer salvar
cd Desktop

# Clone o repositório
git clone https://github.com/KesiaDev/portifolioProfissional.git

# Entre na pasta
cd portifolioProfissional

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🆘 Problemas Comuns

### Git ainda não funciona após instalar?

1. **Feche completamente o Cursor/VS Code**
2. **Reabra o Cursor/VS Code**
3. **Abra um novo terminal**
4. **Tente novamente:** `git --version`

### Ainda não funciona?

1. **Verifique se o Git foi instalado:**
   - Vá em: `C:\Program Files\Git\bin\`
   - Se a pasta existir, o Git está instalado

2. **Adicione manualmente ao PATH:**
   - Pressione `Win + R`
   - Digite: `sysdm.cpl` e pressione Enter
   - Vá em "Avançado" > "Variáveis de Ambiente"
   - Em "Variáveis do sistema", encontre "Path"
   - Clique em "Editar"
   - Clique em "Novo"
   - Adicione: `C:\Program Files\Git\bin`
   - Clique em "OK" em todas as janelas
   - **Feche e reabra o terminal**

---

## 📝 Resumo Rápido

1. ✅ Baixe Git: https://git-scm.com/download/win
2. ✅ Instale (escolha "Git from command line")
3. ✅ Feche e reabra o terminal
4. ✅ Teste: `git --version`
5. ✅ Configure: `git config --global user.name "Seu Nome"`
6. ✅ Clone: `git clone https://github.com/KesiaDev/portifolioProfissional.git`

---

**Depois de instalar, volte aqui e continue! 🚀**


