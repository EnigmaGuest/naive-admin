import {PageRoute} from "@/typings/route";

const router: PageRoute =
    {
        name: 'home',
        path: '/home',
        meta: {
            title: '首页',
            icon: 'mdi:monitor-dashboard',
        },
        component: () => import('@/views/home/index.vue'),
    }

export default router;