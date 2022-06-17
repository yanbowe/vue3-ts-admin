import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist' //持久化状态管理
import 'ant-design-vue/dist/antd.less';
import '@/assets/base.less'
import defineComponents from '@/utils/defineComponents'  //全局注册自定义组件

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersist))
app.use(router)

app.use(defineComponents)

app.mount('#app')
