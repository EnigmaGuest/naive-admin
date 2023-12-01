<template>
  <div style="height:calc(100vh - 122px)" class="w-full flex-col " :class="{'bg-#fff dark:bg-dark':!props.transparent}">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
/**
 * @description 通用容器组件
 *
 */
const props = defineProps({
  /** 是否透明 */
  transparent: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>