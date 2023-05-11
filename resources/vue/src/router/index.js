import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreadCrumbs from "../components/BreadCrumbs.vue";
import axios from "axios";
import camelCase from "lodash/camelCase";

// const requireModule = require.context("../modules", true, /\.js$/);
// const importedRoutes = [];
//
// requireModule.keys().forEach(fileName => {
//     let str = fileName.split("/");
//     str = str[1];
//     if (fileName === `./${str}/router/index.js`) {
//         const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
//         importedRoutes.push(...requireModule(fileName).default);
//     }
// });

const modules = [];
const moduleFiles = import.meta.globEager('../modules/**/*.js');

for (const path in moduleFiles) {
    if (path.includes('router')) {
        const moduleName = path.replace(/^.+\/([^/]+)\.js$/, '$1');
        modules.push(moduleFiles[path].default || moduleFiles[path]);
    }
}
console.log(modules)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main", breadcrumb: "Home", name: 'home' },
    component: HomeView,
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
]
modules.forEach(el=>{
    routes.push(...el)
})

routes.push(...await getDynamicRoutes("/api/page_route","./../views/infusions/"))
// routes.push(...await getDynamicRoutes("/api/catalog_route","./../views/catalog/"))

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach(async(to, from, next) => {
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


async function getDynamicRoutes(api,path) {
    const response = await axios.get(api);
    const links = response.data;
    const routes = [];
    const createRoutes = (parentRoute, links, url = "",title) => {
        links.forEach(link => {
            console.log(link.title)
            let titleSecond = link.title
            const nestedUrl = url + "/" + link.url; // создаем новую переменную для каждого уровня
            let pathImport = path + link.title + "View.vue";
            const route = {
                path: nestedUrl,
                name: link.title+"|"+link.id,
                component: () => import(pathImport)
            };

            if (link.parent && link.parent.length > 0) {
                route.children = [];
                createRoutes(route, link.parent, nestedUrl,link.title);
            }

            if (parentRoute && title === titleSecond) {
                parentRoute.children.push(route);
            } else {
                routes.push(route);
            }
        });
    };

    createRoutes(null, links);
    return routes;
}

console.log(routes)

export { router, BreadCrumbs };
