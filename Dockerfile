# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos de configuração
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build estático do Next.js
RUN pnpm run build

# Production stage - Nginx
FROM nginx:alpine

# Copiar build do Next.js (pasta out/ para exportação estática)
COPY --from=builder /app/out /usr/share/nginx/html

# Copiar configuração nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
