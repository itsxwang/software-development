import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        target: 'esnext',
    },
    optimizeDeps: {
        include: ['zod']
    },
    resolve: {
        dedupe: ['zod'],
        mainFields: ['module', 'main']
    },
    server: {
        port: 3000,
        open: true
    }
});
