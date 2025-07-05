export { clientRouting, render }

import { createApp } from './app'
import { hydrate } from 'vue'

const clientRouting = true

function render(pageContext: any) {
  const app = createApp(pageContext)
  hydrate(app, document.getElementById('app')!)
}
