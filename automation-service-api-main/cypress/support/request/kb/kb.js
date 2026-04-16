Cypress.Commands.add('getArticleAll', (urlbaseParam, tokenParam, q, title, updatedDateFrom, updatedDateTo,
  createdDateFrom, createdDateTo, pageSize, page, tags, category, status, menu) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
      token: `${tokenParam}`
    },
    qs: {
      q: `${q}`,
      title: `${title}`,
      updatedDateFrom: `${updatedDateFrom}`,
      updatedDateTo: `${updatedDateTo}`,
      createdDateFrom: `${createdDateFrom}`,
      createdDateTo: `${createdDateTo}`,
      pageSize: `${pageSize}`,
      page: `${page}`,
      tags: `${tags}`,
      category: `${category}`,
      status: `${status}`,
      menu: `${menu}`,
    },

    failOnStatusCode: false,
  })
})