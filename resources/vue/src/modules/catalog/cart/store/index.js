import axios from "axios";
import {useRouter} from "vue-router";
// ниже название панели + Module
export const cartModule = {
    state: () => ({
        cart : [],
        count : 0,
    }),
    getters: {

    },
    mutations: {
        addCart(state, product){
            if(state.cart[product.id])
                state.cart[product.id]= { ...product, count:state.cart[product.id].count+1}
            else
                state.cart[product.id] = {...product,count:1}
            state.count++
            console.log(state.cart)
        },
        deleteCart(state, product){
            if(state.cart[product.id].count > 1)
                state.cart[product.id]= { ...product, count:state.cart[product.id].count-1}
            else
                delete state.cart[product.id]
            state.count--
        },
        deleteProductCart(state, product){
            state.count = state.count - state.cart[product.id].count
            delete state.cart[product.id]
        },
        removeCart(state){
            state.count = 0
            state.cart = [];
        }
    },
    actions: {
        async addCart({state, commit}, product) {
            commit("addCart",product)
        },
        async deleteCart({state, commit}, product) {
            commit("deleteCart",product)
        },
        async removeCart({state, commit}) {
            commit("removeCart")
        },
        async deleteProductCart({state, commit}, product) {
            commit("deleteProductCart",product)
        }

    },
    namespaced: true
}
