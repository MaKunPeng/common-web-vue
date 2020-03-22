import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css";
// 全局引用axios
import axios from "axios";
import './assets/css/eye/iconfont.css';

// 配置默认请求地址
axios.defaults.baseURL = "http://localhost:8181/";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
