import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    // 关键：qiankun 插件，开启开发模式
    qiankun('sub-vue-vite', {
      useDevMode: true
    })
  ],
  server: {
    port: 7101,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 关键：打包输出 UMD 格式，qiankun 必须
  build: {
    rollupOptions: {
      output: {
        format: 'umd',
        name: 'sub-vue-vite' // 必须和插件名称一致
      }
    }
  }
});
