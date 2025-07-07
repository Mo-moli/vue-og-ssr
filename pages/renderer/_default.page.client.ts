export { clientRouting, render }

import { createApp } from './app'
import { hydrate } from 'vue'

const clientRouting = true

function render(pageContext: any) {
  const app = createApp(pageContext)
   app.mount('#app')
}
