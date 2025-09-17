#!/bin/bash

echo "🚀 Amazon Q Chatbot Demo - TDC 2025"
echo "=================================="
echo ""

# Verificar se Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 não encontrado. Instale Python3 primeiro."
    exit 1
fi

# Iniciar servidor
echo "🌐 Iniciando servidor HTTP na porta 8000..."
echo ""
echo "📱 URLs disponíveis:"
echo "   Chatbot: http://localhost:8000"
echo "   Testes:  http://localhost:8000/tests/test-runner.html"
echo ""
echo "💡 Dica: Abra duas abas do navegador com as URLs acima"
echo ""
echo "🛑 Para parar: Ctrl+C"
echo ""

# Iniciar servidor HTTP
python3 -m http.server 8000