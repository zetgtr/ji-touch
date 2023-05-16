import axios from "axios";

export const orderModule = {
    state: () => ({
        title: '',
        desc: "",
    }),
    getters: {
        row: state => {
            return Object.keys(state).reduce((obj, key) => {
                obj[key] = state[key];
                return obj;
            }, {});
        },
    },
    mutations: {
        setTitle(state, title) {
            state.title = title
        },
        setDesc(state, desc) {
            state.desc = desc
        },
    },
    actions: {
        async fetchInfo({ state, commit }, argument) {
            try {
                const response = await axios.get('/api/panel_data/order', {
                    data: argument,
                    params: {
                    }
                });
                commit('setTitle', response.data[0].title)
                commit('setDesc', response.data[0].desc)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
