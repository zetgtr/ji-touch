import axios from "axios";
// ниже название панели + Module
export const articleModule = {
    state: () => ({
        // тут алиас столбцов : тип данных
          article : "" ,
        }),
    getters: {

    },
    mutations: {
        // для каждого алиаса свой set
        setArticle(state, article){
            state.article = article
        },
        },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/article', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации
                  commit('setArticle', response.data[0].article)
                } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
