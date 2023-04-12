 import axios from "axios";

export const contactModule = {
    state: () => ({
        phone: '',
        email: "",
    }),
    getters: {

    },
    mutations: {
        setPhone(state, phone){
            state.phone = phone
        },
        setEmail(state, email){
            state.email = email
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/contact', {
                    data: argument,
                    params: {
                    }
                });
                commit("setPhone", response.data[0].phone)
                commit("setEmail", response.data[0].email)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
