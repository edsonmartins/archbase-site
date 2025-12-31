---
title: "Understanding Archbase Security Module"
slug: "understanding-archbase-security"
description: "A deep dive into Archbase's security module, covering authentication, authorization, and multi-tenant support."
date: "2025-01-05"
author: "Edson Martins"
authorTitle: "Lead Architect"
category: "Features"
tags: ["Security", "Authentication", "Authorization", "Multi-tenancy"]
readTime: 10
---

Security is paramount in enterprise applications. Archbase provides a comprehensive security module.

## Authentication Flow

The authentication flow in Archbase is built on top of JWT tokens:

```tsx
import { ArchbaseAuthenticator } from '@archbase/security';

const authenticator = new ArchbaseAuthenticator({
  authUrl: '/api/auth',
  tokenStorage: 'localStorage',
});
```

## Permission-Based Access Control

Use annotations to protect your endpoints:

```java
@HasPermission("user.read")
public Page<UserDto> findAll(Pageable pageable) {
  return userRepository.findAll(pageable);
}
```

## Multi-Tenant Data Isolation

Archbase ensures complete data isolation between tenants:

- Row-level security
- Scoped queries
- Tenant-aware caching

Learn more in our security documentation.
