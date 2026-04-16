const payload = require('../../fixtures/payload/services/services')

describe('Services', { tags: ['@services', '@external'] }, () => {

  it('E2E - /services ', { tags: ['@e2e_services', '@negative', '@ester_silva'] }, () => {
    cy.postService(`${Cypress.env('url').url_base_v1}/services`, `${Cypress.env('login').token}`, payload.createServiceE2e).then((resp) => {
      expect(resp.status).to.eq(200)
      cy.wait(5000)
      cy.getServiceId(`${Cypress.env('url').url_base_v1}/services`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
        expect(resp.status).to.eq(200)
        cy.validationSchema(resp.body, 'services', 'service_get').then(valid => {
          expect(valid).to.be.true
          expect(resp.body.description).to.eql(`${Cypress.env('services').description}`)
        })
      })
      cy.patchServiceId(`${Cypress.env('url').url_base_v1}/services`, `${Cypress.env('login').token}`, `${resp.body.id}`, payload.updateService).then((resp) => {
        expect(resp.status).to.eq(200)
      })
      cy.wait(5000)
      cy.getServiceId(`${Cypress.env('url').url_base_v1}/services`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body.name).to.eq('AUTOMATION NAME UPDATE')
      })
      cy.delServiceId(`${Cypress.env('url').url_base_v1}/services`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
        expect(resp.status).to.eq(200)
      })
    })

  })
})
