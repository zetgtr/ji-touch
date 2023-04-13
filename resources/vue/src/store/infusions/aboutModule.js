import axios from "axios";
// ниже название панели + Module
export const aboutModule = { 
    state: () => ({
        // тут алиас столбцов : тип данных
        tabs: [],
    }),
    getters: {
        
    },
    mutations: {
        // для каждого алиаса свой set
        setTabs(state, tabs){
            state.tabs = tabs
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/about', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации 
                commit('setTabs', response.data[0].tabs)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
