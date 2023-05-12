// import { createApp } from 'vue';
// import App from '../vue/src/App.vue';
// import store from '../vue/src/store';
// import components from '../vue/src/components/UI';
//
// const app = createApp(App)
//
// app.config.globalProperties.$replaceNewLines = function (string) {
//   return string.replace(/\/\/n/g, '<br>');
// }
//
//
// app.use(store).use(router).mount('#app');

import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { router } from '../vue/src/router';

console.log(123)
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        console.log(pages)
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createSSRApp({render: () => h(App, props)})
            .use(plugin)
            .mixin({methods: {route: window.route}})
            .mount(el)
    },
}).then(r => console.log(r))
