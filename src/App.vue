<script setup lang="ts">
import {useThemeStore} from "@/store";
import {subscribeThemeStore} from "@/store/subscribe";
import {nextTick, provide, ref} from "vue";

const theme = useThemeStore()
subscribeThemeStore()

const routerStatus = ref(true)
const reload = ()=>{
  routerStatus.value = false
  nextTick(()=>{
    routerStatus.value = true
  })
}
provide('reload', reload)
</script>

<template>
  <n-config-provider :theme="theme.systemTheme" :theme-overrides="theme.getNaiveThemeOverrides">
    <app-provider>
      <router-view v-if="routerStatus" />
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
