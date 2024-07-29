<template>
  <div class="flex-1 wh-full flex-col " >
    <iframe :src="route.meta?.href as any" class="flex-1 overflow-hidden  box-border " ref="iframeRef"></iframe>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const state = reactive({
  loading: false,
  href: computed(()=> route.meta?.href)
})
const iframeRef = ref<HTMLIFrameElement | null>(null);
function init(){
  if (!iframeRef.value) return;
  const _frame = iframeRef.value as any;
  if (_frame.attachEvent) {
    _frame.attachEvent('onload', () => {
     state.loading = false;
    });
  } else {
    iframeRef.value.onload = () => {
      state.loading = false;
    };
  }
}
onMounted(() => {
  state.loading = true;
  init();
});
</script>

<style lang="scss" scoped>

</style>