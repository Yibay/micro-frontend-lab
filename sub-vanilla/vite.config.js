import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 7102,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
