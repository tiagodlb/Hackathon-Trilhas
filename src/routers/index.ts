import { Router } from 'express'
import ambassadorRouter from './ambassadorRouter.js'

const router = Router()

router.use(ambassadorRouter)

export default router
