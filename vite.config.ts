import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite';
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";
import {getRootPath, getSrcPath} from "./build";
// https://vitejs.dev/config/


const rootPath = getRootPath();
const srcPath = getSrcPath();
// 插件
const plugins = [
    vue(),
    UnoCSS(),
    Components({
        dts: 'src/typings/components.d.ts',
        resolvers: [
            NaiveUiResolver(),
        ]
    }),
]

export default defineConfig({
    resolve: {
        alias: {
            '~': rootPath,
            '@': srcPath,
        }
    },
    plugins: plugins,
    server: {
        host: '0.0.0.0',
        port: 8000,
        open: true
    }
})
