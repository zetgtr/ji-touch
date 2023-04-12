 import axios from "axios";

export const companyModule = {
    state: () => ({
        subtitle: '',
        title: "",
        text: "",
        desc: "",
        more: ""
    }),
    getters: {

    },
    mutations: {
        setSubtitle(state, subtitle){
            state.subtitle = subtitle
        },
        setTitle(state, title){
            state.title = title
        },
        setText(state, text){
            state.text = text
        },
        setDesc(state, desc){
            state.desc = desc
        },
        setMore(state, more){
            state.more = more
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/company', {
                    data: argument,
                    params: {
                    }
                });
                commit('setSubtitle', response.data[0].subtitle)
                commit('setTitle', response.data[0].title)
                commit('setText', response.data[0].text)
                commit('setDesc', response.data[0].desc)
                commit('setMore', response.data[0].more)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
