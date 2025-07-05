import { createSSRApp, h } from 'vue'

export function createApp(pageContext: any) {
  const { Page, pageProps } = pageContext
  return createSSRApp({
    render: () => h(Page, pageProps)
  })
}
