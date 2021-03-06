import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//import { runServer } from '../server/server'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHouse as fasHouse } from '@fortawesome/free-solid-svg-icons'
import { faAward as fasAward } from '@fortawesome/free-solid-svg-icons'

//runServer()

library.add(fasHouse, fasAward)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
