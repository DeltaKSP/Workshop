#!/bin/bash

# Deploy script para Amazon Q Chatbot Demo
set -e

echo "🚀 Iniciando deploy do Amazon Q Chatbot Demo..."

# Verificar dependências
command -v terraform >/dev/null 2>&1 || { echo "❌ Terraform não encontrado. Instale: https://terraform.io"; exit 1; }
command -v aws >/dev/null 2>&1 || { echo "❌ AWS CLI não encontrado. Instale: https://aws.amazon.com/cli/"; exit 1; }

# Verificar credenciais AWS
aws sts get-caller-identity >/dev/null 2>&1 || { echo "❌ Configure suas credenciais AWS"; exit 1; }

echo "✅ Dependências verificadas"

# Navegar para diretório de infraestrutura
cd infrastructure

# Inicializar Terraform
echo "📦 Inicializando Terraform..."
terraform init

# Planejar deploy
echo "📋 Planejando infraestrutura..."
terraform plan

# Aplicar infraestrutura
echo "🏗️ Criando infraestrutura..."
terraform apply -auto-approve

# Obter outputs
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
WEBSITE_URL=$(terraform output -raw website_url)
CLOUDFRONT_URL=$(terraform output -raw cloudfront_url)

echo "✅ Infraestrutura criada!"
echo "📦 Bucket S3: $BUCKET_NAME"

# Voltar ao diretório raiz
cd ..

# Fazer upload dos arquivos
echo "📤 Fazendo upload dos arquivos..."
aws s3 sync . s3://$BUCKET_NAME --exclude "infrastructure/*" --exclude "mcp-server/*" --exclude ".git/*" --exclude "*.sh" --exclude "*.md"

echo "🎉 Deploy concluído!"
echo "🌐 Website: $WEBSITE_URL"
echo "🚀 CloudFront: $CLOUDFRONT_URL"
echo ""
echo "🔗 Acesse seu chatbot em: $CLOUDFRONT_URL"