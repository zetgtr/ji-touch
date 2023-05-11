import axios from "axios";
import {useRouter} from "vue-router";
// ниже название панели + Module
export const catalogModule = {
    state: () => ({
        categories : [],
        products : [],
        url: "",
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
    },
    actions: {
        async getCategoryBySlug({state, commit}, url) {
            try {
                console.log(111)
                const response = await axios.get('/api/get_catalog/'+url+"|Category");
                console.log(response.data)
                commit('setCategory', response.data.categories)
                commit('setProduct', response.data.products)
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
                commit('setUrl', undefined)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
