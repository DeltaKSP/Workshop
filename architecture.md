# 🏗️ Arquitetura do Sistema

## Diagrama de Arquitetura

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

## Fluxo de Dados

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

## Componentes Principais

### 1. **AmazonQDemo Class**
- Controlador principal da aplicação
- Gerencia eventos e estado

### 2. **Knowledge Base**
- `awsServices`: 20+ serviços AWS
- `amazonQCapabilities`: Funcionalidades do Q
- `generalResponses`: Respostas contextuais

### 3. **UI Components**
- Chat container com scroll
- Input field com validação
- Typing indicator animado
- Message bubbles responsivas

### 4. **Response Engine**
- Pattern matching por keywords
- Fallback para resposta padrão
- Formatação markdown para HTML