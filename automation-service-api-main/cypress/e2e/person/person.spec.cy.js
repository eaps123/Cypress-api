const person_payload = require('../../fixtures/payload/person/person')
import { faker } from '@faker-js/faker'

describe('Person', { tags: ['@person', '@external'] }, () => {
  //This code will be released when the token API is added to a new Rest version

  // let bearerToken;

  // beforeEach(() => {
  //   cy.postCreateNewApiToken().then((RespPostCreateNewApiToken) => {
  //     return bearerToken = RespPostCreateNewApiToken.body.apiToken
  //   })
  // })

  it('GET - /person - Search person all', { tags: ['@getPersonAll', '@positive'] }, () => {
    cy.getPersonAll(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`).then((resp) => {
      cy.validationSchema(resp.body, 'person', 'get-all-person').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
    })
  })

  it('GET - /person - Search by user id not found', { tags: ['@getPersonIdAnotherOrg', '@negative'] }, () => {
    cy.getPersonId(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('person').id_person_not_found}`,
    ).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('POST - /person - Validate "AccountEmail" invalid parameter', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_invalid}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('The account email is not valid. Please provide a valid email address and try again.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('POST - /person - Validate "AccountEmail" blank parameter', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_blank}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('Account email is required.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('POST - /person - Validate "AccountEmail" parameter invalid character', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_character}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('The account email is not valid. Please provide a valid email address and try again.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })
  
  it('POST - /person - Validate "AccountEmail" invalid parameter with spaces', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_blank}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('Account email is required.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('POST - /person - Validate "AccountEmail" invalid parameter with spaces', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_blank}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('Account email is required.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('POST - /person - Validate "AccountEmail" parameter valid email already existing in the base', { tags: ['@negative'] }, () => {
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').email_exist_on_base}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('The account email is already registered by another user. Please provide an unused email address and try again.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('PACTH - /person - Validate "AccountEmail" invalid parameter', { tags: ['@negative'] }, () => {
    cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').person_id}`, `${Cypress.env('sso').email_invalid}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('The account email is not valid. Please provide a valid email address and try again.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('PACTH - /person - Validate "AccountEmail" blank parameter', { tags: ['@negative'] }, () => {
    cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').person_id}`, `${Cypress.env('sso').email_blank}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('Account email is required.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('PACTH - /person - Validate "AccountEmail" parameter invalid character', { tags: ['@negative'] }, () => {
    cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').person_id}`, `${Cypress.env('sso').email_character}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('The account email is not valid. Please provide a valid email address and try again.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })
  
  it('PACTH - /person - Validate "AccountEmail" invalid parameter with spaces', { tags: ['@negative'] }, () => {
    cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').person_id}`, `${Cypress.env('sso').email_blank}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('Account email is required.')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('PACTH - /person - Validate "AccountEmail" parameter valid email with more than 128 characters', { tags: ['@negative'] }, () => {
    cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${Cypress.env('sso').person_id}`, `${Cypress.env('sso').email_more_than_128_characters}`
    ).then((resp) => {
      expect(resp.status).to.eq(400)
      expect(resp.body[0].errorMessage).equal('<b>Account email</b> must be between 1 and 128 characters')
      expect(resp.body[0].propertyName).equal('AccountEmail')
    })
  })

  it('E2E - /person - E2E person agent', { tags: ['@e2ePerson', '@e2e', '@smoke_test', '@positive'] }, () => {
    let reqAccountEmail = `automation-api-createPerson-${faker.datatype.uuid()}@service.com`
    cy.postPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, reqAccountEmail)
      .then(resp => {
        expect(resp.status).to.eq(200)
        cy.wait(5000)
        cy.getPersonId(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
          cy.validationSchema(resp.body, 'person', 'get-id-person')
            .then(valid => {
              expect(valid).to.be.true
            })
        })
        cy.patchPerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${resp.body.id}`, `${reqAccountEmail}`)
          .then((resp) => {
            expect(resp.status).to.eq(200)
          })
        cy.wait(5000)
        cy.getPersonId(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body.businessName).to.eql('Automation API Cypress Update')
        })
        cy.deletePerson(`${Cypress.env('url').url_base_v1}/persons`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
        })
      })
  })
})