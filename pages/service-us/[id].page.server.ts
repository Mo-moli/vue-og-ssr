export { onBeforeRender }

async function onBeforeRender(pageContext: any) {
  const { id } = pageContext.routeParams

  // 模擬 API 回傳的內容
  const description = `This is service ${id}`

  return {
    pageContext: {
      pageProps: {
        id,
        description
      }
    }
  }
}
