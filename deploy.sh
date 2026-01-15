#!/bin/bash

# Script de Deploy - Archbase Site Landing Page
# Docker Swarm Stack

set -e

# Configurações
STACK_NAME="archbase-site"
FRONTEND_IMAGE="archbase-site"
REGISTRY="" # Deixe vazio para local, ou configure seu registry (ex: registry.example.com/)

echo "======================================"
echo "  Deploy Archbase Site - Docker Swarm"
echo "======================================"
echo ""

# Build das imagens SEM CACHE (BuildKit com opções adicionais)
export DOCKER_BUILDKIT=1
echo ""
echo "Construindo imagem do Frontend (no-cache)..."
docker build --no-cache --progress=plain -t ${FRONTEND_IMAGE}:latest .

# Opcional: Tag para registry
# docker tag ${FRONTEND_IMAGE}:latest ${REGISTRY}${FRONTEND_IMAGE}:latest

# Opcional: Push para registry
# docker push ${REGISTRY}${FRONTEND_IMAGE}:latest

# Deploy da stack
echo ""
echo "Fazendo deploy da stack '${STACK_NAME}'..."
docker stack deploy -c docker-compose.stack.yml ${STACK_NAME}

echo ""
echo "======================================"
echo "  Deploy iniciado com sucesso!"
echo "======================================"
echo ""
echo "Comandos úteis:"
echo "  docker service ls                    # Listar serviços"
echo "  docker service logs ${STACK_NAME}_frontend -f   # Logs frontend"
echo "  docker stack ps ${STACK_NAME}        # Status dos containers"
echo "  docker stack rm ${STACK_NAME}        # Remover stack"
echo ""
echo "Aguardando serviços iniciarem..."
sleep 5
docker service ls --filter name=${STACK_NAME}
echo ""
