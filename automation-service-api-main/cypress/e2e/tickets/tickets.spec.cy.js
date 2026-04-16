import * as ticketsContract from '../../fixtures/contract/tickets/tickets.contract'
const bodyTicketSuccess = require('../../fixtures/payload/tickets/post-tickets')

describe('GET - Tickets', { tags: ['@tickets', '@external'] }, () => {
  //This code will be released when the token API is added to a new Rest version

  // let bearerToken;

  // beforeEach(() => {
  //   cy.postCreateNewApiToken().then((RespPostCreateNewApiToken) => {
  //     return bearerToken = RespPostCreateNewApiToken.body.apiToken
  //   })
  // })

  it('GET - /tickets - Search tiket id', { tags: ['@getTicketId', '@positive'] }, () => {
    cy.postTicket(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, bodyTicketSuccess.createTicketsSuccess)
      .then(resp => {
        expect(ticketsContract.postTicketSuccess.validateAsync(resp.body))
        expect(resp.status).to.eq(200)
        cy.wait(5000)
        cy.getTicketId(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
        })
      })

  })

  it('GET - /tickets - Search without token', { tags: ['@getTicketWithoutToken', '@negative'] }, () => {
    cy.getTicketId(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token_unauthorized}`, 'token_unauthorized').then((resp) => {
      expect(resp.status).to.eq(401)
    })
  })

  it('GET - /tickets - Search with the parameters (id, protocol, type)', { tags: ['@getTicketParameters', '@positive'] }, () => {
    cy.getTicketSelect(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, 'protocol,type').then((resp) => {
      expect(resp.status).to.eq(200)
      return ticketsContract.getParametersTicketsSchema.validateAsync(resp.body)
    })
  })

  it('GET - /tickets - Search between dates ', { tags: ['@getTicketDates', '@positive'] }, () => {
    cy.getTicketSelect(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, 'id,subject,createdDate').then((resp) => {
      expect(resp.status).to.eq(200)
      return ticketsContract.getDatesTicketsSchema.validateAsync(resp.body)
    })
  })

  it('GET - /tickets - Search close states ', { tags: ['@getTiketCloseStates', '@positive'] }, () => {
    cy.getTicketSelect(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`,'id,subject,status').then((resp) => {
      expect(resp.status).to.eq(200)
      return ticketsContract.getStatusTicketsSchema.validateAsync(resp.body)
    })
  })

  it('E2E- /tickets - Create tiket success', { tags: ['@e2eTicket', '@e2e', '@positive', '@smoke_test'] }, () => {
    cy.postTicket(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, bodyTicketSuccess.createTicketsSuccess)
      .then(resp => {
        expect(ticketsContract.postTicketSuccess.validateAsync(resp.body))
        expect(resp.status).to.eq(200)
        cy.wait(5000)
        cy.getTicketId(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
        })
        cy.patchTicketId(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, `${resp.body.id}`, bodyTicketSuccess.updateTickets).then((resp) => {
          expect(resp.status).to.eq(200)
        })
        cy.wait(5000)
        cy.getTicketId(`${Cypress.env('url').url_base_v1}/tickets`, `${Cypress.env('login').token}`, `${resp.body.id}`).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body.subject).to.eql(`${Cypress.env('ticket').subject_update}`)
        })
      })
  })
})
