import {
  postEstacao,
  updateEstacao,
  deleteEstacao,
  getEstacao
} from '@/controllers/estacaoController.js'
import { validateSchemaMiddleware } from '@/middlewares/validateSchemaMiddleware.js'
import { estacaoSchema } from '@/schemas/estacaoSchema.js'
import { Router } from 'express'

const estacaoRouter = Router()

estacaoRouter.post('/estacao', validateSchemaMiddleware(estacaoSchema), postEstacao)
estacaoRouter.get('/estacao', getEstacao)
estacaoRouter.put('/estacao/:id', validateSchemaMiddleware(estacaoSchema), updateEstacao) // Added update route
estacaoRouter.delete('/estacao/:id', deleteEstacao) // Added delete route

export default estacaoRouter
