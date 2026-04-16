import * as status_resp from '../../fixtures/response/sso/sso'

describe('Signin - SSO', { tags: ['@sso', '@external'] }, () => {
  it("POST - /signin - Validate OnDemand authentication service valid email", { tags: ['@positive'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').sso_signin_email}`, `${Cypress.env('sso').sso_signin_password}`
    ).then((resp) => {
      expect(resp.status).to.eq(200)
      cy.validationSchema(resp.body, 'sso', 'post_sso_signin_schema').then(valid => {
        expect(valid).to.be.true
      })
    })
  })

  it("POST - /signin - Validate OnDemand authentication service invalid email", { tags: ['@negative'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').email_invalid}`, `${Cypress.env('sso').password_signin}`
    ).then((resp) => {
      expect(resp.status).to.eq(403)
      expect(resp.body.message).to.eql(`${Cypress.env('messages').msg_authorization_failed}`)
      expect(resp.body.httpStatusCode).to.eql(403)
    })
  })

  it("POST - /signin - Validate authentication service OnDemand email invalid parameter blank", { tags: ['@negative'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').email_blank}`, `${Cypress.env('sso').password_signin}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body).to.deep.keys(status_resp.respStatus400)
      expect(resp.body.errors.Email[0]).to.eq(`The Email field is required.`)
    })
  })

  it("POST - /signin - Validate authentication service OnDemand email invalid character parameter", { tags: ['@negative'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').email_character}`, `${Cypress.env('sso').password_signin}`
    ).then((resp) => {
      expect(resp.status).to.eq(403)
      expect(resp.body.message).to.eql(`${Cypress.env('messages').msg_authorization_failed}`)
      expect(resp.body.httpStatusCode).to.eql(403)
    })
  })

  it("POST - /signin - Validate authentication service OnDemand email invalid parameter with spaces", { tags: ['@negative'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').email_with_spaces}`, `${Cypress.env('sso').password_signin}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body).to.deep.keys(status_resp.respStatus400)
      expect(resp.body.errors.Email[0]).to.eq(`The Email field is required.`)
    })
  })

  it("POST - /signin - Validate authentication service OnDemand valid email but not in the base", { tags: ['@negative'] }, () => {
    cy.postSignin(`${Cypress.env('url').url_zsvc_sso_accounts}/signin`, `${Cypress.env('sso').email_not_on_base}`, `${Cypress.env('sso').password_signin}`
    ).then((resp) => {
      expect(resp.status).to.eq(403)
      expect(resp.body.message).to.eql(`${Cypress.env('messages').msg_authorization_failed}`)
      expect(resp.body.httpStatusCode).to.eql(403)
    })
  })
})