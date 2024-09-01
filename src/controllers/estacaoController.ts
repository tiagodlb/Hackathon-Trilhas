import estacaoService from '@/services/estacaoService.js'
import { Request, Response } from 'express'
import { GetEstacaoData } from '@/types/estacaoType.js'

/**
 * Get all Estacoes
 * @param {Request} req
 * @param {Response} res
 */
export async function getEstacao(req: Request, res: Response): Promise<Response> {
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
export async function postEstacao(req: Request, res: Response): Promise<Response> {
  try {
    const data: GetEstacaoData = req.body
    await estacaoService.createEstacao(data)
    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to create Estacao' })
  }
}

/**
 * Update an Estacao
 * @param {Request} req
 * @param {Response} res
 */
export async function updateEstacao(req: Request, res: Response): Promise<Response> {
  try {
    const id: number = Number(req.params.id)
    const data: GetEstacaoData = req.body
    await estacaoService.updateEstacao(id, data)
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
export async function deleteEstacao(req: Request, res: Response): Promise<Response> {
  try {
    const id: number = Number(req.params.id)
    await estacaoService.deleteEstacao(id)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to delete Estacao' })
  }
}
