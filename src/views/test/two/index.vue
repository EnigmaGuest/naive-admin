<template>
  <n-card title="测试2" class=" w-full rounded-3">

    <BaseTable :columns="columns" :data="data"  />
  </n-card>
</template>
<script setup lang="ts">

import {computed, reactive} from "vue";
import {ITableColumn} from "@/components/basic/table/index";
import BaseTable from "@/components/basic/table/index.vue";

const columns = reactive<ITableColumn[]>([
  {
    field: "name",
    title: "姓名",
    type: "string",
  },
  {
    field: "age",
    title: "年龄",
    type: "string",
  }
])
const data = computed(()=>{
  return getTestTable()
})
function getTestTable(){
  // for 100次
  let data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      name: '特产'+i,
      age: ""+i,
    })
  }
  return data
}
</script>

<style scoped>

</style>