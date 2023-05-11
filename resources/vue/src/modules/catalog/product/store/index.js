import axios from "axios";
import {useRouter} from "vue-router";
// ниже название панели + Module
export const productModule = {
    state: () => ({
        product : [],
        url: "",
    }),
    getters: {

    },
    mutations: {
        setProduct(state, product){
            state.product = product
        },
        setUrl(state, url){
            state.url = url
        },
    },
    actions: {
        async getProductBySlug({state, commit}, url) {
            try {
                const response = await axios.get('/api/get_catalog/'+url+"|Product");
                console.log(response.data)
                commit('setProduct', response.data.product)
                commit('setUrl', url)
            } catch (e) {
                console.log(e)
            } finally {

            }
        }
    },
    namespaced: true
}
