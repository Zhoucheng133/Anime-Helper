<template>
  <div class="form">
    <div class="item">
      <div class="form_label">运行状态</div>
      <div class="form_content">
        <a-tag :color="form().running ? 'success' : 'warning'" style="margin-right: 20px;">{{ form().running ? '运行中' : "等待中" }}</a-tag>
        <a-switch v-model:checked="form().running" @change="toggleRun" />
      </div>
    </div>
    <div class="item">
      <div class="form_label">系统操作</div>
      <div class="form_content">
        <a-button type="link" @click="showLog">查看日志</a-button>
        <a-button type="link" @click="saveTable">保存表单</a-button>
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
        <a-input v-model:value="form().data.ariaLink" placeholder="http(s)://<ip>:16800/jsonrpc" />
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
        <a-button type="link" @click="addExclusion">添加</a-button>
        <a-table :columns="exclusionsColumn" :data-source="form().data.exclusions" :pagination="false">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'value'">
              <span>
                值
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                操作
              </span>
            </template>
          </template>
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'value'">
              {{record}}
            </template>
            <template v-else-if="column.key === 'action'">
              <a-button type="link" danger @click="delExclusions(record)">删除</a-button>
            </template>
          </template>
        </a-table>
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
    <a-modal v-model:open="showAddExclusionDialog" title="添加一个排除关键字" @ok="addExclusionOk" @cancel="onDialogCancel" centered>
      <div class="exclutionItem" style="margin-top: 10px;">
        <div class="exclutionItem_title">关键字</div>
        <div class="exclutionItem_content">
          <a-input v-model:value="exclusionAddValue"></a-input>
        </div>
      </div>
    </a-modal>
    <a-modal v-model:open="showLogDialog" title="日志" :cancel-button-props="{ style: { display: 'none' } }" okText="完成" @ok="showLogDialog=false" :width="props.width<720?width-20 : 700" centered>
      <div class="logContent">
        <div v-for="(item, index) in logContent" :key="index" :style="item.ok ? {'color': 'green'}:{'color': 'red'}" class="logItem">
          <div class="log_label">{{ item.msg }}</div>
          <div class="log_time">{{ dayjs(item.time).format("YYYY-MM-DD HH:mm") }}</div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import "./form_style.css";
import form from "../states/form";
import { addBangumiController, addExclusionController, delBangumiController, delExclusionController, toggleRun} from "./form_actions";
import { ref } from "vue";
import { message, Modal } from "ant-design-vue";
import { saveTable } from "../hooks/requests";
import { getLog } from "../hooks/requests";
import dayjs from "dayjs";

const props = defineProps(['width']);

interface log{
  ok: boolean,
  msg: string,
  time: number,
};

let showLogDialog=ref(false);
let logContent=ref([] as log[]);

const showLog=async ()=>{
  logContent=(await getLog()).reverse();
  showLogDialog.value=true;
}

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

const exclusionsColumn=[
  {
    "name": "值",
    "key": "value",
  },
  {
    title: '操作',
    key: 'action',
    width: '70px',
  }
];

const addExclusionOk=()=>{
  if(exclusionAddValue.value.length==0){
    message.error("关键字不能为空");
    return;
  }
  if(form().data.exclusions.includes(exclusionAddValue.value)){
    message.error("该关键字已存在");
    return;
  }

  addExclusionController(exclusionAddValue.value);
  onDialogCancel();
  message.success("添加成功");
  showAddExclusionDialog.value=false;
}

const addExclusion=()=>{
  showAddExclusionDialog.value=true;
}

const delExclusions=(value: string)=>{
  Modal.confirm({
    title: '你确定要删除这个关键字吗',
    centered: true,
    onOk() {
      delExclusionController(value);
      message.success("删除成功")
    },
    onCancel() {},
  });
}

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
  const exists = form().data.bangumi.some(item => 
    item.ass === bangumiAddAss.value && item.title === bangumiAddTitle.value
  );

  if(exists){
    message.error("番剧表已有该数据")
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
  exclusionAddValue.value="";
}

let showAddBangumiDialog=ref(false);
let showAddExclusionDialog=ref(false);

let exclusionAddValue=ref("");

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