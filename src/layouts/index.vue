<template>
  <n-layout :position="'absolute'" class="layout" has-sider>
    <n-layout-sider
        class="layout-side"
        :collapsed-width="64"
        :collapsed="collapsed"
        collapse-mode="width"
        :width="240"
        show-trigger="bar"
        :position="'absolute'"
        @collapse="collapsed=true"
        @expand="collapsed = false">
      <page-logo :collapsed="collapsed"/>
      <page-menu :collapsed="collapsed"/>
    </n-layout-sider>

    <n-layout>
      <PageHeader/>
      <n-layout-content class="layout-content bg-#f5f7f9 dark:bg-#101014">
        <div class="layout-content-main">
          <page-tabs/>
          <page-content/>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">


import PageLogo from "@/layouts/components/page-logo.vue";

defineOptions({name: 'BaseLayout'})
import {reactive, ref} from "vue";
import PageHeader from "@/layouts/components/page-header.vue";
import PageMenu from "@/layouts/components/page-menu.vue";
import PageContent from "@/layouts/components/page-content.vue";
import PageTabs from "@/layouts/components/page-tabs.vue";

const collapsed = ref<boolean>(false);
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;

  &-default-background {
    background: #f5f7f9;
  }

  .layout-side {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }

  .layout-side-fix {
    position: fixed;
    top: 0;
    left: 0;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-right-fix {
    overflow-x: hidden;
    padding-left: 200px;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
  }

  .layout-content {
    flex: auto;
    min-height: 100vh;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }

  .n-layout-footer {
    background: none;
  }
}

.layout-content-main {
  margin: 0 10px 10px;
  position: relative;
  padding-top: 64px;
}

.layout-content-main-fix {
  padding-top: 64px;
}

.fluid-header {
  padding-top: 0;
}

.main-view-fix {
  padding-top: 44px;
}

.noMultiTabs {
  padding-top: 0;
}

// 圆角 下边框
.header-rounded-bottom {
  border-bottom-left-radius: var(--n-border-radius);
  border-bottom-right-radius: var(--n-border-radius);
}


</style>