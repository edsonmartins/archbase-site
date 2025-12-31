---
title: "Announcing Archbase v3 - Our Biggest Release Ever"
slug: "announcing-archbase-v3"
description: "We are thrilled to announce Archbase v3, featuring 100+ TypeScript components, enhanced DataSource with TanStack Query, and full SSR support."
date: "2025-01-15"
author: "Edson Martins"
authorTitle: "Lead Architect"
category: "Release"
tags: ["v3", "Release", "React", "TypeScript"]
readTime: 5
featured: true
---

We're excited to announce the release of **Archbase v3**, a major milestone in our framework's evolution. This release represents months of hard work and brings significant improvements to our React component library.

## What's New in v3

### 100+ TypeScript Components

We've expanded our component library from 80 to **100+ components**, covering everything from form editors and data grids to advanced visualizations and developer tools.

### Enhanced DataSource with TanStack Query

Our new **DataSource V2** integrates TanStack Query and Immer for maximum performance:

```tsx
import { ArchbaseDataGrid, useArchbaseDataSource } from '@archbase/data';

export function UsersList() {
  const dataSource = useArchbaseDataSource({
    queryKey: ['users'],
    queryFn: () => api.get('/users'),
  });

  return (
    <ArchbaseDataGrid
      dataSource={dataSource}
      columns={[
        { field: 'name', headerName: 'Name' },
        { field: 'email', headerName: 'E-mail' },
      ]}
    />
  );
}
```

### Full SSR Support

New utilities for **Next.js and TanStack Start** with optimized hydration, making Archbase v3 perfect for modern SSR frameworks.

### Built on Mantine UI

Archbase React v3 is now built on top of **Mantine UI**, giving you access to 123+ additional components and a robust foundation.

## Migration Guide

Upgrading from v2 to v3 is straightforward. Check out our [migration guide](/docs/migration) for detailed instructions.

## What's Next

We're already working on v3.1 with new components and features. Stay tuned for more updates!

Happy coding! 🚀
