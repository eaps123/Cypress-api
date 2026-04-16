Cypress.Commands.add('getSurveyQuestions', (urlbaseParam, tokenParam) => {
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

Cypress.Commands.add('getSurveyResponses', (urlbaseParam, tokenParam) => {
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