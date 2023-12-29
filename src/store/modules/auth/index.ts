import {defineStore} from "pinia";
import {SecureStorage} from "@/store/plugins";
import {useRouteStore} from "@/store/modules/route";
import {useTabsStore} from "@/store";
import {usePageRouter} from "@/hooks";


interface AuthState {
    /** 用户信息 */
    userInfo: AdminUserVO;
    /** 用户token */
    token: string;
}



export const useAuthStore = defineStore({
    id: 'auth-store',
    state: (): AuthState => ({
        userInfo: null,
        token: ''
    }),
    getters: {
        /** 是否登录 */
        isLogin(state) {
            return Boolean(state?.token);
        },
        getAuthRouterName(state) {
            return state.userInfo?.menus?.map((item: any) => item?.routeKey)
        },
        getMenus(state) {
            return state.userInfo?.menus
        }
    },
    actions: {
        // 重置auth状态
        resetAuthStore() {
            this.$reset();
        },
        /**
         * 通过token进行登录
         * 登录成功后加载用户信息和路由
         * 调整到首页
         * @param token
         */
        async loginByToken(token: string) {
            this.token = token
            // 查询用户信息
            this.userInfo = {
                id: "1",
                phone: "18888888888",
                username: "admin",
                sex:'man',
                menus:[]
            }
            const ut = useRouteStore()
            const page = usePageRouter(false)
            await ut.initRoute()
            page.toHome()
        },
        /**
         * 退出登录
         */
        loginOut() {
            this.$reset();
            useRouteStore().resetRouteStore()
            useTabsStore().$reset()
        }
    },
    persist: {
        // 持久化存储 使用加密的存储方式
        storage: SecureStorage
    }
})