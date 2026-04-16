Cypress.Commands.add('postMoviSchedule', (urlBaseParam, headerTenantId, headerAuthorId, appIntegrationUuid, userId, tenantId, typeFile, apiToken, apiUrl) => {
  cy.api({
    method: 'POST',
    url: `${urlBaseParam}`,
    headers: {
      'accept': 'application/json',
      'tenant-id': `${headerTenantId}`,
      'author-id': `${headerAuthorId}`
    },
    body: {
      'Type':0,
      'AppIntegrationUuid': `${appIntegrationUuid}`,
      'Def':{
        'Spec':'movidesk-proxy',
        'Title':'Exportação de Pessoas',
        'Params':{
          'UserId': `${userId}`,
          'TenantId': `${tenantId}`,
          'Export': `${typeFile}`,
          'Model':{
            'Start':0,
            'Limit':50,
            'EndData':false,
            'Count':0,
            'OrderBy':'Name',
            'OrderIsAsc':true
          },
          'ApiToken': `${apiToken}`,
          'ApiUrl': `${apiUrl}`,
          'MovideskOrigin':1
        }
      }
    },
    failOnStatusCode: false
  })
})