import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './router/router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});