
describe('Movi-Schedule', { tags: ['@internal', '@movi_schedule'] }, () => {
  //This code will be released when the token API is added to a new Rest version

  // let bearerToken;

  // beforeEach(() => {
  //   cy.postCreateNewApiToken().then((RespPostCreateNewApiToken) => {
  //     return bearerToken = RespPostCreateNewApiToken.body.apiToken
  //   })
  // })
  it('POST -/jobs - Create file csv', { tags: ['@movi_schedule_csv'] }, () => {
    cy.postMoviSchedule(`${Cypress.env('url').url_movi_schedule}/jobs`,
      `${Cypress.env('moviSchedule').headerTenantId}`,
      `${Cypress.env('moviSchedule').headerAuthorId}`,
      `${Cypress.env('moviSchedule').appIntegrationUuid}`,
      `${Cypress.env('moviSchedule').userId}`,
      `${Cypress.env('moviSchedule').tenantId}`,
      `${Cypress.env('moviSchedule').typeFileCsv}`,
      `${Cypress.env('moviSchedule').apiToken}`,
      `${Cypress.env('moviSchedule').apiUrl}`,
    ).then((resp) => {
      cy.validationSchema(resp.body, 'internal/moviSchedule', 'moviScheduleSchema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(resp.body.id.tenantId).eq(parseInt(`${Cypress.env('moviSchedule').tenantId}`))
        expect(valid).to.be.true
      })
    })
  })

  it('POST -/jobs - Create file excel', { tags: ['@movi_schedule_excel'] }, () => {
    cy.postMoviSchedule(
      `${Cypress.env('url').url_movi_schedule}/jobs`,
      `${Cypress.env('moviSchedule').headerTenantId}`,
      `${Cypress.env('moviSchedule').headerAuthorId}`,
      `${Cypress.env('moviSchedule').appIntegrationUuid}`,
      `${Cypress.env('moviSchedule').userId}`,
      `${Cypress.env('moviSchedule').tenantId}`,
      `${Cypress.env('moviSchedule').typeFileExcel}`,
      `${Cypress.env('moviSchedule').apiToken}`,
      `${Cypress.env('moviSchedule').apiUrl}`,
    ).then((resp) => {
      cy.validationSchema(resp.body, 'internal/moviSchedule', 'moviScheduleSchema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(resp.body.id.tenantId).eq(parseInt(`${Cypress.env('moviSchedule').tenantId}`))
        expect(valid).to.be.true
      })
    })
  })
})