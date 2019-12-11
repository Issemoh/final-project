import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import ClintsAPIService from '@/service/clintsService'

// configure Bootstap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import clintsService from './service/clintsService';

Vue.prototype.$clintsService = clintsService

new Vue({
  render: h => h(App),
}).$mount('#app')
