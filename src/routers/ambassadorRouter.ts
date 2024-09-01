import express from 'express'
import {
  getAmbassador,
  postAmbassador,
  updateAmbassador,
  deleteAmbassador
} from '@/controllers/ambassadorController.js'

const router = express.Router()

router.get('/ambassadors', getAmbassador)
router.post('/ambassadors', postAmbassador)
router.put('/ambassadors', updateAmbassador)
router.delete('/ambassadors/:id', deleteAmbassador)

export default router
