import Joi from 'joi'

export const estacaoSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  city: Joi.string().required()
})
