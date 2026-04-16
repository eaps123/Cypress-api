
import Joi from 'joi'

const postTimeAgreementContract = Joi.object({
  name: Joi.string().valid(),
  id: Joi.number().valid(),
  emailSubject: Joi.string().valid(),
  emailDescription: Joi.string().valid(),
  emailAccount: Joi.string().allow(null, ''),
  isActive: Joi.boolean(),
  differentiateHoursFranchise: Joi.boolean(),
  differentiateHoursConsumption: Joi.boolean(),
  accumulateUnusedHours: Joi.boolean(),
  renewalDay: Joi.number(),
  contractedHours: Joi.number(),
  consumptionDeadline: null,
  emailSendDay: null,
  baseAmount: Joi.number(),
  createdOn: Joi.string(),
  disabledDate: Joi.string().valid(null, ''),
  typeActivities: Joi.array().items(
    Joi.object({
      id: Joi.number(),
      activityId: Joi.number(),
      workingTimeType: Joi.string(),
      activity: Joi.string().allow(null, ''),
      franchise: Joi.string().valid(null, ''),
      value: Joi.number(),
      valueExceededHour: Joi.number().allow(null, ''),
      shootdownContract: Joi.boolean(),
      allowHoursExcedent: Joi.boolean()
    })


  ),
  timeTypeConsumption: Joi.array().items(
    Joi.object({
      id: Joi.number(),
      workingTimeType: Joi.string(),
      value: Joi.number(),
    })


  ),
  clients: Joi.array().items(
    Joi.object({

      id: Joi.string(),
      personType: Joi.number(),
      profileType: Joi.number(),
      businessName: Joi.string(),
      email: Joi.string().allow(null, ''),
      organization: Joi.string().allow(null, '')
    })
  ),
  emailDestinations: Joi.array().items()
})

export { postTimeAgreementContract }