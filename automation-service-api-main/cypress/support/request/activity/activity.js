Cypress.Commands.add('getActivityId', (urlbaseParam, tokenParam, idParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    qs: {
      token: `${tokenParam}`,
      id: `${idParam}`
    },
    failOnStatusCode: false

  })
})

Cypress.Commands.add('patchActivityId', (urlbaseParam, tokenParam, idParam, payload) => {
  cy.api({
    method: 'PATCH',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
      id: `${idParam}`
    },
    body: payload
  })
})