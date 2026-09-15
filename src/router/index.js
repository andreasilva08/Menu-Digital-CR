import { createRouter, createWebHistory } from 'vue-router'

import Hamburguesas from '../views/Hamburguesas.vue'
import Perros from '../views/Perros.vue'
import Pizzas from '../views/Pizzas.vue'
import Bebidas from '../views/Bebidas.vue'
import Postres from '../views/Postres.vue'
import Promociones from '../views/Promociones.vue'
import Nosotros from '../views/Nosotros.vue'

const routes = [
  {
    path: '/',
    redirect: '/hamburguesas',
  },
  {
    path: '/hamburguesas',
    name: 'Hamburguesas',
    component: Hamburguesas,
    meta: { title: 'Hamburguesas Artesanales | Burger Bite' },
  },
  {
    path: '/perros',
    name: 'Perros',
    component: Perros,
    meta: { title: 'Perros Calientes Gourmet | Burger Bite' },
  },
  {
    path: '/pizzas',
    name: 'Pizzas',
    component: Pizzas,
    meta: { title: 'Pizzas al Horno | Burger Bite' },
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: Bebidas,
    meta: { title: 'Bebidas y Malteadas | Burger Bite' },
  },
  {
    path: '/postres',
    name: 'Postres',
    component: Postres,
    meta: { title: 'Postres & Dulces | Burger Bite' },
  },
  {
    path: '/promociones',
    name: 'Promociones',
    component: Promociones,
    meta: { title: 'Promociones & Combos | Burger Bite' },
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros,
    meta: { title: 'Sobre Nosotros | Burger Bite' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/hamburguesas',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
