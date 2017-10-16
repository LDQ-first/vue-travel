// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false

import VueModal from 'vue-usemodal'
Vue.use(VueModal)

import { Menu,  MenuItem } from 'element-ui'
Vue.use(Menu)
Vue.use(MenuItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
