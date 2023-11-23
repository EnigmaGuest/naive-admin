<template>
  <div class="flex-center nowrap-hidden h-56px text-primary transition-all">
    <icon-local-logo class="text-32px " :class="{ 'mr-2':!collapsed}"/>
    <h2 v-show="!collapsed" class="text-xl ">慧入住后台管理系统</h2>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  // 侧边栏是否折叠
  collapsed: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">

</style>