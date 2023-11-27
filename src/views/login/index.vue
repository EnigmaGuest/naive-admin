<template>
  <div class="account-root">
    <n-grid cols="5" item-responsive>
      <n-grid-item span="0 400:5 600:5 800:5 1000:2">
        <div class="text-2xl text-blue">123</div>
      </n-grid-item>
      <n-grid-item span="0 400:5 600:5 800:5 1000:3">
        <!--        <icon-local-banner class="text-200 text-blue"  />-->
        <icon-local-logo class="text-48px "/>
        <n-button type="primary" class="mt-4" @click="login">登录</n-button>
      </n-grid-item>
    </n-grid>
  </div>
</template>
<script setup lang="ts">

import {useAuthStore} from "@/store";
import {useRouter} from "vue-router";
import {router as globalRouter} from "@/router";

const ua = useAuthStore()

const router = useRouter()
const login = async () => {
  await ua.login()
  await goHome()
}

 function goHome() {
  const {query} = router.currentRoute.value
  if (query?.redirect) {
    console.log(query.redirect)
     router.push({path: query.redirect as string})
  } else {
    router.push({name: 'home'})
  }
}
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