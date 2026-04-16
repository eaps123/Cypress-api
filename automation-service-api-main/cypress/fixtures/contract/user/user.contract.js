import Joi from 'joi'

const postUserSchema = Joi.object({
  message: Joi.string().required(),
  _id: Joi.string().required()
})

const getIdUserSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  administrador: Joi.boolean(),
  _id: Joi.string().required()
})

export { postUserSchema, getIdUserSchema }