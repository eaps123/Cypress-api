const payload = require ('../../../fixtures/payload/internal/tags/tagsExport')

describe('Exportação async de tags', { tags: ['@internal', '@tags'] }, () => {

    it('POST - /Tag/ExportToAsync/CSV- Exportação async de tags.', { tags: ['@post_login', '@post_tags_export', '@positive', '@carol_hogler'] }, () => {    
        cy.postLoginTags(`${Cypress.env('url').url_login_tag_export}`,`${Cypress.env('tagExportCSV').userName}`,`${Cypress.env('tagExportCSV').password}`).then((resp) => {
            expect(resp.status).to.eq(200)    
        })
        cy.postTagsExportToAsyncCSV(`${Cypress.env('url').url_tag_export_to_async_csv}`, payload.TagExportToAsyncCSV)
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })
})