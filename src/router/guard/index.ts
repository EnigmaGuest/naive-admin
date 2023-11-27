import {Router} from "vue-router";
import {PageRoute} from "@/typings/route";
import {routeModuleList, router} from "@/router";
import {useRouteStore} from "@/store/modules/route";
import {createDynamicRouteGuard} from "@/router/guard/dynamic";
import {useAuthStore} from "@/store";


export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        window.$loadingBar?.start();
        const ua = useAuthStore();
        const isDy =  await createDynamicRouteGuard(to,from,next);
        if (!isDy) return;
        next();
    });
    router.afterEach(to => {
        window.$loadingBar?.finish();
    });
    router.onError((error) => {
        console.log(error);
    })
}