Cypress.Commands.add('postCustomFieldValue', (params, payload) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('url').url_base_v1}${params}`,
    headers: {
      accept: 'application/json',
    },
    body: payload
  })
})

Cypress.Commands.add('postCustomFieldValueInvalid', (params, payload) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('url').url_base_v1}${params}`,
    headers: {
      accept: 'application/json',
    },
    body: payload,
    failOnStatusCode: false,
  })
})
