Cypress.Commands.add('postLoginTags', (params, userName, password) => {
  cy.api({
    method: 'POST',
    url: params,
    qs: {
      UserName: userName,
      Password: password
    },
    headers: {
      accept: 'application/json'
    }
  })
})

Cypress.Commands.add('postTagsExportToAsyncCSV', (params, payload) => {
    cy.api({
      method: 'POST',
      url: params,
      headers: {
        accept: 'application/json',
      },
      body: payload
    })
  })