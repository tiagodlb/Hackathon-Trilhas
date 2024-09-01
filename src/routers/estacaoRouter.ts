import { getEstacoes, postEstacao } from '@/controllers/estacaoController.js'
import { validateSchemaMiddleware } from '@/middlewares/validateSchemaMiddleware.js'
import { estacaoSchema } from '@/schemas/estacaoSchema.js'
import { Router } from 'express'

const estacaoRouter = Router()

estacaoRouter.post('/estacao', validateSchemaMiddleware(estacaoSchema), postEstacao)
estacaoRouter.get('/estacao', getEstacoes)

export default estacaoRouter
