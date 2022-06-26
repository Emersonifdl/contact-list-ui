import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import PeopleList from '@/views/People/PeopleList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', component: PeopleList },
      { path: 'people/:id', component: () => import('@/views/People/PeopleDetail.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
