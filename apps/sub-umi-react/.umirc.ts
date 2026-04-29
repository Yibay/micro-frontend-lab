import { defineConfig } from '@umijs/max';
import path from 'path';

export default defineConfig({
  // 开启内置插件（必须开启这些开关，对应的功能才会生效）
  antd: {},
  model: {},
  initialState: {},
  request: {},
  access: {},
  // 路径别名配置
  alias: {
    '@shared': path.resolve(__dirname, '../../packages/types/src'),
  },
  // 微前端子应用配置
  qiankun: {
    slave: {}
  },
  // 其他配置...
});
