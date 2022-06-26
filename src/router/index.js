import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/people/:id", component: () => import("@/views/Detail.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
