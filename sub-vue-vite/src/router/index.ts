import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import config from '../config';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vue/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/vue/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/vue/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
];
const router = createRouter({
  history: createWebHistory(config.basePath),
  routes
});

export default router;
