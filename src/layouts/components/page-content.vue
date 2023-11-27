<template>
  <n-scrollbar style="max-height:calc(100vh - 122px)" :trigger="'none'" v-if="true">
    <div class="flex-col items-center justify-center ">
      <router-view>
        <template v-slot="{ Component, route }">
          <transition name="zoom-fade" mode="out-in" :appear="true">
            <component :is="Component" :key="route.fullPath"></component>
          </transition>
        </template>
      </router-view>
      <n-back-top :right="30"/>
    </div>
  </n-scrollbar>
  <router-view v-else>
    <template v-slot="{ Component, route }">
      <transition mode="out-in" :appear="true">
        <component :is="Component" :key="route.fullPath"></component>
      </transition>
    </template>
  </router-view>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>