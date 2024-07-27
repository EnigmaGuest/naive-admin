<template>
  <div class="flex-col h-full gap-12px">
    <n-card title="" size="small">
      <n-collapse>
        <n-collapse-item title="搜索条件">
          <div>可以</div>
        </n-collapse-item>
      </n-collapse>
    </n-card>
    <n-card class="flex-1 overflow-hidden" title="数据" size="small">
      <NDataTable :columns="columns"
                  :data="pageState.tableData"
                  size="small"
                  :scroll-x="962"
                  flex-height
                  :loading="pageState.loading"
                  class="h-full"
      ></NDataTable>
    </n-card>   
  </div>
</template>
<script lang="ts" setup>
import BaseTable from "@/components/basic/table/index.vue";
import {onMounted, reactive, ref} from "vue";
import {BaseFormItemProps} from "@/components/basic/form/index";
import {ITableColumn} from "@/components/basic/table/index";

const pageInfo = reactive({
  path: "/system/role/menu",
  name: "角色和菜单关联",
});
const pageState = reactive({
  drawerVisible: false,
  isUpdate: false,
  editData: null,
  loading: false,
  tableData: [],
})
const formRef = ref()
const formData = reactive({})
const formFiledList: Array<BaseFormItemProps> = [
  {field: 'roleId', label: '角色id', filedType: 'string', isSearch: false, required: true},
  {field: 'menuId', label: '菜单ID', filedType: 'string', isSearch: false, required: true},
]

const columns = [
  {key: 'roleId', title: '角色id', type: 'string'},
  {key: 'menuId', title: '菜单ID', type: 'string'},
]

/**
 * 获取数据
 * @param params
 */
async function onGetData(params?: any) {
  pageState.loading = true
  // 接口调用，将后台的数据赋值给tableData
  pageState.tableData = []
  for (let i = 0; i < 20; i++) {
    pageState.tableData.push({
      roleId: `${i}`,
      menuId: `${i}`,
    })
  }
  pageState.loading = false
}

/**
 * 添加
 */
async function onAdd() {
  pageState.drawerVisible = true
  pageState.isUpdate = false
}

/**
 * 编辑
 * @param row
 */
async function onEdit(row: any) {
  pageState.drawerVisible = true
  pageState.isUpdate = true
  pageState.editData = row
}

/**
 * 删除
 * @param row
 * @returns {Promise<void>}
 */
async function onDelete(row: any) {
  // @ts-ignore
  window.$message.success("删除成功")
  await onGetData()
}

onMounted(() => {
  onGetData()
})
</script>