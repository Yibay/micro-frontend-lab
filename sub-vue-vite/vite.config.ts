import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = 7101;

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction
    ? 'http://sub-vue-vite.example.com/'
    : `http://localhost:${port}/`;

  return {
    plugins: [
      vue(),
      qiankun('sub-vue-vite', {
        useDevMode: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    base,
    server: {
      port,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    build: {
      rollupOptions: {
        output: {
          format: 'umd',
          name: 'sub-vue-vite',
          manualChunks: undefined,
          inlineDynamicImports: true
        }
      }
    }
  };
});
