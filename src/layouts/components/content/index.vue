<template>
  <n-scrollbar style="max-height:calc(100vh - 122px)" :trigger="'none'">
    <div class="flex-col items-center justify-center ">
      <router-view >
        <template v-slot="{ Component, route }">
          <transition :name="theme.isAnimate?theme.animation:''" mode="out-in" :appear="true" >
            <keep-alive :include="routeStore.cacheRoutes">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </template>
      </router-view>
      <n-back-top :right="30"/>
    </div>
  </n-scrollbar>
</template>
<script setup lang="ts">
import {useRouteStore, useThemeStore} from "@/store";

const theme = useThemeStore();
const routeStore = useRouteStore();

</script>

<style lang="scss" scoped>

</style>