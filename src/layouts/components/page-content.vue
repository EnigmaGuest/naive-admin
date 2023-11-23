<template>
  <n-scrollbar style="max-height:calc(100vh - 122px)" :trigger="'none'">
   <div class="flex-col items-center justify-center">
     <slot></slot>
   </div>
  </n-scrollbar>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>