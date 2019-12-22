import Vue from 'vue';
import { store } from './shared/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import './styles/index.scss';
import router from './route/router';
import App from './App.vue';
import Header from './components/layouts/Header.vue';

import vRegion from 'v-region';
Vue.use(vRegion);

import vSelectMenu from 'v-selectmenu';
Vue.use(vSelectMenu, {
  language: 'en'
});


Vue.use(BootstrapVue);
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

Vue.component('Header', Header);
Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App),
  router: router
 }).$mount('#app');
