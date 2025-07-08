export { onBeforeRender }

async function onBeforeRender(pageContext: any) {
  const { id } = pageContext.routeParams

  // 模擬從後端取得描述
  const description = `This is service ${id}`

  return {
    pageContext: {
      // 保險起見明確回傳 routeParams（雖然通常會自動帶入）
      routeParams: { id },
      pageProps: {
        id,
        description
      }
    }
  }
}
