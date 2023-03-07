import './bootstrap';

import { createApp } from 'vue'
import App from '../vue/src/App.vue'
import router from '../vue/src/router'
import store from '../vue/src/store'



createApp(App).use(store).use(router).mount('#app')
