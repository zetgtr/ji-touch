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
        async fetchInfo({state, commit}, argument) {
            try {
                const router = useRouter();
                const route = router.currentRoute._value
                const parts = route.path.split("/");
                const url = parts[parts.length - 1];
                const response = await axios.get('/api/get_catalog/'+url+"|"+route.name, {
                    data: argument,
                    params: {
                    }
                });
                console.log(response.data)
                // коммит название мутации
                  commit('setCategory', response.data.categories)
                  commit('setProduct', response.data.products)
                  commit('setUrl', url)
                } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
