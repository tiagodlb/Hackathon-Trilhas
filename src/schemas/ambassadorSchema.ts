import Joi from 'joi'

export const ambassadorSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  estacaoId: Joi.number().integer().required()
})
