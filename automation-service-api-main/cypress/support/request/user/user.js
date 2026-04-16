Cypress.Commands.add('getUserAll', (urlbaseParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('getUserId', (urlbaseParam, idParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}${idParam}`,
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('postUser', (urlbaseParam, payload) => {
  cy.api({
    method: 'POST',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    body: payload,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('putUser', (urlbaseParam, idParam, payload) => {
  cy.api({
    method: 'PUT',
    url: `${urlbaseParam}${idParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      id: `${idParam}`
    },
    body: payload,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('deleteUser', (urlbaseParam, idParam) => {
  cy.api({
    method: 'DELETE',
    url: `${urlbaseParam}${idParam}`,
    headers: {
      accept: 'application/json',
    },
    failOnStatusCode: false,
  })
})