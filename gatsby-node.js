exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage } = actions

  // Hide poetry and writing pages from being accessible
  const pagesToHide = [
    '/writing/poetry/',
    '/writing/'
  ]

  if (pagesToHide.includes(page.path)) {
    deletePage(page)
  }
}
