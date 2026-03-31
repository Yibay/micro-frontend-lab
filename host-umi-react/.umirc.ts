import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'pnpm',
  // 1. 开启内置插件（必须开启这些开关，对应的功能才会生效）
  antd: {},
  model: {},
  initialState: {},
  request: {},
  
  // 2. 开启布局（自动生成头部和侧边栏）
  layout: {
    title: '微前端管理平台',
    locale: true, // 建议开启，防止部分插件报国际化错
  },
  // 3. 微前端主应用配置
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
      ],
    },
  },
  // 4. 路由配置
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home', // 对应 src/pages/Home
    },
    {
      name: 'Vue子应用',
      path: '/vue/*',
      microApp: 'sub-vue-vite',
    },
    {
      name: '原生子应用',
      path: '/vanilla/*',
      microApp: 'sub-vanilla',
    },
  ],
});
