import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/vue', component: '@/pages/SubAppVue' },
    { path: '/vanilla', component: '@/pages/SubAppVanilla' }
  ]
});
