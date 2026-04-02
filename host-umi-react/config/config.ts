import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'pnpm',
  // 1. 开启内置插件（必须开启这些开关，对应的功能才会生效）
  antd: {},
  model: {},
  initialState: {},
  request: {},
  // 2. 路径别名配置
  alias: {
    '@': './src',
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
        {
          name: 'sub-umi-react',
          entry: '//localhost:8001',
        },
      ],
    },
  },
  // 4. 路由配置
  routes: [
    // 重定向老路由到新路由
    {
      path: '/',
      redirect: '/vue/home',
    },
    {
      path: '/about',
      redirect: '/vue/about',
    },
    {
      path: '/contact',
      redirect: '/vue/contact',
    },
    // 配置 子应用路由
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
    {
      name: 'React子应用',
      path: '/umi/*',
      microApp: 'sub-umi-react',
    },
  ],
});