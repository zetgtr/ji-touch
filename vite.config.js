import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';


const host = 'localhost'
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.sass',
                'resources/sass/admin/style.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host,
        hmr: {host},
    }
});
