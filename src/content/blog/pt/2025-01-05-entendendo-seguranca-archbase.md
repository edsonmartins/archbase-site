---
title: "Entendendo o Módulo de Segurança Archbase"
slug: "entendendo-seguranca-archbase"
description: "Um mergulho profundo no módulo de segurança do Archbase, cobrindo autenticação, autorização e suporte multi-tenant."
date: "2025-01-05"
author: "Edson Martins"
authorTitle: "Arquiteto Líder"
category: "Recursos"
tags: ["Segurança", "Autenticação", "Autorização", "Multi-tenancy"]
readTime: 10
---

Segurança é fundamental em aplicações empresariais. O Archbase fornece um módulo de segurança abrangente.

## Fluxo de Autenticação

O fluxo de autenticação no Archbase é construído sobre tokens JWT:

```tsx
import { ArchbaseAuthenticator } from '@archbase/security';

const authenticator = new ArchbaseAuthenticator({
  authUrl: '/api/auth',
  tokenStorage: 'localStorage',
});
```

## Controle de Acesso Baseado em Permissões

Use anotações para proteger seus endpoints:

```java
@HasPermission("usuario.read")
public Page<UsuarioDto> findAll(Pageable pageable) {
  return userRepository.findAll(pageable);
}
```

## Isolamento de Dados Multi-Tenant

O Archbase garante isolamento completo de dados entre tenants:

- Segurança em nível de linha
- Consultas com escopo definido
- Cache consciente de tenant

Saiba mais em nossa documentação de segurança.
