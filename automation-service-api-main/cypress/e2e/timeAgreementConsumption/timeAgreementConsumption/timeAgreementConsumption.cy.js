
describe('timeAgreementConsumption', { tags: ['@time_agreement_consumption', '@external'] }, () => {

  it('GET - /timeAgreementConsumption - ', { tags: ['@get_time_agreement_consumption', '@successe', '@ester_silva'] }, () => {
    cy.getTimeAgreementConsumption(`${Cypress.env('url').url_base_v1}/timeAgreement`, `${Cypress.env('login').token}`, `${Cypress.env('timeAgreementConsumption').select}`).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.status).to.eq(200)
      // expect(resp.body[0]).to.have.property('id').and.be.a('number')
      // expect(resp.body[0]).to.have.property('name').and.be.a('string')
      // expect(resp.body[0]).to.have.property('renewalDay').and.be.a('number')
    })
  })
})