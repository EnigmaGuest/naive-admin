// Desc: 系统相关的类型定义
declare namespace System {

    // 菜单项
    type GlobalMenu = import('naive-ui').MenuOption & {
        key: string;
        label: string;
        routeName: string;
        routePath: string;
        icon?: () => import('vue').VNodeChild;
        children?: GlobalMenu[];
    }

}
// Desc: 主题相关的类型定义
declare namespace Theme {

}