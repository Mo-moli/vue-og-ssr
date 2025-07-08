// renderer/_default.page.server.ts
export { render }
export { passToClient }

import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

const passToClient = ['pageProps', 'documentProps']

async function render(pageContext: any) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  const { documentProps } = pageContext
  const title = documentProps?.title || 'My Default Title'
  const description = documentProps?.description || ''
  const metaTags = documentProps?.meta || []

  const metaHtml = metaTags.map((tag: Record<string, string>) => {
    const attrName = tag.name ? 'name' : 'property'
    const attrValue = tag.name || tag.property
    const content = tag.content
    return `<meta ${attrName}="${attrValue}" content="${content}">`
  }).join('\n')

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="zh">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
        ${dangerouslySkipEscape(metaHtml)}
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml
  }
}
