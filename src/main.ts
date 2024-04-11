import * as Vue from "vue";
import { createApp } from 'vue'
import './style.css'

import App from './App.vue'


// 在 amd 系统中注入依赖供远程组件使用
declare var define:any
window.define ? define("vue", [], function() { return Vue }) : null;

createApp(App)
  .mount('#app')
