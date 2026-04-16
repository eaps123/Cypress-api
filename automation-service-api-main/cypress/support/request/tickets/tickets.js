Cypress.Commands.add('getTicketAll', (urlbaseParam, tokenParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
    },

    failOnStatusCode: false,
  })
})

Cypress.Commands.add('postTicket', (urlbaseParam, tokenParam, payload) => {
  cy.api({
    method: 'POST',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
    },
    body: payload,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('patchTicketId', (urlbaseParam, tokenParam, idParam, payload) => {
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
    body: payload,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('getTicketId', (urlbaseParam, tokenParam, idParam) => {
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

Cypress.Commands.add('delTicketId', (urlbaseParam, tokenParam, idParam) => {
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

Cypress.Commands.add('getTicketSelect', (urlbaseParam, tokenParam, selectParam) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
      $select: `${selectParam}`
    },
    failOnStatusCode: false
  })
})