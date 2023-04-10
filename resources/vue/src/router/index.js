import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreadCrumbs from "../components/BreadCrumbs.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main", breadcrumb: "Home", name: 'home' },
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    meta: { layout: "inner", breadcrumb: "project", name: 'Проекты' },
    component: () => import('./../views/TheProject.vue')
  },
  {
    path: '/project/:id',
    name: 'project-id',
    meta: { layout: "inner", breadcrumb: "project" },
    component: () => import('./../views/TheProjectItem.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: "inner", breadcrumb: "about" },
    component: () => import('./../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: { layout: "inner", breadcrumb: "test" },
    component: () => import('./../views/TestView.vue')
  },
  // { 
  //   path: '/category/:id',
  //   component: Category,
  //   children: [
  //     {
  //       path: 'product/:id',
  //       component: Product
  //     }
  //   ]
  // },
  {
    path: "/:catchAll(.*)",
    meta: { layout: "empty" },
    component: () => import('./../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const matched = to.matched;

  const breadcrumbs = matched.map(route => ({
    name: route.meta.breadcrumb || route.name,
    path: route.path.includes('/:id') ? `/${route.path.split('/').filter(i => i).slice(0, -1).join('/')}` : `/${route.path.split('/').filter(i => i).join('/')}`
  }));

  // Добавляем "Home" хлебную крошку в начало массива
  breadcrumbs.unshift({ name: 'Главная', path: '/' });

  // Особый случай: если мы находимся на маршруте с динамическим путём,
  // то нужно добавить дополнительную хлебную крошку с динамическим ID
  if (to.params.id) {
    const dynamicPath = to.path.split('/').pop();
    breadcrumbs.push({ name: dynamicPath, path: `/${to.path.split('/').slice(0, -1).join('/')}/` });
  }

  // Последний элемент в массиве хлебных крошек не должен быть ссылкой
  breadcrumbs[breadcrumbs.length - 1].path = '';

  // Добавляем путь "/" к Home хлебной крошке
  breadcrumbs[0].path = '/';

  to.meta.breadcrumbs = breadcrumbs;
  next();
});

export { router, BreadCrumbs };