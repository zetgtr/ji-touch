import axios from "axios";

const routes = await categoryRoute()
async function categoryRoute(){
    const response = await axios.get("/api/catalog_route");
    const settings = response.data[0];
    return [
        {
            path: "/"+settings.url+'/cart',
            name: "catalog_cart",
            component: () => import(/* webpackChunkName: "Chunks/Site/Router/Category-slug"*/ '../pages/Cart.vue'),
            title: settings.seo_title,
            meta: {
                guest : true,
                allowedUserType: ['User']
            }
        }
    ]
}


export default routes
