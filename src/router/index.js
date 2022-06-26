import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import PeopleList from '@/views/People/PeopleList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', name: 'people-list', component: PeopleList },
      { path: 'people/:id', name: 'people-detail', component: () => import('@/views/People/PeopleDetail.vue') },
      { path: 'people/create', name: 'people-create', component: () => import('@/views/People/PeopleCreate.vue') },
      { path: 'people/:id/edit', name: 'people-edit', component: () => import('@/views/People/PeopleEdit.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
