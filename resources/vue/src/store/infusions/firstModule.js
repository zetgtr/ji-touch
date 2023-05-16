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
    // actions: {
    //     async fetchInfo({state, commit}, argument) {
    //         try {
    //             const response = await axios.get('/api/panel_data/first', {
    //                 data: argument,
    //                 params: {
    //                 }
    //             });
    //             commit('setTitle', response.data[0].title)
    //             commit('setDesc', response.data[0].desc)
    //             commit('setBtn', response.data[0].btn)
    //         } catch (e) {
    //             console.log(e)
    //         } finally {
    //
    //         }
    //     },
    // },
    namespaced: true
}
