import {
  getProjeto,
  postProjeto,
  updateProjeto,
  deleteProjeto
} from '@/controllers/projetoController.js'
import { validateSchemaMiddleware } from '@/middlewares/validateSchemaMiddleware.js'
import { projetoSchema } from '@/schemas/projetoSchema.js'
import { Router } from 'express'

const projetoRouter = Router()

projetoRouter.post('/projeto', validateSchemaMiddleware(projetoSchema), postProjeto)
projetoRouter.get('/projeto', getProjeto)
projetoRouter.put('/projeto/:id', validateSchemaMiddleware(projetoSchema), updateProjeto) // Added update route
projetoRouter.delete('/projeto/:id', deleteProjeto) // Added delete route

export default projetoRouter
