import Joi from 'joi'

const getSurveyQuestions = Joi.array().items(
  Joi.object({
    id: Joi.string().valid().required(),
    languages: Joi.array().items(
      Joi.object({
        cultureId: Joi.string().allow(null, '').required(),
        description: Joi.string().allow(null, '').required(),
      })),
    isActive: Joi.boolean().required(),
    type: Joi.number().required(),
  })
)

const getSurveyResponses = Joi.object({
  hasMore: Joi.boolean().valid().required(),
  items: Joi.array().valid().required()
})

export { getSurveyQuestions, getSurveyResponses }