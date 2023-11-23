<template>
  <n-menu  ref="menuInstRef" :collapsed="props.collapsed" :options="menuOptions" ></n-menu>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
import {routeModuleList} from "@/router";
import {PageRoute} from "@/typings/route";
const menuOptions = reactive([])
routeModuleList.forEach((route: PageRoute) => {
  if (route.meta?.title) {
    menuOptions.push({
      label: route.meta.title,
      key: route.name,
    })
  }
})
const menuInstRef = ref()

menuOptions.push( {
  label: '学一',
  key: '学一',
  children: [
    {
      label: '也难吃',
      key: '也难吃'
    }
  ]
})
const props = defineProps({
  collapsed: {
    // 侧边栏菜单是否收起
    type: Boolean,
  },
})
</script>

<style scoped>

</style>