import axios from "axios";
import {useRouter} from "vue-router";
// ниже название панели + Module
export const catalogModule = {
    state: () => ({
        categories : [],
        products : [],
        url: "",
        secondCategory: {},
        breadcrumbs: [],
    }),
    getters: {

    },
    mutations: {
        setCategory(state, categories){
            state.categories = categories
        },
        setProduct(state, products){
            state.products = products
        },
        setUrl(state, url){
            state.url = url
        },
        setSecondCategory(state, secondCategory){
            state.secondCategory = secondCategory
        },
        setBreadcrumbs(state, breadcrumbs){
            state.breadcrumbs = breadcrumbs
        },
    },
    actions: {
        async getCategoryBySlug({state, commit}, url) {
            try {
                console.log(111)
                const response = await axios.get('/api/get_catalog/'+url+"|Category");
                console.log(response.data)
                commit('setCategory', response.data.categories)
                commit('setProduct', response.data.products)
                commit('setSecondCategory', response.data.secondCategory)
                commit('setUrl', url)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
        async getCategoryByHome({state, commit}) {
            try {
                console.log(222)
                const response = await axios.get('/api/get_catalog/'+"catalog|Category");
                console.log(response.data)
                commit('setCategory', response.data.categories)
                commit('setProduct', response.data.products)
                commit('setSecondCategory', {title:"Каталог"})
                commit('setUrl', undefined)
            } catch (e) {
                console.log(e)
            } finally {
            }
        },
        async getBreadcrumb({state, commit}, url){
            const response = await axios.get('/api/get_catalog_breadcrumb/'+url);
            commit('setBreadcrumbs', response.data)
        }
    },
    namespaced: true
}
