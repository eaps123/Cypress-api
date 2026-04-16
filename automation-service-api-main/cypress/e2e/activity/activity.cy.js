const payload = require('../../fixtures/payload/activity/activity')

describe('Activety', { tags: ['@activety', '@external'] }, () => {

  it('GET - /activity - Search for non-existent id', { tags: ['@get_activity_id', '@negative', '@ester_silva'] }, () => {
    cy.getActivityId(`${Cypress.env('url').url_base_v1}/activity`, `${Cypress.env('login').token}`, `${Cypress.env('activity').id_not_found}`).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('PATCH - /activity - Update for id', { tags: ['@patch_activity_id', '@successe', '@ester_silva'] }, () => {
    cy.patchActivityId(`${Cypress.env('url').url_base_v1}/activity`, `${Cypress.env('login').token}`, `${Cypress.env('activity').id}`, payload.updateActivity)
      .then((resp) => {
        expect(resp.status).to.eq(200)
      })
  })
})

