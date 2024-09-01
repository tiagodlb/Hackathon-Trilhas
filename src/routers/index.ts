import { Router } from 'express'
import ambassadorRouter from './ambassadorRouter.js'
import estacaoRouter from './estacaoRouter.js'
import projetoRouter from './projetoRouter.js'

const router = Router()

router.use(ambassadorRouter)
router.use(estacaoRouter)
router.use(projetoRouter)

export default router
