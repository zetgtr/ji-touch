import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';


const host = 'localhost'
export default defineConfig({
    plugins: [
        vue(), // write this
        laravel({
            input: [
                'resources/sass/app.sass',
                'resources/sass/admin/style.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
    server: {
        host,
        hmr: {host},
    }
});
