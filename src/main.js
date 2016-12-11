import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App'
import MainMenu from './components/MainMenu.vue'
import CharacterList from './components/CharacterList.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: MainMenu
      },
      {
        path: 'classes',
        component: MainMenu
      },
      {
        path: 'characters',
        component: CharacterList
      }
    ]
  }
]

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
