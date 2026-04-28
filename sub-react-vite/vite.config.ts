import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from './src/config'

export default defineConfig({
  plugins: [
    react(),
  ],
  base: config.basePath,
  server: {
    port: 7103,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
