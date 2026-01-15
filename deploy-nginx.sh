#!/bin/bash

# Script de Deploy - Archbase Site Landing Page (Nginx Estático)
# Uso: ./deploy-nginx.sh [user@vps-host]

set -e

# Configurações
VPS_HOST=${1:-"root@SEU_IP_VPS"}
REMOTE_DIR="/var/www/archbase.dev"
LOCAL_BUILD="./out"

echo "======================================"
echo "  Deploy Archbase Site - Nginx"
echo "======================================"
echo ""

# Verificar se o build existe
if [ ! -d "$LOCAL_BUILD" ]; then
  echo "❌ Diretório 'out/' não encontrado. Executando build..."
  pnpm run build
fi

echo ""
echo "📦 Build concluído. Enviando arquivos para $VPS_HOST..."

# Criar diretório remoto se não existir
ssh $VPS_HOST "mkdir -p $REMOTE_DIR"

# Copiar arquivos
rsync -avz --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  $LOCAL_BUILD/ $VPS_HOST:$REMOTE_DIR/

# Ajustar permissões
ssh $VPS_HOST "chown -R www-data:www-data $REMOTE_DIR"

echo ""
echo "✅ Deploy concluído com sucesso!"
echo ""
echo "🌐 Site disponível em: https://archbase.dev"
echo ""
