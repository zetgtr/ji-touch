import axios from "axios";

const routes = await categoryRoute()
async function categoryRoute(){
    const response = await axios.get("/api/catalog_route");
    const settings = response.data[0];
    return [
        {
            path: "/"+settings.url+'/category/:slug',
            name: "catalog_category",
            component: () => import(/* webpackChunkName: "Chunks/Site/Router/Category-slug"*/ '../pages/ProductByCategory.vue'),
            title: settings.seo_title,
            meta: {
                guest : true,
                allowedUserType: ['User']
            }
        },
        {
            path: "/"+settings.url+'/category',
            name: "catalog_category_home",
            component: () => import(/* webpackChunkName: "Chunks/Site/Router/Category-slug"*/ '../pages/ProductByCategory.vue'),
            title: settings.seo_title,
            meta: {
                guest : true,
                allowedUserType: ['User']
            }
        }
    ]
}


export default routes
