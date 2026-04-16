import { faker } from '@faker-js/faker'

export const createServiceE2e = {

  'name': `AUTOMATION NAME ${faker.datatype.uuid()}`,
  'description': 'Teste do serviço',
  'parentServiceId': null,
  'serviceForTicketType': 1,
  'isVisible': 3,
  'allowSelection': 3,
  'allowFinishTicket': true,
  'isActive': true,
  'automationMacro': '',
  'defaultCategory': 'Problema',
  'allowAllCategories': false,
  'categories': [
    'Problema',
    'Sugestão',
    'Solicitação de serviço'
  ]
}

export const updateService = {
  'name': 'AUTOMATION NAME UPDATE',
  'description': 'Teste do serviço Auto',
  'parentServiceId': null,
  'serviceForTicketType': 1,
  'isVisible': 3,
  'allowSelection': 3,
  'allowFinishTicket': true,
  'isActive': true,
  'automationMacro': '',
  'defaultCategory': 'Problema',
  'allowAllCategories': false,
  'categories': [
    'Problema',
    'Sugestão',
    'Solicitação de serviço'
  ]
}