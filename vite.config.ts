import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'components',
            fileName: format => `components.${format}.js`,
        },
        rollupOptions: {
            external: [
                'vue'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        sourcemap: true,
    },
    plugins: [
        vue()
    ],
    resolve: {
        dedupe: [
            'vue'
        ],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    }
})
