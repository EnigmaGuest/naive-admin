<template>
  <base-dropdown-container :options="options" size="medium" >
      <div class="flex-center cursor-pointer">
        <n-avatar :src="avatarUrl" round></n-avatar>
      </div>
  </base-dropdown-container>
</template>
<script setup lang="ts">
import localAvatarUrl from  "@/assets/images/linki.png"
import {useAuthStore} from "@/store";
import {System} from "@/typings/system";
import {renderIcon} from "@/utils";
const ua = useAuthStore()
const avatarUrl = ua.userInfo?.avatar || localAvatarUrl
// 个人中心 系统设置 退出登录
const options:System.GlobalDropdown[] = [
  {
    key: 'profile',
    label: '个人中心',
    icon: renderIcon("line-md:person"),
  },
  {
    key: 'setting',
    label: '系统设置',
    icon: renderIcon('line-md:cog-loop'),
  },
  {
    key: 'logout',
    label: '退出登录',
    icon: renderIcon('line-md:logout'),
  },
]
</script>

<style scoped>

</style>