 import axios from "axios";

export const contactModule = {
    state: () => ({
        phone: '',
        email: "",
        telegram: "",
        whatsapp: "",
        address: "",
        worktime: "",
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
        setPhone(state, phone){
            state.phone = phone
        },
        setEmail(state, email){
            state.email = email
        },
        setTelegram(state, telegram){
            state.telegram = telegram
        },
        setWhatsapp(state, whatsapp){
            state.whatsapp = whatsapp
        },
        setAddress(state, address){
            state.address = address
        },
        setWorktime(state, worktime){
            state.worktime = worktime
        },
        setMap(state, map){
            state.map = map
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
                commit("setPhone", response.data.phone.value)
                commit("setEmail", response.data.email.value)
                commit("setTelegram", response.data.telegram.value)
                commit("setWhatsapp", response.data.whatsapp.value)
                commit("setAddress", response.data.address.value)
                commit("setWorktime", response.data.worktime.value)
                commit("setMap", response.data.map.value)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
