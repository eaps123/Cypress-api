import * as ticketCustomFieldValueContract from '../../fixtures/contract/ticketCustomFieldValue/ticketCustomFieldValue.contract'
const bodyCustomFieldValue = require('../../fixtures/payload/ticketCustomFieldValue/ticketCustomFieldValue')

describe('Ticket Custom Field Value', { tags: ['@custom_fields', '@external'] }, () => {

  it('POST - /ticketCustomFieldValue/InsertValues- Validate add new option of custom fields.',
    { tags: ['@postCustomFields', '@insertCustomFields', '@validate_custom_fields', '@positive', '@carol_hogler'] }, () => {
      cy.postCustomFieldValue(`/ticketCustomFieldValue/InsertValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.insertValues)
        .then(resp => {
          expect(resp.status).to.eq(200)
          expect(ticketCustomFieldValueContract.postCustomFieldInsertValuesContract.validateAsync(resp.body))
        })
    }
  )

  it('POST - /ticketCustomFieldValue/InsertValues- Validate add duplicate option of custom fields.',
    { tags: ['@postCustomFields', '@insertCustomFields', '@validate_custom_fields', '@negative', '@carol_hogler'] }, () => {
      cy.postCustomFieldValue(`/ticketCustomFieldValue/InsertValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.insertValuesCustomDuplicate)
        .then(resp => {
          expect(ticketCustomFieldValueContract.postCustomFieldInsertValuesDuplicateContract.validateAsync(resp.body))
          expect(resp.status).to.eq(200)
        })
    }
  )

  it('POST - /ticketCustomFieldValue/UpdateValues- Validate update option of custom fields.',
    { tags: ['@postCustomFields', '@updateCustomFields', '@validate_custom_fields', '@positive', '@carol_hogler'] }, () => {
      cy.postCustomFieldValue(`/ticketCustomFieldValue/UpdateValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.updateValues)
        .then(resp => {
          expect(ticketCustomFieldValueContract.postCustomFieldUpdateValuesContract.validateAsync(resp.body))
          expect(resp.status).to.eq(200)
        })
    }
  )

  it('POST - /ticketCustomFieldValue/DeleteValues - Validate delete values in custom fields.',
    { tags: ['@postCustomFields', '@deleteCustomFields', '@validate_custom_fields', '@positive', '@carol_hogler'] }, () => {
      cy.postCustomFieldValue(`/ticketCustomFieldValue/DeleteValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.deleteValues)
        .then(resp => {
          expect(ticketCustomFieldValueContract.postCustomFieldDeleteValuesContract.validateAsync(resp.body))
          expect(resp.status).to.eq(200)
        })
    }
  )

  it('POST - /ticketCustomFieldValue/InsertValues- Validate id invalid option of custom fields.',
    { tags: ['@postCustomFields', '@insertCustomFields', '@validate_custom_fields', '@negative', '@carol_hogler'] }, () => {
      cy.postCustomFieldValueInvalid(`/ticketCustomFieldValue/InsertValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.insertInvalidFormatValuesCustom)
        .then((resp) => {
          expect(resp.status).to.eq(404)
          expect(resp.body).to.eq('Field with ID 1 not found')
        })
    }
  )

  it('POST - /ticketCustomFieldValue/InsertValues- Validate add invalid option of custom fields.',
    { tags: ['@postCustomFields', '@insertCustomFields', '@validate_custom_fields', '@negative', '@carol_hogler'] }, () => {
      cy.postCustomFieldValueInvalid(`/ticketCustomFieldValue/InsertValues?token=${Cypress.env('login').token}`, bodyCustomFieldValue.insertEmptyValuesCustom)
        .then((resp) => {
          expect(resp.status).to.eq(400)
          expect(resp.body).to.eq('Invalid body format!')
        })
    }
  )
})