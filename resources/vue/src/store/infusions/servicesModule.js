 import axios from "axios";

export const servicesModule = {
    state: () => ({
        desc: '',
        slider: [],
        slider_thumb: []
    }),
    getters: {
        SliderThumbWithId(state){
            return [...state.slider_thumb].forEach((item, index) => {item.id = index ;});
        }
    },
    mutations: {
        setDesc(state, desc){
            state.desc = desc
        },
        setSlider(state, slider){
            state.slider = slider
        },
        setSliderThumb(state, slider_thumb){
            state.slider_thumb = slider_thumb
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/services', {
                    data: argument,
                    params: {
                    }
                });
                commit('setDesc', response.data[0].desc)
                commit('setSlider', response.data[0].slider[0].slider_item)
                commit('setSliderThumb', response.data[0].slider[0].slider_thumb)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
