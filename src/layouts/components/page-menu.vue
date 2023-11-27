<template>
  <n-menu ref="menuRef"
          :value="activeKey"
          :expanded-keys="expandedKeys"
          accordion
          :collapsed="props.collapsed"
          :options="menuOptions"
          :collapsed-icon-size="24"
          :collapsed-width="64"
          :indent="24"
          @update:value="clickMenuItem"
          @update:expanded-keys="menuExpanded"
          show-trigger/>
</template>
<script setup lang="ts">
import {computed, h, reactive, ref, watch} from "vue";
import {useRouteStore} from "@/store/modules/route";
import {useRoute, useRouter} from "vue-router";

const menuOptions = useRouteStore().menus

const menuRef = ref()
const route = useRoute();
const router = useRouter();
const activeKey = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string);
const expandedKeys = ref<string[]>([]);
const props = defineProps({
  collapsed: {
    // 侧边栏菜单是否收起
    type: Boolean,
  },
})
// 菜单点击
const clickMenuItem = (key: string, item: any) => {
  if(router.currentRoute.value.name !== key){
    router.push({name: key})
  }
}
// 菜单展开
const menuExpanded = (keys: string[]) => {
  expandedKeys.value = keys;
}
const getActiveKeyPathsOfMenus = (activeKey: string, menus: System.GlobalMenu[]) => {
  const activeKeyPaths: string[] = [];
  if (!activeKey) {
    return activeKeyPaths;
  }
  // menus中的channel的key是否等于activeKey
  menus.forEach((menu) => {
    if (menu.key === activeKey) {
      activeKeyPaths.push(activeKey);
    } else if (menu.children) {
      const childActiveKeyPaths = getActiveKeyPathsOfMenus(activeKey, menu.children);
      if (childActiveKeyPaths.length) {
        activeKeyPaths.push(menu.key);
        activeKeyPaths.push(...childActiveKeyPaths);
      }
    }
  });
  return activeKeyPaths;
};

watch(
  () => route.name,
  () => {
    expandedKeys.value = getActiveKeyPathsOfMenus(activeKey.value, menuOptions);

  },
  { immediate: true }
);
// updateMenu()
</script>

<style scoped>

</style>