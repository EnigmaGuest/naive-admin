<template>
  <div class="w-full ">
    <div class="h-200">{{ JSON.stringify(us.userInfo) }}</div>
    <eg-icon local-icon="logo" class="text-xl"/>
    <eg-icon icon="material-symbols:3g-mobiledata-sharp" class="text-xl"/>
    <n-button type="primary" @click="goNotFund">去404</n-button>
  </div>
</template>
<script setup lang="ts">

import Layout from "@/layouts/index.vue";
import {useAuthStore} from "@/store";
import {useRouter} from "vue-router";

const us = useAuthStore()
const router = useRouter()
function goNotFund() {
  router.push({path: '/404'})
}
</script>

<style scoped>

</style>