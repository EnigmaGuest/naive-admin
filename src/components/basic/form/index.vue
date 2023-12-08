<template>
  <n-form v-bind="props" ref="baseFormRef" :model="props.data" :rules="rules">
    <n-grid v-bind="getGridProps">
      <n-gi v-bind="item.giProps" v-for="item in props.items" :key="item.field">
        <n-form-item :path="item.field" :label="props.showLabel?item.label:''">
          <!--标签名右侧温馨提示-->
          <template v-if="item.labelMessage" #label>
            <n-space align="center" :justify="props.labelAlign" size="small">
              {{ item.label }}
              <n-tooltip trigger="hover">
                <template #trigger>
                  <icon-line-md:question-circle class="text-18px text-gray-400 cursor-pointer"/>
                </template>
                {{ item.labelMessage }}
              </n-tooltip>
            </n-space>
          </template>
          <!--判断插槽-->
          <template v-if="item.slot">
            <slot
                :name="item.slot"
                :model="props.data"
                :field="item.field"
                :value="props.data[item.field]"
            ></slot>
          </template>
          <template v-else-if="item.filedType === 'upload'"></template>
          <template v-else-if="item.filedType === 'string'">
            <n-input
                v-model:value="props.data[item.field]"
                :placeholder="item.filedOptions?.placeholder??`请输入${item.label}`"
                v-bind="item.filedOptions"
            ></n-input>
          </template>
        </n-form-item>
      </n-gi>
      <n-gi v-if="showActionGroup" :span="props.inline?'':'24'" :suffix="props.inline" #="{overflow}">
        <n-space align="center"
                 :justify="props.inline ? 'end' : 'center'"
                 :style="{ 'margin-left': `${!props.inline ? 12 : props.labelWidth}px` }">
          <slot name="actionGroup">
            <n-button type="primary" @click="submit">提交</n-button>
            <n-button @click="reset">重置</n-button>
            <n-button @click="unfoldToggle" type="primary" text icon-placement="right" v-if="props.inline">
              <template #icon>
                <icon-line-md:chevron-left class="rotate-270" v-if="overflow"/>
                <icon-line-md:chevron-left class="rotate-90" v-else/>
              </template>
              {{ overflow ? '展开' : '收起' }}
            </n-button>
          </slot>
        </n-space>
      </n-gi>
    </n-grid>
  </n-form>
</template>
<script setup lang="ts">
import {BaseFormProps, generateRules} from "@/components/basic/form/index";
import {computed, reactive, ref} from "vue";
import {GridProps, NTooltip} from "naive-ui";

defineOptions({name: 'BaseForm'})
const props = withDefaults(defineProps<BaseFormProps>(), {
  data: () => ({}),
  items: () => ([]),
  size: "medium",
  labelPlacement: "left",
  labelAlign: "left",
  labelWidth: 80,
  showLabel: true,
  inline: false,
  giProps: () => ({}),
  gridProps: () => ({}),
  collapsedRows: 1,
  showActionGroup: true,
})


const rules = computed(() => generateRules(props.items))
const gridCollapsed = ref(true);
const getGridProps = computed((): GridProps => {
  return {
    ...props.gridProps,
    responsive: 'screen',
    xGap: 12,
    collapsed: props.inline ? gridCollapsed.value : false,
  }
})

const baseFormRef = ref();

function unfoldToggle() {
  gridCollapsed.value = !gridCollapsed.value;
}

const actionState = reactive({
  submitLoading: false,
  resetLoading: false,
})

async function submit() {
  actionState.submitLoading = true;
  let validateRes = false;
  try {
    await baseFormRef.value.validate((res) => {
      validateRes = !res;
    });
  } catch (err) {
    if (err.length > 3) {
      // @ts-ignore
      window.$message?.error('必填项不能为空')
    } else {
      err.forEach((item: any) => {
        // @ts-ignore
        window.$message?.error(item[0].message)
      })
    }
    validateRes = false
  }

  return validateRes;
}

function reset() {
  Object.keys(props.data).forEach((key) => {
    props.data[key] = undefined;
  });
}




</script>

<style scoped>
</style>