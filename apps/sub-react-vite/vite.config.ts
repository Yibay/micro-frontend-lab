import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from './src/config'

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../packages/types/src')
    }
  },
  base: config.basePath,
  server: {
    port: 7103,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
