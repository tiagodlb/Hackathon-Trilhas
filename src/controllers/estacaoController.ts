import estacaoService from '@/services/estacaoService.js'
import { Request, Response } from 'express'

/**
 * Get all Estacoes
 * @param {Request} req
 * @param {Response} res
 */
export async function getEstacoes(req: Request, res: Response) {
  try {
    const estacoes = await estacaoService.findAllEstacao()
    return res.status(200).json(estacoes)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch Estacoes' })
  }
}

/**
 * Create a new Estacao
 * @param {Request} req
 * @param {Response} res
 */
export async function postEstacao(req: Request, res: Response) {
  try {
    await estacaoService.createEstacao(req.body)
    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to create Estacao' })
  }
}

/**
 * Update an existing Estacao
 * @param {Request} req
 * @param {Response} res
 */
export async function updateEstacao(req: Request, res: Response) {
  try {
    await estacaoService.updateEstacao(req.body)
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to update Estacao' })
  }
}

/**
 * Delete an Estacao
 * @param {Request} req
 * @param {Response} res
 */
export async function deleteEstacao(req: Request, res: Response) {
  try {
    const { id } = req.params
    await estacaoService.deleteEstacao(Number(id))
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to delete Estacao' })
  }
}
