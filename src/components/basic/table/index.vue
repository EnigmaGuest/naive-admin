<template>
  <!--  搜索  -->
  <n-card :bordered="false" class="w-full">
    <BaseForm v-if="props.searchFormItems.length"/>
  </n-card>
  <div class="flex-col">
    <div class="flex items-center justify-between w-full mb-12px">
      <!--     左     -->
      <div class="flex-col">
        <n-space align="start">
          <template v-if="props.title">
            <n-space align="center" size="small">
              <p class="text-16px">{{ props.title }}</p>
              <n-tooltip trigger="hover" v-if="props.desc">
                <template #trigger>
                  <icon-line-md:question-circle class="text-18px text-gray-400 cursor-pointer"/>
                </template>
                {{ props.desc }}
              </n-tooltip>
            </n-space>
          </template>
          <template v-if="!props.title && props.isAddAction">
            <n-button @click='onHandleAdd' type='primary'>
              <icon-line-md:plus class='mr-4px text-20px'/>
              新增
            </n-button>
          </template>
        </n-space>
      </div>

      <!--     右     -->
      <n-space align="end">
        <n-button @click='onHandleAdd' dashed type='primary' v-if="props.title && props.isAddAction">
          <icon-line-md:plus class='mr-4px text-20px'/>
          新增数据
        </n-button>
        <n-button @click='' type='primary'>
          <icon-line-md:rotate-270 class='mr-4px text-16px' :class="{ 'animate-spin': props.loading }"/>
          刷新表格
        </n-button>
      </n-space>
    </div>
    <n-data-table :columns="tableColumns" :data="tableData" :loading="props.loading" striped :pagination="pagination" @pageSizeChange="onPageSizeChange" @pageChange="onPageChange">

    </n-data-table>
  </div>
</template>
<script setup lang="tsx">

import {computed, PropType, reactive} from "vue";
import {ITableColumn} from "@/components/basic/table/index";
import {BaseFormItemProps} from "@/components/basic/form/index";
import {generateTableColumnRender} from "@/components/basic/table/render";
import BaseForm from "@/components/basic/form/index.vue"

defineOptions({name: 'BaseTable'})

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  desc: {
    type: String,
    default: null
  },
  rowKey: {
    type: String
  },
  data: {
    type: Object as PropType<any | any[]>
  },
  loading: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Array as PropType<Array<ITableColumn>>,
    default: []
  },
  searchFormItems: {
    type: Array as PropType<Array<BaseFormItemProps>>,
    default: []
  },
  rowAction: Function as PropType<(row: any, rowIndex: number) => any>,
  getData: Function as PropType<({}) => any>,
  // 添加按钮
  isAddAction: {
    type: Boolean,
    default: false
  },
  // 列表数据取值key
  dataKey: {
    type: String,
    default: 'records'
  },
  // 默认操作按钮
  isAction: {
    type: Boolean,
    default: true
  },
  // 编辑按钮
  isEditAction: {
    type: Boolean,
    default: true
  },
  // 删除按钮
  isDeleteAction: {
    type: Boolean,
    default: true
  },
})

const pagination = reactive({
  page: 1,
  pageSize: 10,
  pageSizes:[10,20,30,40,50],
  showSizePicker:true
});

const tableColumns = computed(() => {
  const columns = props.columns.map((item: ITableColumn) => {
    return {
      key: item.field,
      title: item.title,
      align: 'center',
      titleAlign: 'center',
      render: item.render ?? generateTableColumnRender(item),
      width: item.labelWidth ?? 100,
      fixed: item.fixed ?? false,
      ...item
    }
  })
  if (props.isAction) {
    columns.push({
      title: defaultAction.title,
      key: defaultAction.field,
      align: 'center',
      titleAlign: 'center',
      render: defaultAction.render,
      width: defaultAction.labelWidth ?? 100,
      ...defaultAction
    })
  }
  return columns
})
const defaultAction = reactive<ITableColumn>({
  field: 'actions',
  fixed: 'right',
  title: '操作',
  labelWidth: 140,
  render: (row: any, rowIndex: number) => {
    return (
        <NSpace size="small" justify="center">
          {props.rowAction?.(row, rowIndex)}
          {props.isEditAction && (
              <NButton

                  onClick={() => onHandleEdit(row)}
                  secondary
                  type="info"
              >
                编辑
              </NButton>
          )}
          {props.isDeleteAction && (
              <NPopconfirm
                  onPositiveClick={() => onHandleDelete(row)}
                  v-slots={{
                    trigger: () => {
                      return (
                          <NButton secondary type="error">
                            删除
                          </NButton>
                      );
                    },
                  }}
              >
                确认删除吗？
              </NPopconfirm>
          )}
        </NSpace>
    );
  }
});

const tableData = computed(() => {
      if (!props.data) {
        return []
      }
      if (props.data instanceof Array) {
        return props.data
      } else {
        return props.data[props.dataKey]
      }
    }
)

function onPageChange(page: number) {
  pagination.page = page;
  // getTableData();
}

function onPageSizeChange(pageSize: number) {
  pagination.pageSize = pageSize;
  // getTableData();
}
function onHandleAdd() {

}

function onHandleEdit(row: any) {

}

function onHandleDelete(row: any) {

}
</script>

<style scoped>

</style>