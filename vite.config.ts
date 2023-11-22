import {defineConfig, loadEnv} from 'vite'
import {getRootPath, getSrcPath} from "./build";
import {createVitePlugins} from "./build/plugins";

// https://vitejs.dev/config/


const rootPath = getRootPath();
const srcPath = getSrcPath();


export default defineConfig(({command, mode}) => {
    const viteEnv = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;
    return {
        base: viteEnv.VITE_BASE_URL,
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath,
            }
        },
        plugins: createVitePlugins(viteEnv),
        server: {
            host: '0.0.0.0',
            port: 8000,
            open: true
        }
    }
})
