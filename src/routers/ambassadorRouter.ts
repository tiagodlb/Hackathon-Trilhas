import { getAmbassador, postAmbassador } from '@/controllers/ambassadorController.js'
import { validateSchemaMiddleware } from '@/middlewares/validateSchemaMiddleware.js'
import { ambassadorSchema } from '@/schemas/ambassadorSchema.js'
import { Router } from 'express'

const ambassadorRouter = Router()

ambassadorRouter.post('/ambassador', validateSchemaMiddleware(ambassadorSchema), postAmbassador)
ambassadorRouter.get('/ambassador', getAmbassador)

export default ambassadorRouter
