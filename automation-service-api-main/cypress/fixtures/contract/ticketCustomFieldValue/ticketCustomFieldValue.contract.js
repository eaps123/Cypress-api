import Joi from 'joi'

const postCustomFieldInsertValuesContract = Joi.object({
  values: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      success: Joi.boolean(),
      message: Joi.string().allow(null, '')
    })
  )
})

const postCustomFieldUpdateValuesContract = Joi.object({
  values: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      success: Joi.boolean(),
      message: Joi.string().allow(null, '')
    })
  )
})

const postCustomFieldDeleteValuesContract = Joi.object({
  values: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      success: Joi.boolean(),
      message: Joi.string().allow(null, '')
    })
  )
})

const postCustomFieldInsertValuesDuplicateContract = Joi.object({
  values: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      success: Joi.boolean(),
      message: Joi.string().allow('The value TESTE API - CAMPOS ADICIONAIS 01 already exists as an option for the field TESTE API.')
    })
  )
})

export { postCustomFieldInsertValuesContract, postCustomFieldUpdateValuesContract, postCustomFieldDeleteValuesContract,
  postCustomFieldInsertValuesDuplicateContract }