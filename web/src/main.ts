import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import "./style.css";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();

createApp(App).use(Antd).use(pinia).mount('#app');
