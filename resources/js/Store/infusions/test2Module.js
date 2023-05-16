import axios from "axios";
// ниже название панели + Module
export const test2Module = {
    state: () => ({
        // тут алиас столбцов : тип данных
          test2 : "" ,
        }),
    getters: {

    },
    mutations: {
        // для каждого алиаса свой set
        setTest2(state, test2){
            state.test2 = test2
        },
        },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/test2', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации
                  commit('setTest2', response.data[0].test2)
                } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
