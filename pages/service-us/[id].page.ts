// pages/service-us/[id].page.ts

export const documentProps = (pageContext) => {
  const { id } = pageContext.routeParams
  return {
    title: `服務 #${id}`,
    description: `這是服務 ${id} 的描述`,
    meta: [
      { name: 'title', content: `服務 #${id}` },
      { name: 'description', content: `這是服務 ${id} 的描述` },
      { property: 'og:title', content: `服務 #${id} | 我的網站` }
    ]
  }
}
