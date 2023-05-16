import axios from "axios";
// ниже название панели + Module
export const reviewsModule = { 
    state: () => ({
        // тут алиас столбцов : тип данных
        items: [],
    }),
    getters: {
        
    },
    mutations: {
        // для каждого алиаса свой set
        setItems(state, items){
            state.items = items
        },
        
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/reviews', {
                    data: argument,
                    params: {
                    }
                });
                console.log(response.data);
                commit('setItems', response.data[0].items)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
