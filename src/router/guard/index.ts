import {Router} from "vue-router";



export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        window.$loadingBar?.start();
        console.log('beforeEach');
        // await createPermissionGuard(to,from,next);
        next();
    });
    router.afterEach(to => {
        // window.$loadingBar?.finish();
    });
    router.onError((error) => {
        console.log(error);
    })
}