import './bootstrap';
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from '../vue/src/App.vue'
import router from '../vue/src/router'
import store from '../vue/src/store'
import components from '../vue/src/components/UI'

createApp(App).use(store).use(router).mount('#app')
