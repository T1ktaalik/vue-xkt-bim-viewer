//import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App).use(Quasar, { pluguns: {} }).mount('#app')
