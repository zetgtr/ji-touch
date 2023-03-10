import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: "main"},
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    meta: {layout: "inner"},
    component: () => import('./../views/TheProject.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: "inner"},
    component: () => import('./../views/AboutView.vue')
  },
  {
    path: "/:catchAll(.*)",
    meta: {layout: "empty"},
    component: () => import('./../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
