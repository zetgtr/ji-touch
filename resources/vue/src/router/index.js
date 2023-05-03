import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreadCrumbs from "../components/BreadCrumbs.vue";
import axios from "axios";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main", breadcrumb: "Home", name: 'home' },
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { layout: "inner", breadcrumb: "contact", name: 'Контакты' },
    component: () => import('./../views/ContactView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    meta: { layout: "inner", breadcrumb: "jobs", name: 'Вакансии' },
    component: () => import('./../views/JobsView.vue')
  },
  {
    path: '/services',
    name: 'services',
    meta: { layout: "inner", breadcrumb: "services", name: 'Услуги' },
    component: () => import('./../views/ServicesView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    meta: { layout: "inner", breadcrumb: "reviews", name: 'Отзывы' },
    component: () => import('./../views/ReviewsView.vue')
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
    meta: { layout: "about", breadcrumb: "О компании" },
    component: () => import('./../views/AboutView.vue')
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   meta: { layout: "inner", breadcrumb: "test" },
  //   component: () => import('./../views/TestView.vue')
  // },
  // {
  //   path: "/:catchAll(.*)",
  //   meta: { layout: "empty" },
  //   component: () => import('./../views/NotFound.vue')
  // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

console.log(routes)

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

let dynamicRoutes = [];

axios.get('/api/page_route').then(response => {
    const links = response.data;

    const createRoutes = (parentRoute, links, url = "") => {
        links.forEach(link => {
            url = url + "/" + link.url;
            let path = "../infusions/views/" + link.title + "View.vue";
            console.log(url);
            const route = {
                path: url,
                name: "test",
                component: () => import("./../views/infusions/testView.vue")
            };

            if (link.parent && link.parent.length > 0) {
                route.children = [];
                createRoutes(route, link.parent, url);
            }

            if (parentRoute) {
                parentRoute.children.push(route);
            } else {
                dynamicRoutes.push(route);
            }
        });
    };

    createRoutes(null, links);
});

router.beforeResolve(async (to, from, next) => {
    // Загружаем динамические маршруты и сохраняем их в переменной
    if (dynamicRoutes.length === 0) {
        dynamicRoutes = await getDynamicRoutes();
    }
    // Добавляем динамические маршруты в роутер
    console.log(dynamicRoutes)
    router.addRoute(dynamicRoutes);
    next();
});

async function getDynamicRoutes() {
    const response = await axios.get("/api/page_route");
    const links = response.data;

    const routes = [];

    const createRoutes = (parentRoute, links, url = "") => {
        links.forEach(link => {
            url = url + "/" + link.url;
            let path = "../infusions/views/" + link.title + "View.vue";
            console.log(url);
            const route = {
                path: url,
                name: "test",
                component: () => import("./../views/infusions/testView.vue")
            };

            if (link.parent && link.parent.length > 0) {
                route.children = [];
                createRoutes(route, link.parent, url);
            }

            if (parentRoute) {
                parentRoute.children.push(route);
            } else {
                routes.push(route);
            }
        });
    };

    createRoutes(null, links);
    return routes;
}

export { router, BreadCrumbs };
