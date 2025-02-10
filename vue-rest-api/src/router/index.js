import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SaleIndex from '@/views/sales/SaleIndex.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sales',
      name: 'SaleIndex',
      component: SaleIndex
    },
    {
      path: '/sales/create',
      name: 'SaleCreate',
      component: () => import('../views/sales/SaleCreate.vue'),
    },
    {
      path: '/sales/:id/edit',
      name: 'SaleEdit',
      component: () => import('../views/sales/SaleEdit.vue'),
      props: true,
    },
  ],
});

export default router;
