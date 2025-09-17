class AmazonQDemo {
    constructor() {
        this.messagesContainer = document.getElementById('messages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        
        this.awsServices = {
            // Computação
            'ec2': {
                name: 'Amazon EC2',
                category: 'Computação',
                description: 'Serviço de computação em nuvem que fornece capacidade de computação redimensionável. Permite criar e gerenciar máquinas virtuais (instâncias) com diferentes configurações de CPU, memória e armazenamento.',
                useCase: 'Hospedagem de aplicações, servidores web, processamento de dados'
            },
            'lambda': {
                name: 'AWS Lambda',
                category: 'Computação Serverless',
                description: 'Serviço de computação serverless que executa código sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação consumido.',
                useCase: 'APIs, processamento de eventos, automação, microserviços'
            },
            'ecs': {
                name: 'Amazon ECS',
                category: 'Containers',
                description: 'Serviço de orquestração de containers altamente escalável que suporta Docker containers.',
                useCase: 'Aplicações containerizadas, microserviços'
            },
            'eks': {
                name: 'Amazon EKS',
                category: 'Kubernetes',
                description: 'Serviço gerenciado do Kubernetes que facilita a execução do Kubernetes na AWS.',
                useCase: 'Orquestração de containers com Kubernetes'
            },
            
            // Armazenamento
            's3': {
                name: 'Amazon S3',
                category: 'Armazenamento de Objetos',
                description: 'Serviço de armazenamento de objetos altamente escalável, durável e seguro. Oferece 99.999999999% (11 9s) de durabilidade.',
                useCase: 'Backup, arquivos estáticos, data lakes, hospedagem de sites'
            },
            'ebs': {
                name: 'Amazon EBS',
                category: 'Armazenamento em Bloco',
                description: 'Armazenamento em bloco de alta performance para uso com Amazon EC2.',
                useCase: 'Discos para instâncias EC2, bancos de dados'
            },
            'efs': {
                name: 'Amazon EFS',
                category: 'Sistema de Arquivos',
                description: 'Sistema de arquivos totalmente gerenciado para uso com serviços AWS Cloud e recursos on-premises.',
                useCase: 'Compartilhamento de arquivos entre múltiplas instâncias'
            },
            
            // Banco de Dados
            'rds': {
                name: 'Amazon RDS',
                category: 'Banco de Dados Relacional',
                description: 'Serviço de banco de dados relacional gerenciado que suporta MySQL, PostgreSQL, Oracle, SQL Server e MariaDB.',
                useCase: 'Aplicações que precisam de bancos relacionais'
            },
            'dynamodb': {
                name: 'Amazon DynamoDB',
                category: 'Banco NoSQL',
                description: 'Banco de dados NoSQL totalmente gerenciado com performance de milissegundos em qualquer escala.',
                useCase: 'Aplicações web, jogos, IoT, aplicações móveis'
            },
            'redshift': {
                name: 'Amazon Redshift',
                category: 'Data Warehouse',
                description: 'Serviço de data warehouse totalmente gerenciado e petabyte-scale.',
                useCase: 'Analytics, business intelligence, big data'
            },
            
            // Rede e Entrega de Conteúdo
            'vpc': {
                name: 'Amazon VPC',
                category: 'Rede Virtual',
                description: 'Rede virtual logicamente isolada na nuvem AWS onde você pode executar recursos AWS.',
                useCase: 'Isolamento de rede, segurança, conectividade híbrida'
            },
            'cloudfront': {
                name: 'Amazon CloudFront',
                category: 'CDN',
                description: 'Rede de entrega de conteúdo (CDN) global que entrega dados, vídeos, aplicações e APIs com baixa latência.',
                useCase: 'Aceleração de sites, streaming de vídeo, APIs globais'
            },
            'route53': {
                name: 'Amazon Route 53',
                category: 'DNS',
                description: 'Serviço de DNS altamente disponível e escalável.',
                useCase: 'Gerenciamento de domínios, roteamento de tráfego'
            },
            
            // Segurança e Identidade
            'iam': {
                name: 'AWS IAM',
                category: 'Identidade e Acesso',
                description: 'Serviço que permite gerenciar com segurança o acesso aos serviços e recursos da AWS.',
                useCase: 'Controle de acesso, autenticação, autorização'
            },
            'cognito': {
                name: 'Amazon Cognito',
                category: 'Autenticação de Usuários',
                description: 'Serviço que permite adicionar cadastro, login e controle de acesso às suas aplicações.',
                useCase: 'Autenticação de usuários em apps web e mobile'
            },
            
            // Analytics e Machine Learning
            'sagemaker': {
                name: 'Amazon SageMaker',
                category: 'Machine Learning',
                description: 'Serviço totalmente gerenciado para construir, treinar e implantar modelos de machine learning.',
                useCase: 'Desenvolvimento de modelos ML, AI, análise preditiva'
            },
            'rekognition': {
                name: 'Amazon Rekognition',
                category: 'Visão Computacional',
                description: 'Serviço que adiciona análise de imagem e vídeo às suas aplicações usando deep learning.',
                useCase: 'Reconhecimento facial, análise de conteúdo, moderação'
            },
            'comprehend': {
                name: 'Amazon Comprehend',
                category: 'Processamento de Linguagem Natural',
                description: 'Serviço de processamento de linguagem natural que usa machine learning para encontrar insights em textos.',
                useCase: 'Análise de sentimentos, extração de entidades, classificação'
            },
            
            // Ferramentas de Desenvolvimento
            'codecommit': {
                name: 'AWS CodeCommit',
                category: 'Controle de Versão',
                description: 'Serviço de controle de versão totalmente gerenciado que hospeda repositórios Git privados.',
                useCase: 'Repositórios de código, colaboração em equipe'
            },
            'codebuild': {
                name: 'AWS CodeBuild',
                category: 'Build e CI/CD',
                description: 'Serviço de build totalmente gerenciado que compila código fonte, executa testes e produz pacotes de software.',
                useCase: 'Integração contínua, builds automatizados'
            },
            'codedeploy': {
                name: 'AWS CodeDeploy',
                category: 'Deploy',
                description: 'Serviço que automatiza deployments de aplicações para instâncias EC2, Lambda e on-premises.',
                useCase: 'Deploy automatizado, entrega contínua'
            }
        };
        
        this.amazonQCapabilities = {
            'amazon q': 'Amazon Q é um assistente de IA generativa para desenvolvedores e profissionais de TI. Posso ajudar com código, arquitetura AWS, troubleshooting, otimização e muito mais!',
            'q developer': 'Amazon Q Developer ajuda desenvolvedores a escrever, debugar e otimizar código. Oferece sugestões de código, explicações e pode gerar código completo.',
            'q business': 'Amazon Q Business é um assistente de IA para empresas que pode responder perguntas sobre dados internos, políticas e processos da empresa.',
            'code generation': 'Posso gerar código em várias linguagens: Python, JavaScript, Java, C#, Go, Rust e muito mais. Basta me dizer o que você precisa!',
            'debugging': 'Posso ajudar a identificar e corrigir bugs no seu código, explicar erros e sugerir melhorias.',
            'architecture': 'Posso ajudar a projetar arquiteturas AWS, sugerir serviços adequados e melhores práticas.',
            'optimization': 'Posso analisar seu código e arquitetura para sugerir otimizações de performance e custos.'
        };
        
        this.generalResponses = {
            'aws': 'A AWS oferece mais de 200 serviços de nuvem organizados em categorias como Computação, Armazenamento, Banco de Dados, Rede, Segurança, Analytics e ML. Qual categoria te interessa?',
            'tdc': 'Que legal que você está no TDC São Paulo! 🇧🇷 Este é um dos maiores eventos de tecnologia do Brasil. Como posso ajudar você a aproveitar melhor a AWS?',
            'preço': 'Os preços da AWS variam por serviço e região. Recomendo usar a Calculadora de Preços AWS (calculator.aws) para estimativas precisas.',
            'free tier': 'AWS Free Tier oferece acesso gratuito a muitos serviços por 12 meses, incluindo EC2, S3, RDS e Lambda com limites específicos.',
            'default': 'Hmm, não sei responder isso no momento. 🤔\n\nMas posso ajudar com:\n• **Serviços AWS** (EC2, Lambda, S3, RDS...)\n• **Arquitetura e melhores práticas**\n• **Desenvolvimento e código**\n• **Custos e otimização**\n\nTente perguntar sobre algum desses tópicos!'
        };
        
        this.init();
    }
    
    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Mensagem de boas-vindas
        setTimeout(() => {
            this.addBotMessage('Olá! Sou o **Amazon Q** 🤖\n\nPosso ajudar você com:\n• **Serviços AWS** - Explico qualquer serviço\n• **Arquitetura** - Sugestões e melhores práticas\n• **Código** - Geração e debugging\n• **Custos** - Otimização e planejamento\n\nPergunte sobre **EC2**, **Lambda**, **S3**, **ML**, **containers** ou qualquer coisa AWS! 🚀');
        }, 1000);
    }
    
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addUserMessage(message);
        this.messageInput.value = '';
        
        // Simula typing
        this.showTyping();
        
        setTimeout(() => {
            this.hideTyping();
            this.addBotMessage(this.generateResponse(message));
        }, 1500);
    }
    
    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = message;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        
        // Converte markdown simples para HTML
        const formattedMessage = message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/•/g, '&bull;')
            .replace(/\n/g, '<br>');
        
        messageDiv.innerHTML = formattedMessage;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            Amazon Q está digitando...
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTyping() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Verifica serviços AWS específicos
        for (const [key, service] of Object.entries(this.awsServices)) {
            if (lowerMessage.includes(key)) {
                return `📊 **${service.name}** (${service.category})\n\n${service.description}\n\n🎯 **Casos de uso:** ${service.useCase}`;
            }
        }
        
        // Verifica capacidades do Amazon Q
        for (const [key, capability] of Object.entries(this.amazonQCapabilities)) {
            if (lowerMessage.includes(key)) {
                return capability;
            }
        }
        
        // Verifica respostas gerais
        for (const [key, response] of Object.entries(this.generalResponses)) {
            if (key !== 'default' && lowerMessage.includes(key)) {
                return response;
            }
        }
        
        // Respostas contextuais baseadas em palavras-chave
        if (lowerMessage.includes('banco') || lowerMessage.includes('database')) {
            return 'Para bancos de dados, a AWS oferece:\n• **RDS** - Bancos relacionais gerenciados\n• **DynamoDB** - NoSQL serverless\n• **Redshift** - Data warehouse\n• **DocumentDB** - Compatível com MongoDB\n\nQual tipo de banco você precisa?';
        }
        
        if (lowerMessage.includes('serverless')) {
            return 'Serviços serverless da AWS:\n• **Lambda** - Computação\n• **DynamoDB** - Banco NoSQL\n• **S3** - Armazenamento\n• **API Gateway** - APIs\n• **Step Functions** - Orquestração\n\nQuer saber mais sobre algum?';
        }
        
        if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml') || lowerMessage.includes('ia')) {
            return 'Serviços de ML/IA da AWS:\n• **SageMaker** - Plataforma completa de ML\n• **Rekognition** - Visão computacional\n• **Comprehend** - Processamento de linguagem\n• **Textract** - Extração de texto\n• **Bedrock** - IA generativa\n\nQual área de IA te interessa?';
        }
        
        if (lowerMessage.includes('container') || lowerMessage.includes('docker') || lowerMessage.includes('kubernetes')) {
            return 'Serviços de containers da AWS:\n• **ECS** - Orquestração de containers\n• **EKS** - Kubernetes gerenciado\n• **Fargate** - Containers serverless\n• **ECR** - Registro de containers\n\nPrecisa de ajuda com qual?';
        }
        
        if (lowerMessage.includes('segurança') || lowerMessage.includes('security')) {
            return 'Serviços de segurança AWS:\n• **IAM** - Identidade e acesso\n• **Cognito** - Autenticação de usuários\n• **WAF** - Web Application Firewall\n• **GuardDuty** - Detecção de ameaças\n• **KMS** - Gerenciamento de chaves\n\nQual aspecto de segurança?';
        }
        
        if (lowerMessage.includes('custo') || lowerMessage.includes('preço') || lowerMessage.includes('billing')) {
            return 'Para otimizar custos na AWS:\n• Use **AWS Cost Explorer** para análise\n• Configure **Budget Alerts**\n• Aproveite **Reserved Instances**\n• Use **Spot Instances** quando possível\n• Monitore com **CloudWatch**\n\nPrecisa de ajuda com algum desses?';
        }
        
        // Se chegou até aqui, não encontrou resposta específica
        return this.generalResponses.default;
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Inicializa a aplicação quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    new AmazonQDemo();
});