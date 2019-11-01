import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// ? TEMPORARIO 
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibm9tZSI6IldhbGxla3MgUi4gTWlyYW5kYSIsImVtYWlsIjoid2FsbGVrc0B3Y29kZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTcyMjMwOTMxLCJleHAiOjE1NzI0OTAxMzF9.rDd-H47kTY8RA-a83qn1_nFQtAW0SdESOKFmbSf5lm0'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')