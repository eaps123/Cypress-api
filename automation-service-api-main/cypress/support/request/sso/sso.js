Cypress.Commands.add('getUsers', (urlbaseParam, email) => {
  cy.api({
    method: 'GET',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      email: `${email}`,
    },

    failOnStatusCode: false,
  })
})

Cypress.Commands.add('postSignin', (urlBase, email, senha) => {
  cy.api({
    method: 'POST',
    url: `${urlBase}`,
    headers: {
      accept: 'application/json',
    },
    body: {
      "email": email,
      "password": senha
    },
    failOnStatusCode: false
  })
})
