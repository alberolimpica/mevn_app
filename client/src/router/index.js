import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserAuth from '../views/UserAuth.vue';

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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
