import { faker } from '@faker-js/faker'

export const createUser = {
  'nome': `${faker.name.firstName()} ${faker.datatype.uuid()}`,
  'email': `automation-postUser${faker.datatype.uuid()}@moviautomation.com`,
  'password': '1234',
  'administrador': 'true'
}

export const updateUser = {
  'nome': 'User Update',
  'email': `automation-postUser${faker.datatype.uuid()}@moviautomation.com`,
  'password': '1234',
  'administrador': 'true'
}