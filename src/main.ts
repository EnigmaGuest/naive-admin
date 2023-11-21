import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'virtual:uno.css'
import {router} from "@/router";



async function initApp() {
    const app = createApp(App);
    app.use(router);
    app.mount('#app')
}
void initApp()

