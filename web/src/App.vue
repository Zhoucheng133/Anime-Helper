<template>
  <div :style="{'width': width>800 ? '800px': '100vw'}" class="bg">
    <Form/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Form from './view/form.vue';

let width=ref(window.innerWidth);
window.onresize=()=>{
  width.value=window.innerWidth;
}

</script>