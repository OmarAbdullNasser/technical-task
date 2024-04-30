import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './style.scss'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(bootstrap)
  .use(store)
  .mount('#app')
