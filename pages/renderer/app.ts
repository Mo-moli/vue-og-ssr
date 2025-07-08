import { createSSRApp, h } from 'vue'
import BaseLayout from './layouts/BaseLayout.vue'
export function createApp(pageContext: any) {
  const { Page, pageProps } = pageContext
  return createSSRApp({
    render: () => h(BaseLayout, null, {
      default: () => h(Page, pageProps)  // ✅ 把 Page 包進 Layout 的 <slot>
    })
  })
}
