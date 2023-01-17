import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import daybookRouter from '../modules/daybook/router'// como  dentro de la carpeta router hay un archivo index no hay necesidad de especificar

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/daybook',
    ...daybookRouter // lo voy a esparsir mediante el operador spreed
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
