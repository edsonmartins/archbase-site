---
title: "Anunciando Archbase v3 - Nosso Maior Lançamento"
slug: "anunciando-archbase-v3"
description: "Estamos muito felizes em anunciar o Archbase v3, com 100+ componentes TypeScript, DataSource aprimorado com TanStack Query e suporte completo a SSR."
date: "2025-01-15"
author: "Edson Martins"
authorTitle: "Arquiteto Líder"
category: "Lançamento"
tags: ["v3", "Release", "React", "TypeScript"]
readTime: 5
featured: true
---

Estamos muito felizes em anunciar o lançamento do **Archbase v3**, um marco importante na evolução do nosso framework. Esta release representa meses de trabalho duro e traz melhorias significativas para nossa biblioteca de componentes React.

## O Que Há de Novo no v3

### 100+ Componentes TypeScript

Expandimos nossa biblioteca de componentes de 80 para **100+ componentes**, cobrindo desde editores de formulário e grids de dados até visualizações avançadas e ferramentas de desenvolvimento.

### DataSource Aprimorado com TanStack Query

Nosso novo **DataSource V2** integra TanStack Query e Immer para máxima performance:

```tsx
import { ArchbaseDataGrid, useArchbaseDataSource } from '@archbase/data';

export function ListaUsuarios() {
  const dataSource = useArchbaseDataSource({
    queryKey: ['usuarios'],
    queryFn: () => api.get('/usuarios'),
  });

  return (
    <ArchbaseDataGrid
      dataSource={dataSource}
      columns={[
        { field: 'nome', headerName: 'Nome' },
        { field: 'email', headerName: 'E-mail' },
      ]}
    />
  );
}
```

### Suporte Completo a SSR

Novos utilitários para **Next.js e TanStack Start** com hidratação otimizada, tornando o Archbase v3 perfeito para frameworks SSR modernos.

### Construído sobre Mantine UI

O Archbase React v3 agora é construído sobre o **Mantine UI**, dando acesso a 123+ componentes adicionais e uma base robusta.

## Guia de Migração

A atualização do v2 para o v3 é simples. Confira nosso [guia de migração](/docs/migration) para instruções detalhadas.

## O Que Vem Por Aí

Já estamos trabalhando no v3.1 com novos componentes e funcionalidades. Fiquem ligados para mais atualizações!

Bom código! 🚀
