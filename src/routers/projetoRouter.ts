import { getEstacoes, postEstacao } from '@/controllers/estacaoController.js'
import { validateSchemaMiddleware } from '@/middlewares/validateSchemaMiddleware.js'
import { projetoSchema } from '@/schemas/projetoSchema.js'
import { Router } from 'express'

const projetoRouter = Router()

projetoRouter.post('/projeto', validateSchemaMiddleware(projetoSchema), postEstacao)
projetoRouter.get('/projeto', getEstacoes)

export default projetoRouter
