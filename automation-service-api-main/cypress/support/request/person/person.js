import { faker } from '@faker-js/faker'

Cypress.Commands.add('getPersonAll', (urlbaseParam, tokenParam) => {
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

Cypress.Commands.add('getPersonId', (urlbaseParam, tokenParam, idParam) => {
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

Cypress.Commands.add('deletePerson', (urlbaseParam, tokenParam, idParam) => {
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

Cypress.Commands.add('postPerson', (urlbaseParam, tokenParam, accountEmail) => {
  cy.api({
    method: 'POST',
    url: `${urlbaseParam}`,
    headers: {
      accept: 'application/json',
    },
    qs: {
      token: `${tokenParam}`,
    },
    body: {
      'id': '',
      'accountEmail': accountEmail,
      'isActive': true,
      'personType': 1,
      'profileType': 3,
      'accessProfile': 'Administradores',
      'businessName': 'Automation API Cypress',
      'businessBranch': null,
      'corporateName': '',
      'cpfCnpj': null,
      'userName': `AUTOMATION USER NAME ${faker.datatype.uuid()}`,
      'password': '123',
      'role': null,
      'bossId': null,
      'bossName': null,
      'classification': null,
      'cultureId': 'pt-BR',
      'timeZoneId': 'America/Sao_Paulo',
      'createdDate': `${faker.date.recent()}`,
      'createdBy': null,
      'changedDate': `${faker.date.past()}`,
      'changedBy': null,
      'observations': null,
      'authenticateOn': null,
      'addresses': [],
      'contacts': [],
      'emails': [
        {
          'emailType': 'Pessoal',
          'email': 'automation-api-createPerson@movidesk.com',
          'isDefault': true
        }
      ],
      'teams': [
        'Administradores',
        'Atendimento ao Cliente'
      ],
      'relationships': [
        {
          'id': null,
          'name': null,
          'slaAgreement': null,
          'forceChildrenToHaveSomeAgreement': false,
          'allowAllServices': true,
          'includeInParents': null,
          'loadChildOrganizations': null,
          'services': [],
          'idToDelete': null,
          'isGetMethod': true
        }
      ],
      'customFieldValues': [],
      'atAssets': []
    },
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('patchPerson', (urlbaseParam, tokenParam, idParam, accountEmail) => {
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
    body:  {
      'businessName': 'Automation API Cypress Update',
      'accountEmail': accountEmail,
      'emails': [
        {
          'emailType': 'Pessoal',
          'email': 'automation-api-updatePerson@movidesk.com',
          'isDefault': true
        }
      ],
    },
    failOnStatusCode: false,
  })
})