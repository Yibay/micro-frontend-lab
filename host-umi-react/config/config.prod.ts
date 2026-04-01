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
          entry: '//your-production-domain.com/sub-vue-vite',
        },
        {
          name: 'sub-vanilla',
          entry: '//your-production-domain.com/sub-vanilla',
        },
      ],
    },
  },
});