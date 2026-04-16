Cypress.Commands.add('postTimeAgreement', (urlbaseParam, tokenParam, payload) => {
  cy.api({
    method: 'POST',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
    },
    failOnStatusCode: false,
    body: payload
  })
})

Cypress.Commands.add('getTimeAgreementid', (urlbaseParam, tokenParam, idParam) => {
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
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getTimeAgreementAll', (urlbaseParam, tokenParam, selectParam) => {
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

Cypress.Commands.add('patchTimeAgreementId', (urlbaseParam, tokenParam, idParam, payload) => {
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
    failOnStatusCode: false
  })
})

Cypress.Commands.add('delTimeAgreementid', (urlbaseParam, tokenParam, idParam) => {
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

    failOnStatusCode: false
  })
})