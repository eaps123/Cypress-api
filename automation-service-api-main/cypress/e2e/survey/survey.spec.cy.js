import * as getSuvery from '../../fixtures/contract/survey/survery.contract'

describe('Survey ', { tags: ['@survey', '@external'] }, () => {

  it('GET - /questions - Search survery questions', { tags: ['@survey_questions', '@positive', '@fabio_santos'] }, () => {
    cy.getSurveyQuestions(`${Cypress.env('url').url_base_v1}/survey/questions`, `${Cypress.env('login').token}`).then((resp) => {
      cy.validationSchema(resp.body, 'survery', 'questions.schema').then((valid) => {
        expect(valid).to.be.true
      })
      expect(resp.status).to.eq(200)
      expect(getSuvery.getSurveyQuestions.validateAsync(resp.body))
    })
  })

  it('GET - /responses - Search survery responses', { tags: ['@survey_responses', '@positive', '@fabio_santos'] }, () => {
    cy.getSurveyResponses(`${Cypress.env('url').url_base_v1}/survey/responses`, `${Cypress.env('login').token}`).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(getSuvery.getSurveyResponses.validateAsync(resp.body))
    })
  })
})
