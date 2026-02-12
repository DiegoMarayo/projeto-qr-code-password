# 🧰 CLI Tools — QRCode & Password Generator

Uma aplicação de linha de comando (CLI) desenvolvida em **Node.js** que oferece ferramentas utilitárias diretamente no terminal, como geração de **QR Code** e **senhas seguras**.

O objetivo do projeto é praticar conceitos fundamentais de backend com Node.js, incluindo fluxo assíncrono, modularização, leitura de variáveis de ambiente e uso de bibliotecas externas.

---

## ✨ Funcionalidades

### 📌 Gerador de QR Code

* Gera QR Codes diretamente no terminal
* Aceita qualquer URL ou texto
* Permite escolher tamanho do QR Code

### 🔐 Gerador de Senha Segura

* Gera senhas aleatórias
* Configurável por variáveis de ambiente
* Utiliza geração criptograficamente segura (`node:crypto`)
* Suporte a:

  * Letras maiúsculas
  * Letras minúsculas
  * Números
  * Caracteres especiais

---

## 🧠 Conceitos aplicados

Este projeto foi construído com foco educacional e utiliza:

* Node.js (ESModules)
* Async/Await
* Promises
* Tratamento de erros
* CLI interativa
* Variáveis de ambiente (.env)
* Módulo nativo `crypto`
* Separação de responsabilidades (controller/service)
* Organização modular de arquivos

---

## 🖥️ Demonstração

Ao executar, o programa apresenta um menu interativo:

Escolha a ferramenta:
1 - QRCODE
2 - PASSWORD
3 - EXIT

---

## 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/DiegoMarayo/projeto-qr-code-password.git
```

```bash
cd SEU-REPOSITORIO
```

---

### 2️⃣ Instalar as dependências

```bash
npm install
```

---

### 3️⃣ Criar o arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

---

### 4️⃣ Executar a aplicação

```bash
node src/index.js
```

---

## ⚙️ Configurações

| Variável           | Descrição                    |
| ------------------ | ---------------------------- |
| PASSWORD_LENGTH    | Tamanho da senha gerada      |
| UPPERCASE_LETTERS  | Incluir letras maiúsculas    |
| LOWERCASE_LETTERS  | Incluir letras minúsculas    |
| NUMBERS            | Incluir números              |
| SPECIAL_CHARACTERS | Incluir caracteres especiais |

---

## 📦 Dependências

* chalk
* prompt
* qrcode-terminal
* dotenv

---

## 📁 Estrutura do projeto

```
src/
 ├── index.js
 ├── prompt-schema/
 ├── services/
 │    
```
