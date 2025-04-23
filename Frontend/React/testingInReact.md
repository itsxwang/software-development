- [Types of Tests](Frontend/React/PracticeProjects/SimpleTODO/src/Username.tsx)

- [When to use unit tests](https://youtu.be/4-_0aTlkqK0?si=ET1cwEEnYkc6Yg-V&t=227)

- [When to use end to end tests](https://youtu.be/4-_0aTlkqK0?si=n5trUfQ-dRGLpvzW&t=387)

- [When to use Integration tests](https://youtu.be/4-_0aTlkqK0?si=lvZsw1tYgSTPI1Mg&t=497)

- [Comparison between different test types](https://youtu.be/4-_0aTlkqK0?si=E6DZs9UQ6XM4dG2N&t=167)


## Snippet for `vite.config.ts` file for testing 
```tsx
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts']
  
  }
})
```

##  ---------------------------This topic is in still in progress---------------------------