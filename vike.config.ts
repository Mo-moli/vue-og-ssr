// vike.config.ts
export default {
  pageFiles: {
    include: [
      '**/*.page.ts',
      '**/*.page.vue',
      '**/*.page.route.ts',
      '**/*.page.server.ts',
      '**/*.page.client.ts'
    ],
    addPageFiles: [
      {
        pattern: '/pages/**/*.page.*?extractExportNames',
        query: '?extractExportNames'
      }
    ]
  }
}
