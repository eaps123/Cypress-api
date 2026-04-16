import { faker } from '@faker-js/faker'

export const insertValues = {
  'customFieldId': `${Cypress.env('ticketCustomFieldValue').customfieldid}`,
  'customFieldValues': ['TESTE API - CAMPOS ADICIONAIS 01', 'TESTE API - CAMPOS ADICIONAIS 02']
}

export const updateValues = {
  'customFieldId': `${Cypress.env('ticketCustomFieldValue').customfieldid}`,
  'customFieldValues': [
    {
      'oldname': 'TESTE API - CAMPOS ADICIONAIS 01',
      'newname': `TESTE API - ${faker.datatype.uuid()} CAMPOS ADICIONAIS`
    }
  ],
}

export const deleteValues = {
  'customFieldId': `${Cypress.env('ticketCustomFieldValue').customfieldid}`,
  'customFieldValues': ['TESTE API - CAMPOS ADICIONAIS 02']
}

export const insertValuesCustomDuplicate = {
  'customFieldId': `${Cypress.env('ticketCustomFieldValue').customfieldid}`,
  'customFieldValues': ['TESTE API - CAMPOS ADICIONAIS 01']
}

export const insertInvalidFormatValuesCustom = {
  'customFieldId': 1,
  'customFieldValues': ['TESTE API - CAMPOS ADICIONAIS 01']
}

export const insertEmptyValuesCustom = {
  'customFieldId': `${Cypress.env('ticketCustomFieldValue').customfieldid}`,
  'customFieldValues': []
}