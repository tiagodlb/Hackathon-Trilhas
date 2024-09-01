import ambassadorService from '@/services/ambassadorService.js'
import { Request, Response } from 'express'

/**
 * Get all Ambassadors
 * @param {Request} req
 * @param {Response} res
 */
export async function getAmbassador(req: Request, res: Response) {
  try {
    const ambassadors = await ambassadorService.findAllAmbassador()
    return res.status(200).json(ambassadors)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch Ambassadors' })
  }
}

/**
 * Create a new Ambassador
 * @param {Request} req
 * @param {Response} res
 */
export async function postAmbassador(req: Request, res: Response) {
  try {
    await ambassadorService.createAmbassador(req.body)
    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to create Ambassador' })
  }
}

/**
 * Update an existing Ambassador
 * @param {Request} req
 * @param {Response} res
 */
export async function updateAmbassador(req: Request, res: Response) {
  try {
    await ambassadorService.updateAmbassador(req.body)
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to update Ambassador' })
  }
}

/**
 * Delete an Ambassador
 * @param {Request} req
 * @param {Response} res
 */
export async function deleteAmbassador(req: Request, res: Response) {
  try {
    const { id } = req.params
    await ambassadorService.deleteAmbassador(Number(id))
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to delete Ambassador' })
  }
}
