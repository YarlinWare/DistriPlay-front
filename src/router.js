import { createRouter, createWebHistory } from 'vue-router';

//Vue.use(Router)

// Importar páginas
import Home from '@/pages/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;