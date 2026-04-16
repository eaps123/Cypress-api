import { faker } from '@faker-js/faker'

export const createTicketsSuccess = {
  'type': 2,
  'subject': `TESTE AUTOMATION ${faker.datatype.uuid()}`,
  'status': 'Em atendimento',
  'clients': [
    {
      'id': `${Cypress.env('person').cod_ref_person}`,
      'personType': 1,
      'profileType': 1
    }
  ],
  'createdDate': `${faker.date.recent()}`,
  'createdBy': {
    'id': `${Cypress.env('person').cod_ref_person}`,
    'personType': 1,
    'profileType': 1,
    'businessName': `AUTOMATION API ${faker.datatype.uuid()}`,
    'email': null,
    'phone': null
  },
  'actions': [
    {
      'type': 1,
      'description': `TESTE API - Ação ${faker.datatype.uuid()}`
    }
  ]

}

export const updateTickets = {
  'subject': 'TESTE AUTOMATION UPDATE',
}