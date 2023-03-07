import './bootstrap';

import Datepicker from "./utils/AirDatepicker";

Datepicker.init();

import { createApp } from 'vue'
import App from '../vue/src/App.vue'
import router from '../vue/src/router'
import store from '../vue/src/store'

import '../vue/src/assets/index.scss'

createApp(App).use(store).use(router).mount('#app')
