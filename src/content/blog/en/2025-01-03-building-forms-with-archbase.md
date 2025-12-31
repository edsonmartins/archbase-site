---
title: "Building Forms with Archbase: Best Practices"
slug: "building-forms-with-archbase"
description: "Learn the best practices for building complex forms with Archbase form components, validation, and error handling."
date: "2025-01-03"
author: "Edson Martins"
authorTitle: "Lead Architect"
category: "Tutorial"
tags: ["Forms", "Tutorial", "Validation", "Best Practices"]
readTime: 8
---

Forms are a crucial part of any application. Archbase provides a comprehensive set of form components.

## Form Validation

Use our built-in validation system:

```tsx
import { ArchbaseEdit, useArchbaseValidator } from '@archbase/forms';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});

function UserForm() {
  const { register, handleSubmit, errors } = useArchbaseValidator(schema);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ArchbaseEdit label="Name" {...register('name')} error={errors.name} />
      <ArchbaseEmailEdit label="Email" {...register('email')} error={errors.email} />
    </form>
  );
}
```

## Complex Form Layouts

Use ArchbaseGroup and ArchbaseStack for complex layouts:

```tsx
<ArchbaseGroup>
  <ArchbaseGroup name="personal">
    <ArchbaseEdit label="First Name" />
    <ArchbaseEdit label="Last Name" />
  </ArchbaseGroup>
  <ArchbaseGroup name="address">
    <ArchbaseEdit label="Street" />
    <ArchbaseEdit label="City" />
  </ArchbaseGroup>
</ArchbaseGroup>
```

## Async Validation

Implement async validation for unique fields:

```tsx
const validateUsername = async (value) => {
  const response = await fetch(`/api/users/check?username=${value}`);
  return response.ok;
};
```

Check out our form examples for more!
