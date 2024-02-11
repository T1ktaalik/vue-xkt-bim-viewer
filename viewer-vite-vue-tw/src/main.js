import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

import 'quasar/src/css/index.sass'

const espViewerApp = createApp(App)
espViewerApp.use(Quasar, {
    plugins: {}
})
espViewerApp.mount('#app')
