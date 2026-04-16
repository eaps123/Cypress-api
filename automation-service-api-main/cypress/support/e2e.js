import './commands'
import './request/tickets/tickets'
import './request/tokens/tokens'
import './request/user/user'
import './request/person/person'
import './request/timeAgreement/timeAgreement'
import './request/survey/survey'
import './request/activity/activity'
import './request/services/services'
import './request/ticketCustomFieldValue/ticketCustomFieldValue'
import './request/timeAgreementConsumption/timeAgreementConsumption'
import './request/internal/moviSchedule/moviSchedule'
import './request/kb/kb'
import './request/sso/sso'
import './request/internal/tags/tags'

require('cypress-terminal-report/src/installLogsCollector')()
require('cypress-plugin-api')
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

chai.use(require("chai-json-schema"));