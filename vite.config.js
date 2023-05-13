import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';


const host = 'localhost'
const path = require('path')

export default defineConfig({
    plugins: [
        vue(), // write this
        laravel({
            input: [
                'resources/sass/app.sass',
                'resources/sass/admin/style.scss',
                'resources/js/assets/scss/index.scss',
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
    server: {
        host,
        hmr: {host},
    }
});
