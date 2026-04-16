
import * as timeAgreementContract from '../../fixtures/contract/timeAgreement/timeAgreement.contract'
const payload = require('../../fixtures/payload/timeAgreement/timeAgreement')

describe('timeAgreement', { tags: ['@time_agreement', '@external'] }, () => {

  it('POST - /timeAgreement - Creating post success', { tags: ['@post_time_agreement', '@successe', '@ester_silva'] }, () => {
    cy.postTimeAgreement(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, payload.createTimeAgreement).then((resp) => {
      cy.validationSchema(resp.body, 'timeAgreement', 'timeAgreementSchema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
      expect(timeAgreementContract.postTimeAgreementContract.validateAsync(resp.body))
    })
  })

  it('GET - /timeAgreement - Search for non-existent id', { tags: ['@get_time_agreement_id', '@negative', '@ester_silva'] }, () => {
    cy.getTimeAgreementid(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${Cypress.env('timeAgreement').id_not_found}`).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('GET - /timeAgreement - Search timeAgreement all', { tags: ['@get_time_agreement_all', '@positive', '@ester_silva'] }, () => {
    cy.getTimeAgreementAll(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${Cypress.env('timeAgreement').select}`).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body[0]).to.have.property('id').and.be.a('number')
      expect(resp.body[0]).to.have.property('name').and.be.a('string')
      expect(resp.body[0]).to.have.property('emailSubject').and.be.a('string')
    })
  })

  it('E2E - /timeAgreement', { tags: ['@e2e_timeagreement', '@positive', '@ester_silva'] }, () => {
    cy.postTimeAgreement(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, payload.patchTimeAgreementE2e).then((resp) => {
      expect(resp.status).to.eq(200)
      cy.getTimeAgreementid(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
        expect(resp.status).to.eq(200)
        cy.validationSchema(resp.body, 'timeAgreement', 'timeAgreementSchema').then(valid => {
          expect(valid).to.be.true
          expect(resp.body.emailSubject).to.eql(`${Cypress.env('timeAgreement').email_subject}`)
          cy.patchTimeAgreementId(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${resp.body.id}`, payload.updateTimeAgreement).then((resp) => {
            expect(resp.status).to.eq(200)
          })
          cy.getTimeAgreementid(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
            expect(resp.body.emailSubject).to.equal('Assunto update')
          })
          cy.delTimeAgreementid(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
            expect(resp.status).to.eq(200)
          })
        })

      })
    })

  })
})