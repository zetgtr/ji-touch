import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import {createSSRApp, h} from 'vue'
import store from "../vue/src/store";
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';


createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            return pages[`./Pages/${name}.vue`]
        },
        setup({ App, props, plugin }) {

            const app = createSSRApp({render: () => h(App, props)})
            app.config.globalProperties.$replaceNewLines = function (string) {
                return string.replace(/\/\/n/g, '<br>');
            }
            return app.use(plugin)
                .use(store)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
        },
    }),
)
