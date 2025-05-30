import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyBundle',
      fileName: 'index',
      formats: ['es'], // or 'iife', 'cjs' depending on your needs
    },
  },
});