import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'virtual:uno.css'

// register only when in development
if (import.meta.env.DEV) {
  import('./popup').then(({ register }) => {
    register({
      customBcId: 'custom',
    })
  })
}

createApp(App).mount('#app')
