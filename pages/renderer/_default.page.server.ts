export { render }
export { passToClient }

import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'


const passToClient = ['documentProps']

async function render(pageContext: any) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  const title = pageContext.documentProps?.title || 'My Default Title'
  const id = pageContext.routeParams?.id ?? ''

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <meta property="og:title" content="${title}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://你的網址/service-us/${id}" />
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml
  }
}
