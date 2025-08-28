import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserAuth from '../views/UserAuth.vue';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }, {
    path: '/auth',
    name: 'auth',
    component: UserAuth,
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
