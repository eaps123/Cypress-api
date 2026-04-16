import Joi from 'joi'

const postTagExportToAsyncCSV = Joi.object({
    status: Joi.string().allow(null, ''),
})  

export { postTagExportToAsyncCSV }