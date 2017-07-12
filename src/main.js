import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routes from './routes'

const router = new VueRouter({
  // TODO: mode: 'history',
  routes: routes
})

Vue.use(VueRouter)
Vue.use(Vuex)

const store = require('./store').default

new Vue({
  router: router,
  store: store
}).$mount('#mountpoint')

// router.push('/characters')
