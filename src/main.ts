import {createApp} from 'vue'
import App from './App.vue'
import {setupRouter} from "@/router";
import {setupAssets} from "@/init";


async function initApp() {
    const app = createApp(App);
    // 引入unocss css
    setupAssets();

    await setupRouter(app);

    app.mount('#app')
}

void initApp()

