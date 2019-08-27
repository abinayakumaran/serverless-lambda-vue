import Vue from 'vue'
import App from './App'
import router from '@/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api/'

axios.defaults.headers.get['Accept'] = 'application/json'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
