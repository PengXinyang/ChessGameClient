import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { get, post } from './network/request'
import router from './router'
//import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import process from "process";
import store from "element-ui/packages/table/src/store/index.js";

const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$baseUrl = process.env.VUE_APP_BASEURL
app.config.globalProperties.$axios = axios
app.config.globalProperties.$get = get
app.config.globalProperties.$post = post
// 注册全部element图标
app.use(ElementPlus, { locale: zhCn })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store)
app.use(router)
app.mount('#app')