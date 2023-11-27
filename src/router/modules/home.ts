import {PageRoute} from "@/typings/route";

const router: PageRoute =
    {
        name: 'home',
        path: '/home',
        redirect: '/home/index',
        meta: {
            title: '首页',
            icon: 'mdi:monitor-dashboard',
        },
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                name: 'home_index',
                path: '/home/index',
                meta: {
                    title: '首页',
                    icon: 'mdi:monitor-dashboard',
                },
                component: () => import('@/views/home/index.vue'),
            },
        ]
    }

export default router;