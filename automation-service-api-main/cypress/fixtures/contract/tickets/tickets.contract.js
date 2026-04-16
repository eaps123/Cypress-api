import Joi from 'joi'

const getProtocolTicketsSchema = Joi.array().items(Joi.object({
  protocol: Joi.string().allow(null, '')
}))

const getParametersTicketsSchema = Joi.array()
  .items(
    Joi.object({
      id: Joi.string().valid(),
      protocol: Joi.string().allow(null, ''),
      type: Joi.number().valid().required()
    })
  )

const getDatesTicketsSchema = Joi.array()
  .items(
    Joi.object({
      createdDate: Joi.string().required(),
      subject: Joi.string().allow(null, '').required(),
      id: Joi.number().valid().required(),
    })
  )

const getStatusTicketsSchema = Joi.array()
  .items(
    Joi.object({
      subject: Joi.string().allow(null, '').required(),
      id: Joi.number().valid().required(),
      status: Joi.string().valid()
    })
  )

const postTicketSuccess = Joi.object({
  id: Joi.number().valid().required(),
  protocol: Joi.string().allow(null, ''),
})
export { getProtocolTicketsSchema, getParametersTicketsSchema, getDatesTicketsSchema, getStatusTicketsSchema, postTicketSuccess  }