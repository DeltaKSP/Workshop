# 🏗️ Arquitetura do Sistema

> **Amazon Q Developer Chatbot Demo** - Documentação técnica da arquitetura

[![TDC 2025](https://img.shields.io/badge/TDC-2025-orange?style=flat-square&logo=amazon-aws)](https://github.com/seu-usuario/amazon-q-chatbot-demo)
[![Architecture](https://img.shields.io/badge/Architecture-Documented-blue?style=flat-square)](architecture.md)

---

## 📊 Diagrama de Arquitetura

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[index.html] --> B[style.css]
        A --> C[script.js]
        B --> D[Amazon Design System]
        C --> E[AmazonQDemo Class]
    end
    
    subgraph "Application Logic"
        E --> F[Message Handler]
        E --> G[Response Generator]
        E --> H[UI Controller]
        
        F --> I[Input Validation]
        F --> J[Message Processing]
        
        G --> K[AWS Services DB]
        G --> L[Q Capabilities DB]
        G --> M[General Responses]
        
        H --> N[DOM Manipulation]
        H --> O[Animation Controller]
    end
    
    subgraph "Data Layer"
        K --> K1[EC2, Lambda, S3...]
        L --> L1[Code Gen, Debug...]
        M --> M1[Default Responses]
    end
    
    subgraph "User Interface"
        N --> P[Chat Messages]
        N --> Q[Input Field]
        N --> R[Send Button]
        O --> S[Typing Animation]
        O --> T[Message Transitions]
    end
    
    style A fill:#FF9900
    style E fill:#232F3E,color:#fff
    style K fill:#E47911
    style P fill:#F7F9FA
```

---

## 🔄 Fluxo de Dados

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Interface
    participant AQ as AmazonQDemo
    participant RG as ResponseGenerator
    participant DB as Knowledge Base
    
    U->>UI: Digite mensagem
    UI->>AQ: sendMessage()
    AQ->>UI: addUserMessage()
    AQ->>UI: showTyping()
    AQ->>RG: generateResponse()
    RG->>DB: buscar conhecimento
    DB-->>RG: retorna dados
    RG-->>AQ: resposta formatada
    AQ->>UI: hideTyping()
    AQ->>UI: addBotMessage()
    UI-->>U: Exibe resposta
```

---

## 🧩 Componentes Principais

### 🎯 **AmazonQDemo Class**
```javascript
class AmazonQDemo {
  constructor() {
    this.messagesContainer = document.getElementById('messages');
    this.awsServices = { /* 20+ serviços */ };
  }
}
```
- 🎮 Controlador principal da aplicação
- 📊 Gerencia eventos e estado
- 🔧 Inicializa componentes

### 📚 **Knowledge Base**
| Categoria | Descrição | Quantidade |
|-----------|-----------|------------|
| `awsServices` | Serviços AWS (EC2, Lambda, S3...) | 20+ |
| `amazonQCapabilities` | Funcionalidades do Q Developer | 7 |
| `generalResponses` | Respostas contextuais | 5+ |

### 🎨 **UI Components**
- 💬 **Chat Container**: Área de mensagens com scroll automático
- ⌨️ **Input Field**: Campo de entrada com validação
- ⏳ **Typing Indicator**: Animação de "digitando..."
- 💭 **Message Bubbles**: Balões responsivos para usuário/bot

### 🧠 **Response Engine**
```mermaid
flowchart LR
    A[Input] --> B{AWS Service?}
    B -->|Yes| C[Service Info]
    B -->|No| D{Contextual?}
    D -->|Yes| E[Context Response]
    D -->|No| F[Default Response]
```
- 🔍 Pattern matching por keywords
- 🎯 Fallback para resposta padrão
- 📝 Formatação markdown → HTML

---

## 📁 Estrutura de Arquivos

```
Workshop/
├── 📄 index.html          # Estrutura HTML
├── 🎨 style.css           # Estilos Amazon
├── ⚡ script.js           # Lógica principal
├── 📊 architecture.md     # Este arquivo
├── 📦 package.json        # Configuração
├── 📖 README.md           # Documentação
└── 🧪 tests/
    ├── chatbot.test.js    # Testes automatizados
    └── test-runner.html   # Interface de testes
```

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 5 | Estrutura |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Estilos |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | Lógica |
| ![Mermaid](https://img.shields.io/badge/Mermaid-FF3670?style=flat-square&logo=mermaid&logoColor=white) | Latest | Diagramas |

---

## 🎯 Padrões de Design

### 🏛️ **Arquitetura MVC Simplificada**
- **Model**: Knowledge Base (dados)
- **View**: DOM Elements (interface)
- **Controller**: AmazonQDemo Class (lógica)

### 🔄 **Event-Driven Architecture**
- Eventos de click/keypress
- Callbacks assíncronos
- Animações baseadas em estado

### 📱 **Responsive Design**
- Mobile-first approach
- Flexbox layout
- Media queries para breakpoints

---

## 🔧 Como Contribuir

1. **Fork** este repositório
2. **Clone** localmente
3. **Modifique** a arquitetura conforme necessário
4. **Teste** com `npm test`
5. **Documente** mudanças neste arquivo
6. **Pull Request** com descrição detalhada

---

<div align="center">

**🇧🇷 Feito com ❤️ para o TDC São Paulo 2025**

[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![Amazon Q](https://img.shields.io/badge/Amazon%20Q-FF9900?style=for-the-badge&logo=amazon&logoColor=white)](https://aws.amazon.com/q/)

</div>