import {PageRoute} from "@/typings/route";
const {  VITE_ROUTE_HOME_PATH } = import.meta.env;

/** 根路由 */
export const ROOT_ROUTE:PageRoute = {
    name: 'root',
    path: '/',
    redirect: VITE_ROUTE_HOME_PATH,
    meta: {
        title: 'Root'
    }
}
/** 固定的路由 */
export const constantRoutes: PageRoute[] = [
    ROOT_ROUTE,
    {
        name: 'login',
        path: '/login',
        component: ()=> import('@/views/login/index.vue'),
        meta: {
            title: '登录',
        },

    }
]