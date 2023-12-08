<template>
  <n-scrollbar style="max-height:calc(100vh - 122px)" :trigger="'none'">
    <div class="flex-col">
      <router-view v-slot="{ Component, route }">
          <transition :name="theme.isAnimate?theme.animation:''" mode="out-in" :appear="true"  >
            <keep-alive :max="10">
              <component :is="Component" :key="route.fullPath" v-if="routeStore.reloadFlag" />
            </keep-alive>
          </transition>
      </router-view>
      <n-back-top :right="30" class="z100" />
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