export const TagExportToAsyncCSV = {
    'Type':0,
    'AppIntegrationUuid':`${Cypress.env('tagExportCSV').AppIntegrationUuid}`,
    'Def':{
        'Spec':'movidesk-proxy',
        'Title':'Exporta\u00E7\u00E3o de Tags',
        'Params':{
            'ApiToken':`${Cypress.env('tagExportCSV').ApiToken}`,
            'ApiUrl':`${Cypress.env('tagExportCSV').ApiUrl}`,
            'UserId':`${Cypress.env('tagExportCSV').UserId}`,
            'TenantId':`${Cypress.env('tagExportCSV').TenantId}`,
            'CultureInfo':'pt-BR',
            'MovideskOrigin':3
        }
    }
}