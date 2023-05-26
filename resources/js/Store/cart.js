export const cart = {
    state: () => ({
        cart : [],
        count : 0,
        price: 0
    }),
    getters: {
        totalPrice(state) {
            return state.cart.reduce((total, product) => {
                if(product)
                    return total + product.price * product.count;
                console.log(state.cart)
            }, 0);
        }
    },
    mutations: {
        addCart(state, product){
            const index = state.cart.findIndex(item => item && item.id === product.id)
            if (index === -1) {
                state.cart.push({ ...product, count: 1 })
            } else {
                state.cart[index].count++
            }
            state.count++
        },
        deleteCart(state, product){
            const index = state.cart.findIndex(item => item && item.id === product.id)
            if (state.cart[index].count > 1) {
                state.cart[index].count--
            } else {
                state.cart.splice(index, 1)
            }
            state.count--
        },
        deleteProductCart(state, product){
            const index = state.cart.findIndex(item => item && item.id === product.id)
            state.count = state.count - state.cart[index].count
            state.cart.splice(index, 1)
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
