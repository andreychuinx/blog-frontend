// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://apibucket.sabikaorganizer.com:3005/api'
// axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
