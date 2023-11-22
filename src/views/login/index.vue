<template>
  <div class="account-root">
    <n-grid cols="5" item-responsive>
      <n-grid-item span="0 400:5 600:5 800:5 1000:2">
        <div class="text-2xl text-blue">123</div>
      </n-grid-item>
      <n-grid-item span="0 400:5 600:5 800:5 1000:3">
        <icon-local-banner class="text-200 text-blue"  />
      </n-grid-item>
    </n-grid>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.account-root {
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100vh;

  &-item {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-left {
    background: linear-gradient(140.02deg, #f9f9fa, #f7f8ff);
  }
}
</style>