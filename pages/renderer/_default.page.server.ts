export { render }

import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'

async function render(pageContext: any) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  return {
    documentHtml: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>This is page ${pageContext.routeParams.id}</title>
        </head>
        <body>
          <div id="app">${appHtml}</div>
        </body>
      </html>
    `
  }
}
