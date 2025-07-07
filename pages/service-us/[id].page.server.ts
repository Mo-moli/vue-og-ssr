export { onBeforeRender }
export default {
  route: '/service-us/:id'
}
async function onBeforeRender(pageContext: any) {
  const { id } = pageContext.routeParams
  return {
    pageContext: {
      pageProps: {
        id  // ✅ 傳給前端組件
      }
    }
  }
}
