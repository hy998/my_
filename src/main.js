// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// 改变组件主题颜色
import './theme/index.less';

// axios 请求配置
import axios from './unit/axios.js'
import store from './vuex/index'

// 多语言配置
import i18n from './lang/index'

Vue.prototype.$http = axios

// 确认弹窗组件
import Popup from "./ivews/comOk/index"
Vue.prototype.$popup = Popup.install

Vue.use(ViewUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
