const data = require('../../fixtures/response/kb/get_kb_title_data.json')

describe('Person', { tags: ['@kb', '@external'] }, () => {
  //This code will be released when the token API is added to a new Rest version

  // let bearerToken;

  // beforeEach(() => {
  //   cy.postCreateNewApiToken().then((RespPostCreateNewApiToken) => {
  //     return bearerToken = RespPostCreateNewApiToken.body.apiToken
  //   })
  // })

  it('[API][AUT][KB][GST-531] -   GET - /article - Search kb parameter q', { tags: ['@getArticleQ', '@positive'] }, () => {
    cy.getArticleAll(`${Cypress.env('url').url_base_new_kb_v1}/kb/article?`,
      `${Cypress.env('login').token}`, `${Cypress.env('kb').q}`,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ).then((resp) => {
      cy.validationSchema(resp.body, 'kb', 'get_kb_q_schema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
    })
  })

  it('[API][AUT][KB][GST-5041] - GET - /article - Search kb parameter title', { tags: ['@getArticleTitle', '@positive'] }, () => {
    cy.getArticleAll(`${Cypress.env('url').url_base_new_kb_v1}/kb/article?`,
      `${Cypress.env('login').token}`,
      '',
      `${Cypress.env('kb').title}`,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ).then((resp) => {
      cy.validationSchema(resp.body, 'kb', 'get_kb_title_schema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true,
        expect(resp.body).to.deep.keys(data)
      })
    })
  })

  it('[API][AUT][KB][QAS-530] - GET - /article - Search kb parameter updatedDateFrom', { tags: ['@UpdatedDateFrom', '@positive'] }, () => {
    cy.getArticleAll(`${Cypress.env('url').url_base_new_kb_v1}/kb/article?`,
      `${Cypress.env('login').token}`,
      '',
      '',
      `${Cypress.env('kb').updated_date_from}`,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ).then((resp) => {
      cy.validationSchema(resp.body, 'kb', 'get_kb_updated_date_from_schema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
    })
  })

  it('[API][AUT][KB][QAS-527] - GET - /article - Search kb parameter updatedDateTo', { tags: ['@UpdatedDateTo', '@positive'] }, () => {
    cy.getArticleAll(`${Cypress.env('url').url_base_new_kb_v1}/kb/article?`,
      `${Cypress.env('login').token}`,
      '',
      '',
      '',
      `${Cypress.env('kb').updated_date_to}`,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ).then((resp) => {
      cy.validationSchema(resp.body, 'kb', 'get_kb_updated_date_to_schema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
    })
  })

  it('[API][AUT][KB][QAS-532] - GET - /article - Search kb parameter tags', { tags: ['@tags', '@positive'] }, () => {
    cy.getArticleAll(`${Cypress.env('url').url_base_new_kb_v1}/kb/article?`,
      `${Cypress.env('login').token}`,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      `${Cypress.env('kb').tags}`,
      '',
      '',
      ''
    ).then((resp) => {
      cy.validationSchema(resp.body, 'kb', 'get_kb_tags_schema').then(valid => {
        expect(resp.status).to.eq(200)
        expect(valid).to.be.true
      })
    })
  })
})