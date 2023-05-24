import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'node',
    coverage: {
      provider: 'c8',
      reporter: ['text-summary', 'text'],
      all: true,
      src: ['./src'],
    },
  }
});
