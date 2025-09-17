/**
 * Testes para Amazon Q Developer Chatbot
 * Testes de unidade, integração e E2E
 */

// Classe simplificada para testes
class AmazonQDemo {
    constructor() {
        this.awsServices = {
            'ec2': {
                name: 'Amazon EC2',
                category: 'Computação',
                description: 'Serviço de computação em nuvem...',
                useCase: 'Hospedagem de aplicações'
            },
            'lambda': {
                name: 'AWS Lambda',
                category: 'Computação Serverless',
                description: 'Serviço serverless...',
                useCase: 'APIs, microserviços'
            }
        };
        
        this.generalResponses = {
            'default': 'Hmm, não sei responder isso no momento. 🤔'
        };
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, service] of Object.entries(this.awsServices)) {
            if (lowerMessage.includes(key)) {
                return `📊 **${service.name}** (${service.category})\n\n${service.description}\n\n🎯 **Casos de uso:** ${service.useCase}`;
            }
        }
        
        if (lowerMessage.includes('serverless')) {
            return 'Serviços serverless da AWS:\n• **Lambda** - Computação\n• **DynamoDB** - Banco NoSQL';
        }
        
        return this.generalResponses.default;
    }
    
    validateInput(message) {
        return message && message.trim().length > 0;
    }
    
    formatMessage(message) {
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/•/g, '&bull;')
            .replace(/\n/g, '<br>');
    }
}

// ===== TESTES DE UNIDADE =====
function testUnit() {
    const chatbot = new AmazonQDemo();
    const results = [];
    
    // Teste 1: EC2
    const ec2Response = chatbot.generateResponse('O que é EC2?');
    results.push({
        test: 'EC2 Response',
        passed: ec2Response.includes('Amazon EC2') && ec2Response.includes('Computação')
    });
    
    // Teste 2: Lambda
    const lambdaResponse = chatbot.generateResponse('lambda');
    results.push({
        test: 'Lambda Response',
        passed: lambdaResponse.includes('AWS Lambda')
    });
    
    // Teste 3: Resposta padrão
    const defaultResponse = chatbot.generateResponse('pizza');
    results.push({
        test: 'Default Response',
        passed: defaultResponse.includes('não sei responder')
    });
    
    // Teste 4: Validação de input
    results.push({
        test: 'Input Validation - Valid',
        passed: chatbot.validateInput('teste') === true
    });
    
    results.push({
        test: 'Input Validation - Invalid',
        passed: chatbot.validateInput('') === false
    });
    
    // Teste 5: Formatação
    const formatted = chatbot.formatMessage('**Teste**\n• Item');
    results.push({
        test: 'Message Formatting',
        passed: formatted.includes('<strong>Teste</strong>') && formatted.includes('&bull;')
    });
    
    return results;
}

// ===== TESTES DE INTEGRAÇÃO =====
function testIntegration() {
    const chatbot = new AmazonQDemo();
    const results = [];
    
    // Teste fluxo completo
    const message = 'O que é Lambda?';
    const isValid = chatbot.validateInput(message);
    const response = chatbot.generateResponse(message);
    const formatted = chatbot.formatMessage(response);
    
    results.push({
        test: 'Complete Flow',
        passed: isValid && response.includes('Lambda') && formatted.includes('<strong>')
    });
    
    // Teste múltiplas perguntas
    const questions = ['EC2', 'Lambda', 'pizza'];
    const responses = questions.map(q => chatbot.generateResponse(q));
    
    results.push({
        test: 'Multiple Questions',
        passed: responses[0].includes('EC2') && 
                responses[1].includes('Lambda') && 
                responses[2].includes('não sei')
    });
    
    return results;
}

// ===== TESTES E2E =====
function testE2E() {
    const results = [];
    
    // Simula sessão completa
    const chatbot = new AmazonQDemo();
    const conversation = [
        { input: 'EC2', expected: 'Amazon EC2' },
        { input: 'serverless', expected: 'Serviços serverless' },
        { input: 'pizza', expected: 'não sei responder' }
    ];
    
    let allPassed = true;
    conversation.forEach(turn => {
        const response = chatbot.generateResponse(turn.input);
        if (!response.includes(turn.expected)) {
            allPassed = false;
        }
    });
    
    results.push({
        test: 'Full Conversation',
        passed: allPassed
    });
    
    return results;
}

// ===== RUNNER DOS TESTES =====
function runAllTests() {
    console.log('🧪 Executando Testes do Amazon Q Chatbot\n');
    
    const unitResults = testUnit();
    const integrationResults = testIntegration();
    const e2eResults = testE2E();
    
    console.log('📋 TESTES DE UNIDADE:');
    unitResults.forEach(result => {
        console.log(`${result.passed ? '✅' : '❌'} ${result.test}`);
    });
    
    console.log('\n📋 TESTES DE INTEGRAÇÃO:');
    integrationResults.forEach(result => {
        console.log(`${result.passed ? '✅' : '❌'} ${result.test}`);
    });
    
    console.log('\n📋 TESTES E2E:');
    e2eResults.forEach(result => {
        console.log(`${result.passed ? '✅' : '❌'} ${result.test}`);
    });
    
    const allResults = [...unitResults, ...integrationResults, ...e2eResults];
    const passed = allResults.filter(r => r.passed).length;
    const total = allResults.length;
    
    console.log(`\n📊 RESULTADO: ${passed}/${total} testes passaram`);
    console.log(passed === total ? '🎉 Todos os testes passaram!' : '⚠️  Alguns testes falharam');
    
    return { passed, total, success: passed === total };
}

// Exporta para uso em Node.js ou executa no browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AmazonQDemo, runAllTests };
} else {
    // Executa automaticamente no browser
    runAllTests();
}