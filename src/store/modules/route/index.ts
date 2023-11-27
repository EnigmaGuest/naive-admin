import {defineStore} from "pinia";
import {routeModuleList, router} from "@/router";
import {useAuthStore} from "@/store";
import {PageRoute} from "@/typings/route";
import {generateMenus, renderIcon} from "@/utils";

interface RouteState {

    /**
     * 权限路由模式:
     * - static - 前端声明的静态
     * - dynamic - 后端返回的动态
     */
    routeMode: ImportMetaEnv['VITE_AUTH_ROUTE_MODE'];

    /** 是否初始化了权限路由 */
    isInitRoute: boolean;

    /** 路由首页name(前端静态路由时生效，后端动态路由该值会被后端返回的值覆盖) */
    routeHomeName: string;
    /** 菜单 */
    menus: System.GlobalMenu[];
    /** 缓存的路由名称 */
    cacheRoutes: string[];
    /** 动态路由 */
    dynamicRoutes: PageRoute[];
}

export const useRouteStore = defineStore({
    id: 'app-route',
    state: (): RouteState => ({
        routeMode: import.meta.env.VITE_AUTH_ROUTE_MODE,
        isInitRoute: false,
        routeHomeName: import.meta.env.VITE_ROUTE_HOME_PATH,
        menus: [],
        cacheRoutes: [],
        dynamicRoutes: []

    }),
    actions: {
        /** 重置路由的store */
        resetRouteStore() {
            this.resetRoutes();
            this.$reset();
        },
        /** 重置路由数据，保留固定路由 */
        resetRoutes() {
            // 模块路由
            this.dynamicRoutes?.forEach(route => {
                router.removeRoute(route.name);
            });
        },
        handleRoute(routes:PageRoute[]) {
            routes.forEach(route => {
                router.addRoute(route)
            })
        },
        // 初始化动态路由
        async initDynamicRoute() {
            const { resetAuthStore } = useAuthStore()
            // 获取动态路由
            // 添加菜单
            this.isInitRoute = true;
        },
        // 初始化静态路由
        async initStaticRoute() {
            this.dynamicRoutes = routeModuleList
            // 添加菜单
            this.menus = generateMenus(this.dynamicRoutes)
            // 添加路由
            this.handleRoute(this.dynamicRoutes)
            this.isInitRoute = true;
        },
        /**
         * 初始化路由
         */
        async initRoute() {
            if (this.routeMode === 'static') {
                await this.initStaticRoute()
            } else {
                await this.initDynamicRoute()
            }
        }
    }
})
