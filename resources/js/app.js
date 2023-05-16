// import { createApp } from 'vue';
// import App from '../vue/src/App.vue';
import store from './Store';
// import components from '../vue/src/components/UI';
//
// const app = createApp(App)


//
//
// app.use(store).use(router).mount('#app');

import {createApp, createSSRApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        const app = createSSRApp({render: () => h(App, props)})
        app.config.globalProperties.$replaceNewLines = function (string) {
            return string.replace(/\/\/n/g, '<br>');
        }
        app.use(plugin)
            .use(store)
            .mixin({methods: {route: window.route}})
            .mount(el)
    },
})
