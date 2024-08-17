<template>
  <a-config-provider :locale="locale">
    <div :style="{'width': width>800 ? '800px': '100vw'}" class="bg">
      <Form></Form>
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';
import Form from './view/form.vue';
import { init } from './hooks/requests';
const locale=zhCN;
let width=ref(window.innerWidth);
window.onresize=()=>{
  width.value=window.innerWidth;
}

init();

</script>