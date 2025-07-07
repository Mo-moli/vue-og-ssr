export async function onBeforeRender(pageContext) {
  const id = pageContext.routeParams.id

  const serviceNameMap = {
    '123': '冷氣清洗服務',
    '456': '水管疏通服務'
  }

  const serviceName = serviceNameMap[id] || '未知服務'

  return {
    pageContext: {
      pageProps: { serviceName },
      documentProps: {
        title: serviceName,
        ogTitle: serviceName
      }
    }
  }
}
