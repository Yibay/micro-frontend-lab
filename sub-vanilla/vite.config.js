import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun'

const port = 7102;

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction
    ? 'http://sub-vanilla.example.com/'
    : `http://localhost:${port}/`;

  return {
    plugins: [
      qiankun('sub-vanilla', {
        useDevMode: true
      })
    ],
    base,
    server: {
      port,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  };
});
