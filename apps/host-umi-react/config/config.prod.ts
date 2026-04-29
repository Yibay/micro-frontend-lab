import { defineConfig } from '@umijs/max';
import baseConfig from './config';

export default defineConfig({
  ...baseConfig,
  // 生产环境特定配置
  outputPath: 'dist',
  publicPath: '/',
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-vue-vite',
          entry: '//sub-vue-vite.example.com',
        },
        {
          name: 'sub-vanilla',
          entry: '//sub-vanilla.example.com',
        },
        {
          name: 'sub-umi-react',
          entry: '//sub-umi-react.example.com',
        },
      ],
    },
  },
});