# 🧪 Cypress API Automation Project - Helpdesk API

Este repositório contém um framework robusto de automação de testes E2E utilizando Cypress para a aplicação **Helpdesk Page** seguindo boas práticas de organização, reutilização de código e fluxo colaborativo.

## 🔍 Objetivo

Automatizar os testes das funcionalidades da API do sistema Helpdesk API, garantindo que os principais fluxos estejam funcionando corretamente de forma consistente e contínua.

## 📂 Estrutura do Projeto

```bash

cypress/
│
├── e2e/                            # Testes automatizados
│   ├── tickets/                    # Testes de tickets
│   │   ├── buscarTicket.cy.js
│   │   ├── criarTicket.cy.js
│   │   ├── crudTickets.cy.js
│   │   ├── deletarTicket.cy.js
│   │   └── editarTicket.cy.js
│   │
│   └── usuarios/                   # Testes de usuários
│       ├── buscarUsuario.cy.js
│       ├── criarUsuario.cy.js
│       ├── crudUsuarios.cy.js
│       ├── deletarUsuario.cy.js
│       └── editarUsuario.cy.js
│
├── fixtures/                       # Dados mockados para os testes
│   ├── tickets.json
│   └── usuarios.json
│
├── schemas/                        # Schemas para validação de resposta da API
│   ├── ticket.schema.js
│   └── usuario.schema.js
│
├── support/                        # Suporte e base da automação
│   ├── api/                        # Camada de integração com a API
│   │   ├── ticketApi.js
│   │   └── userApi.js
│   ├── commands.js                 # Comandos customizados reutilizáveis
│   └── e2e.js                      # Arquivo carregado antes dos testes
│
├── results/                        # Relatórios, logs ou evidências de testes
│
├── cypress.config.js               # Configuração global do Cypress
├── package.json                    # Dependências e scripts do projeto
├── package-lock.json               # Lockfile do NPM
└── .gitignore                      # Arquivos e pastas ignorados pelo Git

```

## 🚀 Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E e API
- **Mochawesome** - Geração de relatórios em HTML
- **Faker.js** - Geração de dados aleatórios (opcional)
- **AJV** - Validação de schemas JSON

## ✅ Funcionalidades Testadas

- 📌 **Usuários**
  - Criar usuário com dados válidos
  - Validar erro ao criar usuário duplicado
  - Editar usuário existente
  - Buscar usuário por nome
  - Deletar usuário existente

- 🎫 **Tickets**
  - Criar ticket
  - Buscar todos os tickets
  - Editar ticket
  - Deletar ticket

- 📊 **Validações**
  - Status codes
  - Estrutura dos dados (com schemas)
  - Mensagens de erro
  - Campos obrigatórios

## 🧪 Executando os Testes

### 1. Clone o repositório:

```bash
git clone https://github.com/Felipe01Daniel/capgemini-challenge-automation-api.git
cd capgemini-challenge-automation-api
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Execute os testes:

* Usando a interface interativa do `ntl`:

```bash
npx ntl
```

Escolha a opção desejada no menu (testes com ou sem UI, relatórios, etc).

* Executando em modo headless (sem interface):

```bash
npx cypress run
```

* Executando com geração de relatório Mochawesome:

```bash
npm run test:report
```

O relatório será gerado em `cypress/reports/html/index.html`

### 4. Abrindo o Cypress:

```bash
npx cypress open
```

## 🧩 Comandos Customizados

Os comandos estão em cypress/support/commands/apiCommands.js e incluem:

* cy.criarUsuario()
* cy.buscarUsuarios()
* cy.editarUsuarioPorNome()
* cy.deletarUsuarioPorNome()
* cy.criarTicket()
* cy.editarTicketPorTitulo()
* cy.deletarTicketPorTitulo()

## 📑 Validação de Schemas
* Os schemas JSON estão em cypress/support/schemas/ e são utilizados para validar as respostas da API com Ajv.

## 🌱 Git Workflow Utilizado

---

### 🧠 Observações Finais

Este repositório faz parte de um **teste técnico** e foi desenvolvido com foco em boas práticas, estrutura reutilizável e cobertura abrangente.

> Repositório oficial da aplicação para testes: [https://github.com/automacaohml/helpdesk-page](https://github.com/automacaohml/helpdesk-api)

---

**Desenvolvido com dedicação**  Felipe Daniel!
