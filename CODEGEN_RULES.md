# Codegen Rules for DevShram Project

## Project Context
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Component-based with state management

## Code Generation Guidelines

### 1. Component Structure
```typescript
// Always use this structure for React components
interface ComponentProps {
  // Define props with clear types
}

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX with Tailwind classes
  );
}
```

### 2. File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Pages: `page.tsx` (Next.js 13+ App Router)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `types.ts` or `ComponentName.types.ts`

### 3. Import Organization
```typescript
// 1. React imports
import React from 'react';
import { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// 3. Third-party imports
import clsx from 'clsx';

// 4. Local imports (components, utils, types)
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/utils/date';
```

### 4. TypeScript Standards
- Always define interfaces for props and complex objects
- Use `type` for unions and primitives
- Prefer `interface` for object shapes
- Export types/interfaces that might be reused

### 5. Styling Guidelines
- Use Tailwind classes preferentially
- Create custom CSS only when necessary
- Use responsive design patterns (`sm:`, `md:`, `lg:`)
- Maintain consistent spacing scale
- **Never use z-index as a prop** - Handle layering through component structure and Tailwind z-classes only

### 6. State Management
- Use React hooks for local state
- Consider context for shared state
- Follow existing patterns in `/src/state/`

### 7. Error Handling
- Always include error boundaries for components
- Handle loading and error states in async operations
- Use TypeScript's strict null checks

### 8. Performance Considerations
- Use Next.js Image component for images
- Implement proper loading states
- Consider code splitting for large components

### 9. Accessibility (A11y)
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use semantic HTML elements

### 10. Testing Considerations
- Write testable, pure functions when possible
- Separate business logic from UI components
- Use descriptive test IDs when needed

## Specific Patterns to Follow

### API Routes (if applicable)
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Implementation
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Error message' }, { status: 500 });
  }
}
```

### Custom Hooks
```typescript
export function useCustomHook(param: string) {
  const [state, setState] = useState<Type>();
  
  useEffect(() => {
    // Effect logic
  }, [param]);
  
  return { state, actions };
}
```

## Code Quality Rules
1. **No any types** - Always provide specific types
2. **Consistent formatting** - Follow existing patterns
3. **DRY principle** - Avoid code duplication
4. **Single responsibility** - One purpose per component/function
5. **Clear naming** - Self-documenting code

## When Adding New Features
1. Check existing patterns in the codebase first
2. Follow the established folder structure
3. Update types if adding new data structures
4. Consider mobile-first responsive design
5. Test in development mode before finalizing

## Questions to Ask Before Generating Code
1. Does this fit the existing architecture?
2. Are there similar components/patterns already implemented?
3. Is this accessible and responsive?
4. Does this follow TypeScript best practices?
5. Will this integrate well with the existing state management? 