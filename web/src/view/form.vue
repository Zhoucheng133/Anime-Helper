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
      <div class="form_content">
        <a-radio-group v-model:value="form().data.type" button-style="solid">
          <a-radio-button value="mikan">Mikan</a-radio-button>
          <a-radio-button value="acgrip">Acgrip</a-radio-button>
        </a-radio-group>
        <i class="bi bi-box-arrow-up-right" @click="sourceLink"></i>
      </div>
    </div>
    <div class="item">
      <div class="form_label">更新频率</div>
      <div class="form_content">
        <a-input-number id="inputNumber" v-model:value="form().data.freq" :min="10" :max="1440" />
        <div style="margin-left: 10px;">分钟</div>
      </div>
    </div>
    <div class="item">
      <div class="form_label">Aria 地址</div>
      <div class="form_content">
        <a-input v-model:value="form().data.ariaLink" placeholder="http://<ip>:16800/jsonrpc" />
      </div>
    </div>
    <div class="item">
      <div class="form_label">Aria 密钥</div>
      <div class="form_content">
        <a-input-password v-model:value="form().data.ariaSecret" placeholder="" />
      </div>
    </div>
    <a-collapse style="margin-top: 20px;" v-model:activeKey="showFold">
      <a-collapse-panel key="1" header="番剧表">
        <a-button type="link" @click="addBangumi">添加</a-button>
        <a-table :columns="bangumiColumn" :data-source="form().data.bangumi" :pagination="false">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'ass'">
              <span>
                字幕组
              </span>
            </template>
            <template v-else-if="column.key === 'title'">
              <span>
                标题
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                操作
              </span>
            </template>
          </template>
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'ass'">
              <a-tag>{{ record.ass }}</a-tag>
            </template>
            <template v-else-if="column.key === 'action'">
              <a-button type="link" danger @click="delBangumi(record.ass, record.title)">删除</a-button>
            </template>
          </template>
        </a-table>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="排除关键字">
        
      </a-collapse-panel>
    </a-collapse>
    <a-modal v-model:open="showAddBangumiDialog" title="添加一个番剧" @ok="addBangumiOk" @cancel="onDialogCancel" centered>
      <div class="bangumiItem" style="margin-top: 10px;">
        <div class="bangumiItem_title">字幕组</div>
        <div class="bangumiItem_content">
          <a-input v-model:value="bangumiAddAss"></a-input>
        </div>
      </div>
      <div class="bangumiItem" style="margin-top: 10px;">
        <div class="bangumiItem_title">标题</div>
        <div class="bangumiItem_content">
          <a-input v-model:value="bangumiAddTitle"></a-input>
        </div>
      </div>
    </a-modal>
  </div>
</template>


<script setup lang="ts">
import "./form_style.css";
import form from "../states/form";
import { addBangumiController, delBangumiController } from "./form_actions";
import { ref } from "vue";
import { message, Modal } from "ant-design-vue";

let showFold=ref(['1', '2']);
const bangumiColumn=[
  {
    "name": "字幕组",
    "key": "ass",
    "dataIndex": "ass"
  },
  {
    "name": "标题",
    "key": "title",
    "dataIndex": "title"
  },
  {
    title: '操作',
    key: 'action',
    width: '70px',
  },
];

const delBangumi=(ass: string, title: string)=>{
  Modal.confirm({
    title: '你确定要删除这个番剧吗',
    centered: true,
    onOk() {
      delBangumiController(ass, title);
      message.success("删除成功")
    },
    onCancel() {},
  });
}

const addBangumiOk=()=>{
  if(bangumiAddAss.value.length==0){
    message.error("字幕组不能为空");
    return;
  }else if(bangumiAddTitle.value.length==0){
    message.error("标题不能为空");
    return;
  }
  addBangumiController(bangumiAddAss.value, bangumiAddTitle.value);
  onDialogCancel();
  message.success("添加成功");
  showAddBangumiDialog.value=false;
}

const onDialogCancel=()=>{
  bangumiAddAss.value="";
  bangumiAddTitle.value="";
}

let showAddBangumiDialog=ref(false);

let bangumiAddTitle=ref("");
let bangumiAddAss=ref("");

const addBangumi=()=>{
  showAddBangumiDialog.value=true;
}

const sourceLink=()=>{
  if(form().data.type=='mikan'){
    window.open("https://mikanime.tv/");
  }else if(form().data.type=="acgrip"){
    window.open("https://acgrip.art/")
  }
}
</script>