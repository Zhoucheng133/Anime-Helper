<template>
  <div class="form">
    <div class="item">
      <div class="form_label">运行状态</div>
      <div class="form_content">
        <a-tag :color="form().running ? 'success' : 'warning'" style="margin-right: 20px;">{{ form().running ? '运行中' : "等待中" }}</a-tag>
        <a-switch v-model:checked="form().running" />
        <a-button type="link" style="margin-left: 10px;">查看日志</a-button>
      </div>
    </div>
    <div class="item">
      <div class="form_label">RSS 来源</div>
      <a-radio-group v-model:value="form().data.type" button-style="solid">
        <a-radio-button value="mikan">Mikan</a-radio-button>
        <a-radio-button value="acgrip">Acgrip</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>


<script setup lang="ts">
import "./form_style.css";
import form from "../states/form";
</script>