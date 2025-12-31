---
title: "Getting Started with Archbase: A Complete Guide"
slug: "getting-started-with-archbase"
description: "Learn how to set up your first Archbase project with our React boilerplate. From installation to your first component."
date: "2025-01-10"
author: "Edson Martins"
authorTitle: "Lead Architect"
category: "Tutorial"
tags: ["Tutorial", "Getting Started", "React", "Vite"]
readTime: 8
---

Welcome to Archbase! This guide will walk you through setting up your first project with our React boilerplate.

## Prerequisites

Before you begin, make sure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of React and TypeScript

## Creating a New Project

The fastest way to start is using our React boilerplate:

```bash
# Clone the boilerplate
git clone https://github.com/relevant-solutions/archbase-react-boilerplate.git my-app
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Your First Component

Let's create a simple data grid with Archbase components:

```tsx
import { ArchbaseDataGrid, useArchbaseDataSource } from '@archbase/data';

interface User {
  id: string;
  name: string;
  email: string;
}

export function UsersList() {
  const dataSource = useArchbaseDataSource<User>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      return response.json();
    },
  });

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 250 },
  ];

  return <ArchbaseDataGrid dataSource={dataSource} columns={columns} />;
}
```

## Adding Authentication

Archbase provides built-in authentication components:

```tsx
import { ArchbaseSecurityProvider } from '@archbase/security';

function App() {
  return (
    <ArchbaseSecurityProvider authUrl="/api/auth">
      <YourApp />
    </ArchbaseSecurityProvider>
  );
}
```

## Next Steps

- Explore our [component documentation](/components)
- Check out the [Java backend](https://github.com/relevant-solutions/archbase-framework)
- Join our [Discord community](https://discord.gg/archbase)

Happy building! 🏗️
