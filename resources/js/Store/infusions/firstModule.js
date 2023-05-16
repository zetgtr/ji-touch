 import axios from "axios";

export const firstModule = {
    state: () => ({
        title: '',
        desc: '',
        btn: '',
    }),
    getters: {

    },
    mutations: {
        setTitle(state, title){
            state.title = title
        },
        setDesc(state, desc){
            state.desc = desc
        },
        setBtn(state, btn){
            state.btn = btn
        },
    },
    actions: {
        async setFirst({state, commit}, response) {
            try {
                commit('setTitle', response[0].title)
                commit('setDesc', response[0].desc)
                commit('setBtn', response[0].btn)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
