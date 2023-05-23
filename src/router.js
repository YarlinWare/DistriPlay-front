import { createRouter, createWebHistory } from 'vue-router';

//Vue.use(Router)

// Importar páginas
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Register from '@/pages/Register';
import Marketplace from '@/pages/Marketplace';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
