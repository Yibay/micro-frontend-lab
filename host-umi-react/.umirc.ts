import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/vue', component: '@/pages/SubApp' },
    { path: '/vanilla', component: '@/pages/SubApp' }
  ]
});
