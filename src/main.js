// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import vueResource from 'vue-resource'

import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state:{
    avatar:'123'
  },
  mutations:{
    editImg(state,url){
      state.avatar = url
    }
  }
})


import './assets/fontAwesome/css/font-awesome.css'
// import './assets/fontAwesome/fonts/font-awesome'

Vue.use(elementUi)

Vue.use(vueResource)

Vue.http.options.root = 'http://127.0.0.1:2000/api'
// Vue.http.options.xhr = { withCredentials: false };

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
