import Vue from 'vue'
import { store } from './store/index';

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Routing
 */
import router from './route/router';


/**
 * Filters
 */
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});

/**
 * Components
 */
import App from './App.vue'
import Header from './components/layouts/Header.vue'

Vue.component('Header',Header);


Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
 }).$mount('#app');
