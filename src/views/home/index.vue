<template>
  <div class=" flex-col flex-1">
    <div class="h-200">{{ JSON.stringify(us.userInfo) }}</div>
    <eg-icon local-icon="logo" class="text-xl"/>
    <eg-icon icon="material-symbols:3g-mobiledata-sharp" class="text-xl"/>
    <n-space>
      <n-input v-model:value="state.name"/>
    </n-space>
    <div>
      <n-button type="primary" @click="goNotFund">去404</n-button>
    </div>
    <div>
      <n-button type="primary" @click="testGet">testGet</n-button>
    </div>
  </div>
</template>
<script setup lang="ts">

import {useAuthStore} from "@/store";
import {useRouter} from "vue-router";
import {reactive} from "vue";
import {login, textGet} from "@/service";

const us = useAuthStore()
const router = useRouter()
const state = reactive({
  name: 'home'
})

async function goNotFund() {
  const data = await login({phone: "admin", password: "admin"})  // 测试接口
  console.log(data)
}

async function testGet() {
  await textGet()
}
</script>

<style scoped>

</style>