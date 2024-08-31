import ambassadorService from '@/services/ambassadorService.js'
import { Request, Response } from 'express'

export async function getAmbassador(req: Request, res: Response) {
  const data = await ambassadorService.findAllAmbassador()
  return res.send(data)
}

export async function postAmbassador(req: Request, res: Response) {
  await ambassadorService.createAmbassador(req.body)
  return res.sendStatus(201)
}
