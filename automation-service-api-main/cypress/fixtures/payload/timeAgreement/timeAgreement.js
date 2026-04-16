import { faker } from '@faker-js/faker'

export const updateTimeAgreement = {
  'name': 'AUTOMATION NAME ',
  'emailSubject': 'Assunto update' ,
  'emailDescription': 'Email importante Update'

}

export const createTimeAgreement = {

  'name': `AUTOMATION NAME ${faker.datatype.uuid()}`,
  'emailSubject': 'Assunto',
  'emailDescription': `Email importante ${faker.datatype.uuid()} `,
  'emailAccount': null,
  'isActive': true,
  'differentiateHoursFranchise': false,
  'differentiateHoursConsumption': true,
  'accumulateUnusedHours': false,
  'renewalDay': 23,
  'contractedHours': 344,
  'consumptionDeadline': null,
  'emailSendDay': null,
  'baseAmount': 420,
  'createdOn': '0001-01-01T00:00:00',
  'disabledDate': null,
  'typeActivities': [
    {
      'workingTimeType': 'Extra',
      'activity': 'Auto',
      'franchise': null,
      'value': 22,
      'valueExceededHour': 22,
      'shootdownContract': true,
      'allowHoursExcedent': true
    }
  ],
  'timeTypeConsumption': [
    {
      'workingTimeType': 'Extra',
      'value': 4.34
    }
  ],
  'clients': [
    {
      'id': `${Cypress.env('person').cod_ref_person}`,
      'email': 'automation-api-createTimeAgreement@movidesk.com'
    }
  ]

}

export const patchTimeAgreementE2e = {

  'name': `AUTOMATION NAME ${faker.datatype.uuid()}`,
  'emailSubject': 'Assunto',
  'emailDescription': `Email importante ${faker.datatype.uuid()} `,
  'emailAccount': null,
  'isActive': true,
  'differentiateHoursFranchise': false,
  'differentiateHoursConsumption': true,
  'accumulateUnusedHours': false,
  'renewalDay': 23,
  'contractedHours': 344,
  'consumptionDeadline': null,
  'emailSendDay': null,
  'baseAmount': 420,
  'createdOn': '0001-01-01T00:00:00',
  'disabledDate': null,
  'typeActivities': [
    {
      'workingTimeType': 'Extra',
      'activity': 'Auto',
      'franchise': null,
      'value': 22,
      'valueExceededHour': 22,
      'shootdownContract': true,
      'allowHoursExcedent': true
    }
  ],
  'timeTypeConsumption': [
    {
      'workingTimeType': 'Extra',
      'value': 4.34
    }
  ],
  'clients': [
    {
      'id': `${Cypress.env('person').cod_ref_person}`
    }
  ]

}