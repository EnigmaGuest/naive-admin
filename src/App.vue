<script setup lang="ts">
import { darkTheme,useOsTheme } from 'naive-ui'
import {computed} from "vue";

const theme = computed(()=>{
  const osThemeRef = useOsTheme()
  if (osThemeRef.value === 'dark') {
    document.documentElement.classList.add('dark');
    return darkTheme
  }
  document.documentElement.classList.remove('dark');
  return null
})
</script>

<template>
  <n-config-provider :theme="theme" >
    <app-provider>
      <router-view/>
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
