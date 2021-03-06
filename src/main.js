import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./routes";
import axios from 'axios';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, axios
}).$mount('#app');
