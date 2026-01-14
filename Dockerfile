# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de configuração
COPY package.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Build estático do Next.js
RUN npm run build

# Production stage - Nginx
FROM nginx:alpine

# Copiar build do Next.js (pasta out/ para exportação estática)
COPY --from=builder /app/out /usr/share/nginx/html

# Copiar configuração nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
