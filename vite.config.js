import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';
import vueJsx from '@vitejs/plugin-vue-jsx';


const host = 'localhost'
const path = require('path')

export default defineConfig({
    plugins: [
        vue(), // write this
        laravel({
            input: [
                'resources/sass/app.sass',
                'resources/sass/admin/style.scss',
                'resources/js/app.js'
            ],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
      },
    flags: {
        // Установите флаг experimental-modules
        // при запуске Vite
        // для использования модулей ECMAScript
        // https://vitejs.dev/guide/features.html#experimental-flag-notice
        mode: 'development',
        'experimental-modules': true
    },
    server: {
        host,
        hmr: {host},
    }
});
