import {createApp} from 'vue'
import App from './App.vue'
import {router, setupRouter} from "@/router";
import {setupAssets, setupLoading} from "@/init";
import {setupStore} from "@/store";


async function initApp() {

  setupLoading()
  
  const app = createApp(App);
  // 引入unocss css
  setupAssets();

  setupStore(app);

  await setupRouter(app);

  app.mount('#app')
}

void initApp()

