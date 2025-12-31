# Archbase Site

Site oficial do **Archbase Framework** - framework full-stack para aplicações empresariais.

## Sobre o Archbase

O Archbase é um framework moderno que combina o poder do **Spring Boot 3.5** com o **React**, oferecendo uma solução completa para desenvolvimento de aplicações empresariais com:

- Domain-Driven Design (DDD) completo
- Multi-tenancy nativo
- CQRS + Event Bus
- Workflow Engine
- QueryDSL + RSQL
- Componentes React ricos

## Stack Tecnológica

- **Next.js 16** - React framework com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **next-intl** - Internacionalização (pt/en)
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## Estrutura do Projeto

```
src/
├── app/[locale]/       # Rotas internacionalizadas
│   ├── blog/[slug]/    # Posts do blog
│   ├── layout.tsx      # Layout por locale
│   └── page.tsx        # Homepage
├── components/         # Componentes React
├── content/blog/       # Posts em Markdown
│   ├── en/             # Posts em inglês
│   └── pt/             # Posts em português
├── i18n/               # Configuração de i18n
├── lib/                # Utilitários
└── messages/           # Arquivos de tradução
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Exportar site estático
npm run export
```

O site estará disponível em `http://localhost:3000`

## Blog

Adicione novos posts criando arquivos Markdown em `src/content/blog/{locale}/` com frontmatter:

```yaml
---
title: Título do Post
description: Descrição curta
date: 2025-01-01
tags: ['tag1', 'tag2']
---
```

## Internacionalização

O site suporta dois idiomas:
- Portugal (`/pt`)
- English (`/en`)

As traduções ficam em `src/messages/{locale}.json`

## Licença

MIT
