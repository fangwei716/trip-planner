import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  locale
})

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSuitcaseRolling, faCalendarCheck, faList, faCheckSquare, faCog, faBell, faFilter, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSuitcaseRolling, faCalendarCheck, faList, faCheckSquare, faCog, faBell, faFilter, faAngleDoubleLeft, faAngleDoubleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
