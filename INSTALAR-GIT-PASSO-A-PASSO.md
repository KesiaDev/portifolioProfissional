# 📥 Guia Completo: Instalar Git no Windows

## 🎯 Objetivo
Instalar o Git para poder usar comandos `git` no terminal.

---

## 📋 Passo a Passo Detalhado

### 1️⃣ **Baixar o Git**

1. Acesse: https://git-scm.com/download/win
2. Clique no botão grande "Download for Windows"
3. O download começará automaticamente
4. Aguarde o arquivo baixar (algo como `Git-2.xx.x-64-bit.exe`)

---

### 2️⃣ **Executar o Instalador**

1. Vá até a pasta de Downloads
2. Clique duas vezes no arquivo `Git-2.xx.x-64-bit.exe`
3. Se aparecer aviso de segurança, clique em "Executar" ou "Sim"

---

### 3️⃣ **Instalação - Tela por Tela**

#### **Tela 1: License Information**
- Clique em **"Next"**

#### **Tela 2: Select Destination Location**
- Deixe o padrão (`C:\Program Files\Git`)
- Clique em **"Next"**

#### **Tela 3: Select Components** ⚠️ IMPORTANTE
- Marque TODAS as opções:
  - ✅ Additional icons
  - ✅ On the Desktop
  - ✅ Windows Explorer integration
  - ✅ Git Bash Here
  - ✅ Git GUI Here
  - ✅ Associate .git* configuration files with the default text editor
  - ✅ Associate .sh files to be run with Bash
  - ✅ Use a TrueType font in all console windows
- Clique em **"Next"**

#### **Tela 4: Select Start Menu Folder**
- Deixe o padrão
- Clique em **"Next"**

#### **Tela 5: Choosing the default editor used by Git** ⚠️ IMPORTANTE
- Escolha uma das opções:
  - **"Use Visual Studio Code as Git's default editor"** (se tiver VS Code/Cursor)
  - Ou **"Use Notepad as Git's default editor"** (mais simples)
- Clique em **"Next"**

#### **Tela 6: Adjusting your PATH environment** ⚠️ MUITO IMPORTANTE
Esta é a tela que você está procurando! Pode aparecer com nomes diferentes:

**Opção A - Se aparecer estas opções:**
- ✅ **"Git from the command line and also from 3rd-party software"** ← ESCOLHA ESTA!
- ⬜ "Git from the command line only"
- ⬜ "Use Git and optional Unix tools from the Command Prompt"
- ⬜ "Use Git Bash only"

**Opção B - Se aparecer outras opções:**
- Procure por algo como: **"Add Git to PATH"** ou **"Add to PATH"**
- Marque essa opção

**Opção C - Se não aparecer nenhuma dessas:**
- Não se preocupe! Continue a instalação normalmente
- Depois vamos adicionar manualmente ao PATH

- Clique em **"Next"**

#### **Tela 7: Choosing HTTPS transport backend**
- Deixe marcado: **"Use the OpenSSL library"**
- Clique em **"Next"**

#### **Tela 8: Configuring the line ending conversions**
- Deixe marcado: **"Checkout Windows-style, commit Unix-style line endings"**
- Clique em **"Next"**

#### **Tela 9: Configuring the terminal emulator**
- Deixe marcado: **"Use MinTTY (the default terminal of MSYS2)"**
- Clique em **"Next"**

#### **Tela 10: Configuring extra options**
- Deixe marcado: **"Enable file system caching"**
- Pode deixar desmarcado: **"Enable Git Credential Manager"** (opcional)
- Clique em **"Next"**

#### **Tela 11: Configuring experimental options**
- Pode deixar tudo desmarcado
- Clique em **"Install"**

#### **Aguarde a instalação...**
- Uma barra de progresso aparecerá
- Aguarde até terminar (pode demorar alguns minutos)

#### **Tela Final: Completing the Git Setup Wizard**
- ✅ Marque: **"Launch Git Bash"** (opcional, para testar)
- Clique em **"Finish"**

---

## ✅ Passo 4: Verificar se Funcionou

### **Método 1: No Terminal do Cursor/VS Code**

1. **Feche completamente o Cursor/VS Code**
2. **Reabra o Cursor/VS Code**
3. **Abra um novo terminal** (Ctrl + ` ou Terminal > New Terminal)
4. **Digite:**
   ```bash
   git --version
   ```
5. **Se aparecer algo como `git version 2.xx.x`, está funcionando! ✅**

### **Método 2: No Git Bash (se marcou para abrir)**

1. Se o Git Bash abriu automaticamente
2. Digite: `git --version`
3. Se aparecer a versão, está funcionando!

---

## 🔧 Se Ainda Não Funcionar

### **Solução 1: Adicionar Manualmente ao PATH**

1. **Pressione `Win + R`**
2. **Digite:** `sysdm.cpl` e pressione Enter
3. **Vá na aba "Avançado"**
4. **Clique em "Variáveis de Ambiente"**
5. **Em "Variáveis do sistema", encontre "Path"**
6. **Clique em "Editar"**
7. **Clique em "Novo"**
8. **Adicione:** `C:\Program Files\Git\bin`
9. **Clique em "OK" em todas as janelas**
10. **Feche e reabra o terminal**

### **Solução 2: Usar Git Bash**

Se o Git Bash funcionar, você pode usá-lo em vez do PowerShell:

1. **No Cursor/VS Code:**
   - Clique no dropdown do terminal (onde diz "powershell")
   - Escolha "Git Bash"
   - Ou adicione como terminal padrão

---

## ⚙️ Passo 5: Configurar Git (Primeira Vez)

Depois que o Git estiver funcionando, configure seu nome e email:

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

## 📥 Passo 6: Agora Clonar o Projeto

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

## 🆘 Ainda com Problemas?

### **Teste no Git Bash:**
1. Abra o Git Bash (procure no menu Iniciar)
2. Digite: `git --version`
3. Se funcionar no Git Bash, o problema é só o PATH no PowerShell

### **Reinstalar:**
1. Desinstale o Git pelo Painel de Controle
2. Baixe novamente
3. Durante a instalação, marque TODAS as opções possíveis
4. Especialmente qualquer opção relacionada a "PATH" ou "command line"

---

## 📝 Resumo

1. ✅ Baixe: https://git-scm.com/download/win
2. ✅ Execute o instalador
3. ✅ Marque TODAS as opções na tela "Select Components"
4. ✅ Na tela "Adjusting PATH", escolha a opção que adiciona ao PATH
5. ✅ Complete a instalação
6. ✅ Feche e reabra o terminal
7. ✅ Teste: `git --version`
8. ✅ Configure: `git config --global user.name "Seu Nome"`

---

**Se não encontrar a opção específica, não se preocupe! Continue a instalação e depois adicionamos manualmente ao PATH. 🚀**


