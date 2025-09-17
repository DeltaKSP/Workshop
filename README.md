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
├── 📄 index.html          # Estrutura HTML
├── 🎨 style.css           # Estilos Amazon
├── ⚡ script.js           # Lógica do chatbot
├── 🚀 deploy.sh           # Script de deploy
├── 📊 architecture.md     # Arquitetura
├── 📦 package.json        # Configuração
├── 📖 README.md           # Documentação
├── 🧪 tests/              # Testes automatizados
├── 🔌 mcp-server/         # Servidor MCP
├── 🏗️ infrastructure/      # Terraform IaC
└── ⚙️ .amazonq/            # Config Amazon Q
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

## 🔌 Servidor MCP

### Configuração
```bash
# Instalar dependências
cd mcp-server
pip install -r requirements.txt

# Executar servidor
python3 server.py
```

### Funcionalidades MCP
- **get_aws_service**: Informações sobre serviços AWS
- **Integração**: Amazon Q Developer
- **Protocol**: Model Context Protocol

## ⚙️ Amazon Q Developer

### Configuração do Repositório
- **Config**: `.amazonq/config.json`
- **Regras**: `.amazonq/rules/aws-guidelines.md`
- **MCP Server**: Integrado automaticamente
- **Features**: Code generation, review, testing

## 🏗️ Infrastructure as Code

### Deploy na AWS
```bash
# Deploy completo
./deploy.sh

# Ou manual
cd infrastructure
terraform init
terraform apply
```

### Recursos AWS
- **S3**: Hospedagem estática
- **CloudFront**: CDN global
- **Lambda**: API backend (opcional)
- **IAM**: Roles e políticas

## 📊 Métricas

- **Tamanho**: ~25KB total
- **Carregamento**: <1s em conexões normais
- **Compatibilidade**: Chrome 60+, Firefox 55+, Safari 12+
- **Performance**: 90+ no Lighthouse
- **Testes**: 6+ cenários automatizados
- **Deploy**: Automatizado com Terraform

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto é uma demonstração educativa. Use livremente para aprendizado e demonstrações.

## 👨‍💻 Autor

Criado para demonstrações do Amazon Q Developer no TDC São Paulo 2025.


<img width="758" height="856" alt="image" src="https://github.com/user-attachments/assets/1e22f076-fc66-4a7d-be56-0fc705772170" />
<img width="762" height="866" alt="image" src="https://github.com/user-attachments/assets/cc47512e-eba8-4ac0-ae7a-1f5335771a64" />
<img width="741" height="851" alt="image" src="https://github.com/user-attachments/assets/b7902076-c6f3-419b-b887-bfde2da64168" />

---

**🇧🇷 Feito com ❤️ para a comunidade brasileira de desenvolvedores**
