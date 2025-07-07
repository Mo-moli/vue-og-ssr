export { render }
export { passToClient }
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'

const passToClient = ['documentProps']  

async function render(pageContext: any) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  const title = pageContext.documentProps?.title || 'My Default Title'


  return {
    documentHtml: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${title}</title>
          <meta property="og:title" content="${title}" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://你的網址/service-us/${pageContext.routeParams.id}" />
        </head>
        <body>
          <div id="app">${appHtml}</div>
        </body>
      </html>
    `
  }
}
