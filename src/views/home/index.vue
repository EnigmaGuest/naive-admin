<template>
  <app-container>
    <div class="h-200">{{ JSON.stringify(us.userInfo) }}</div>
    <eg-icon local-icon="logo" class="text-xl"/>
    <eg-icon icon="material-symbols:3g-mobiledata-sharp" class="text-xl"/>
    <n-space >
      <n-input v-model:value="state.name" />
    </n-space>
    <div><n-button type="primary" @click="goNotFund">去404</n-button></div>
  </app-container>
</template>
<script setup lang="ts">

import Layout from "@/layouts/index.vue";
import {useAuthStore} from "@/store";
import {useRouter} from "vue-router";
import {reactive} from "vue";

const us = useAuthStore()
const router = useRouter()
const state = reactive({
  name: 'home'
})
function goNotFund() {
  router.push({path: '/404'})
}
</script>

<style scoped>

</style>