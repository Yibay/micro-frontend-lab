import { defineConfig } from '@umijs/max';

export default defineConfig({
  // 开启内置插件（必须开启这些开关，对应的功能才会生效）
  antd: {},
  model: {},
  initialState: {},
  request: {},
  access: {},
  // 微前端子应用配置
  qiankun: {
    slave: {}
  },
  // 其他配置...
});
