Cypress.Commands.add('postService', (urlbaseParam, tokenParam, payload) => {
  cy.api({
    method: 'POST',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
    },
    body: payload
  })
})

Cypress.Commands.add('getServiceId', (urlbaseParam, tokenParam, idParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
      id: `${idParam}`
    },

    failOnStatusCode: false,
  })
})

Cypress.Commands.add('patchServiceId', (urlbaseParam, tokenParam, idParam,payload) => {
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

Cypress.Commands.add('delServiceId', (urlbaseParam, tokenParam, idParam) => {
  cy.api({
    method: 'DELETE',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
      id: `${idParam}`
    },

    failOnStatusCode: false,
  })
})