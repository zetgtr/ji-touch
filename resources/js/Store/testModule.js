 import axios from "axios";

export const testModule = {
    state: () => ({
        row: [],
    }),
    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/test', {
                    data: argument,
                    params: {
                    }
                });
                console.group('запрос');
                console.log(response);
                console.groupEnd();
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
