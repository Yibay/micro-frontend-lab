import { defineConfig } from '@umijs/max';
import baseConfig from './config';

export default defineConfig({
  ...baseConfig,
  // 开发环境特定配置
  devtool: 'source-map',
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-vue-vite',
          entry: '//localhost:7101',
        },
        {
          name: 'sub-vanilla',
          entry: '//localhost:7102',
        },
        {
          name: 'sub-umi-react',
          entry: '//localhost:8001',
        },
      ],
    },
  },
});