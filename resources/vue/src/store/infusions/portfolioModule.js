 import axios from "axios";

export const portfolioModule = {
    state: () => ({
        title: '',
        more: '',
        items: [],
        btn: '',
    }),
    getters: {
        setItemsWithId(state){
            return [...state.items].forEach((item, index) => {item.id = index;});
        }
    },
    mutations: {
        setTitle(state, title){
            state.title = title
        },
        setMore(state, more){
            state.more = more
        },
        setItems(state, items){
            state.items = items
        },
        setBtn(state, btn){
            state.btn = btn
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/portfolio', {
                    data: argument,
                    params: {
                    }
                });
                console.log(response.data);
                commit('setTitle', response.data[0].title)
                commit('setMore', response.data[0].more)
                commit('setItems', response.data[0].items)
                commit('setBtn', response.data[0].btn)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
