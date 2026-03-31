import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    qiankun('sub-vanilla', {
      useDevMode: true
    })
  ],
  server: {
    port: 7102,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
