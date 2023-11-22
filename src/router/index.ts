import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import {App} from "vue";
import {constantRoutes} from "@/router/common";

const {  VITE_BASE_URL } = import.meta.env;

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home"
    }, {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
    }]
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(VITE_BASE_URL),
    routes: constantRoutes, // `routes: routes` 的缩写
})

export async function setupRouter(app: App) {
    app.use(router);
    // createRouterGuard(router);
    await router.isReady();
}