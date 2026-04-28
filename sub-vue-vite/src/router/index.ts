import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import config from '../config';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vue/list',
    name: 'List',
    component: () => import('../views/ListPage.vue')
  },
  {
    path: '/vue/form',
    name: 'Form',
    component: () => import('../views/FormPage.vue')
  },
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
  },
  {
    path: '/vue/',
    redirect: '/vue/list'
  }
];
const router = createRouter({
  history: createWebHistory(config.basePath),
  routes
});

export default router;