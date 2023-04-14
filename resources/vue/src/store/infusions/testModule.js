import axios from "axios";
// ниже название панели + Module
export const testModule = {
    state: () => ({
        // тут алиас столбцов : тип данных
          test : "" ,
        }),
    getters: {

    },
    mutations: {
        // для каждого алиаса свой set
        setTest(state, test){
            state.test = test
        },
        },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/test', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации
                  commit('setTest', response.data[0].test)
                } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
