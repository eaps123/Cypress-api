
Cypress.Commands.add('getTimeAgreementConsumption', (urlbaseParam, tokenParam, selectParam) => {
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