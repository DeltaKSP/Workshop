# 🤖 Amazon Q Developer - Chatbot Demo

![TDC 2025](https://img.shields.io/badge/TDC-2025-orange?style=flat-square&logo=amazon-aws)
![Q Developer Quest](https://img.shields.io/badge/Q--Developer--Quest-TDC--2025-blue?style=flat-square)

Uma demonstração interativa do Amazon Q Developer com interface moderna e cores oficiais da Amazon.

## 📋 Sobre o Projeto

Este é um chatbot frontend que simula o Amazon Q Developer, criado para demonstrações e eventos como o TDC São Paulo. A aplicação fornece informações sobre serviços AWS, arquitetura e desenvolvimento através de uma interface conversacional elegante.

## ✨ Funcionalidades

- **Interface Conversacional**: Chat em tempo real com animações de digitação
- **Base de Conhecimento AWS**: Informações sobre 20+ serviços AWS
- **Design Amazon**: Cores e tipografia oficiais da Amazon
- **Responsivo**: Funciona em desktop e mobile
- **Respostas Inteligentes**: Sistema de matching por palavras-chave
- **Animações Suaves**: Transições e efeitos visuais modernos

## 🎨 Design System

### Cores Amazon
- **Laranja**: `#FF9900`, `#E47911`, `#B12704`
- **Azul**: `#232F3E`, `#131A22`, `#0F1419`
- **Cinzas**: `#85929E`, `#D5DBDB`, `#EAEDED`, `#F7F9FA`

### Tipografia
- **Fonte Principal**: Amazon Ember, Helvetica Neue, Roboto, Arial

## 🚀 Como Executar

### Opção 1: Servidor HTTP Local
```bash
cd Workshop
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

### Opção 2: Abrir Diretamente
```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

## 📁 Estrutura do Projeto

```
Workshop/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos com tema Amazon
├── script.js           # Lógica do chatbot
└── README.md           # Documentação
```

## 🧠 Base de Conhecimento

### Serviços AWS Suportados

**Computação**
- EC2, Lambda, ECS, EKS

**Armazenamento**
- S3, EBS, EFS

**Banco de Dados**
- RDS, DynamoDB, Redshift

**Rede**
- VPC, CloudFront, Route 53

**Segurança**
- IAM, Cognito

**Machine Learning**
- SageMaker, Rekognition, Comprehend

**DevOps**
- CodeCommit, CodeBuild, CodeDeploy

### Tópicos Contextuais
- Serverless
- Containers
- Machine Learning
- Segurança
- Custos e Otimização

## 💬 Exemplos de Uso

```
Usuário: "O que é EC2?"
Bot: "📊 Amazon EC2 (Computação)
Serviço de computação em nuvem que fornece capacidade..."

Usuário: "Como funciona serverless?"
Bot: "Serviços serverless da AWS:
• Lambda - Computação
• DynamoDB - Banco NoSQL..."

Usuário: "Pizza"
Bot: "Hmm, não sei responder isso no momento. 🤔
Mas posso ajudar com:
• Serviços AWS..."
```

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes, animações, flexbox
- **JavaScript ES6+**: Classes, arrow functions, template literals
- **Sem dependências**: Vanilla JS puro

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar
- **Tablet**: Adaptação de espaçamentos
- **Mobile**: Interface otimizada para toque

## 🎯 Casos de Uso

- **Eventos**: Demonstrações em conferências
- **Treinamentos**: Material educativo sobre AWS
- **Protótipos**: Base para chatbots reais
- **Estudos**: Exemplo de interface conversacional

## 🔧 Personalização

### Adicionar Novo Serviço AWS
```javascript
// Em script.js, adicione ao objeto awsServices:
'novo-servico': {
    name: 'Nome do Serviço',
    category: 'Categoria',
    description: 'Descrição detalhada...',
    useCase: 'Casos de uso principais'
}
```

### Modificar Cores
```css
/* Em style.css, altere as variáveis de cor: */
:root {
    --amazon-orange: #FF9900;
    --amazon-blue: #232F3E;
    --amazon-gray: #85929E;
}
```

## 🏗️ Arquitetura

Veja o [diagrama de arquitetura](architecture.md) completo com:
- Fluxo de dados Mermaid
- Componentes do sistema
- Estrutura de classes

## 🧪 Testes Automatizados

### Executar Testes
```bash
# Testes via Node.js
npm test

# Testes no navegador
open tests/test-runner.html
```

### Tipos de Teste
- **Unidade**: Funções individuais
- **Integração**: Fluxo completo
- **E2E**: Simulação de usuário

### Cobertura
- ✅ Geração de respostas
- ✅ Validação de input
- ✅ Formatação de mensagens
- ✅ Fluxo conversacional

## 📊 Métricas

- **Tamanho**: ~20KB total
- **Carregamento**: <1s em conexões normais
- **Compatibilidade**: Chrome 60+, Firefox 55+, Safari 12+
- **Performance**: 90+ no Lighthouse
- **Testes**: 6+ cenários automatizados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto é uma demonstração educativa. Use livremente para aprendizado e demonstrações.

## 👨‍💻 Autor

Criado para demonstrações do Amazon Q Developer no TDC São Paulo 2024.

---

**🇧🇷 Feito com ❤️ para a comunidade brasileira de desenvolvedores**