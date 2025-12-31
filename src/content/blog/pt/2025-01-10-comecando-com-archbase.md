---
title: "Começando com Archbase: Um Guia Completo"
slug: "comecando-com-archbase"
description: "Aprenda como configurar seu primeiro projeto Archbase com nosso boilerplate React. Da instalação ao seu primeiro componente."
date: "2025-01-10"
author: "Edson Martins"
authorTitle: "Arquiteto Líder"
category: "Tutorial"
tags: ["Tutorial", "Começando", "React", "Vite"]
readTime: 8
---

Bem-vindo ao Archbase! Este guia irá acompanhar você através da configuração do seu primeiro projeto com nosso boilerplate React.

## Pré-requisitos

Antes de começar, certifique-se de que você tem:
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes
- Conhecimento básico de React e TypeScript

## Criando um Novo Projeto

A maneira mais rápida de começar é usando nosso boilerplate React:

```bash
# Clone o boilerplate
git clone https://github.com/relevant-solutions/archbase-react-boilerplate.git meu-app
cd meu-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Seu Primeiro Componente

Vamos criar um data grid simples com os componentes Archbase:

```tsx
import { ArchbaseDataGrid, useArchbaseDataSource } from '@archbase/data';

interface Usuario {
  id: string;
  nome: string;
  email: string;
}

export function ListaUsuarios() {
  const dataSource = useArchbaseDataSource<Usuario>({
    queryKey: ['usuarios'],
    queryFn: async () => {
      const response = await fetch('/api/usuarios');
      return response.json();
    },
  });

  const columns = [
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 250 },
  ];

  return <ArchbaseDataGrid dataSource={dataSource} columns={columns} />;
}
```

## Adicionando Autenticação

O Archbase fornece componentes de autenticação integrados:

```tsx
import { ArchbaseSecurityProvider } from '@archbase/security';

function App() {
  return (
    <ArchbaseSecurityProvider authUrl="/api/auth">
      <SeuApp />
    </ArchbaseSecurityProvider>
  );
}
```

## Próximos Passos

- Explore nossa [documentação de componentes](/components)
- Confira o [backend em Java](https://github.com/relevant-solutions/archbase-framework)
- Junte-se à nossa [comunidade Discord](https://discord.gg/archbase)

Bom desenvolvimento! 🏗️
