import {h} from "vue";
import EgIcon from "@/components/common/eg-icon.vue";
import {PageRoute} from "@/typings/route";
import {System} from "@/typings/system";


// 渲染icon
export const renderIcon = (icon?: string, localIcon?: string) => {
    if (!icon && !localIcon) {
        console.warn('not find icon')
        return null
    }
    // 默认p 内容为icon
    return () => h(EgIcon, {icon, localIcon})
}

// 生成菜单
export const generateMenus = (pages:PageRoute[]) => {
    const menuOptions: System.GlobalMenu[] = []
    pages.forEach((page: PageRoute) => {
        if (page.meta?.title) {
            const globalMenu: System.GlobalMenu  = {
                label: page.meta.title,
                key: page.name,
                icon: renderIcon(page.meta.icon, page.meta.localIcon),
                routeName: page.name,
                routePath: page.path,
                meta: page.meta,
                component: page.component,
            }
            // 判断是否只有一个子菜单
            const isRoot = page?.children?.filter((item: PageRoute) => !Boolean(item?.meta?.hide))?.length === 1;
            if (isRoot){
                // 如果只有一个子菜单，那么就不显示父级菜单
                const rootMenu = page?.children?.filter((item: PageRoute) => !Boolean(item?.meta?.hide))[0]
                globalMenu.key = rootMenu.name
                globalMenu.label = rootMenu.meta?.title
                globalMenu.routeName = rootMenu.name
                globalMenu.routePath = rootMenu.path
                globalMenu.component = rootMenu.component
                globalMenu.icon = renderIcon(rootMenu.meta?.icon, rootMenu.meta?.localIcon)
            }else {
                // 如果有多个子菜单，那么就显示父级菜单（是过滤隐藏后的）
                globalMenu.children = page?.children?.filter((item: PageRoute) => !Boolean(item?.meta?.hide))?.map((item: PageRoute) => {
                    return {
                        label: item.meta?.title,
                        key: item.name,
                        icon: renderIcon(item.meta?.icon, item.meta?.localIcon),
                        routeName: item.name,
                        routePath: item.path,
                        component: item.component,
                        meta: page.meta,
                    }
                })
            }
            menuOptions.push(globalMenu)
        }
    })
    return menuOptions
}
export * from './color'