import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreadCrumbs from "../components/BreadCrumbs.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: "main", breadcrumb: "Home", name: 'главная'},
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    meta: {layout: "inner", breadcrumb: "project", name: "проекты"},
    component: () => import('./../views/TheProject.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: "inner", breadcrumb: "about"},
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

router.beforeEach((to, from, next) => {
  const matched = to.matched;
  const breadcrumbs = matched
    .map(route => ({
      name: route.meta.breadcrumb || route.name,
      path: `/${route.path.split('/').filter(i => i).join('/')}`
    }))
    .filter(route => route.name !== "Home");
  to.meta.breadcrumbs = [{ name: "Home", path: "/" }, ...breadcrumbs];
  next();
});


// export default router
export { router, BreadCrumbs };