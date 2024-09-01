import projetoService from '@/services/projetoService.js'
import { Request, Response } from 'express'
import { GetProjetoData } from '@/types/projetoType.js'

/**
 * Get all Projetos
 * @param {Request} req
 * @param {Response} res
 */
export async function getProjeto(req: Request, res: Response): Promise<Response> {
  try {
    const projetos = await projetoService.findAllProjetos()
    return res.status(200).json(projetos)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch Projetos' })
  }
}

/**
 * Create a new Projeto
 * @param {Request} req
 * @param {Response} res
 */
export async function postProjeto(req: Request, res: Response): Promise<Response> {
  try {
    const data: GetProjetoData = req.body
    await projetoService.createProjeto(data)
    return res.sendStatus(201)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to create Projeto' })
  }
}

/**
 * Update a Projeto
 * @param {Request} req
 * @param {Response} res
 */
export async function updateProjeto(req: Request, res: Response): Promise<Response> {
  try {
    const id: number = Number(req.params.id)
    const data: GetProjetoData = req.body
    await projetoService.updateProjeto(id, data)
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to update Projeto' })
  }
}

/**
 * Delete a Projeto
 * @param {Request} req
 * @param {Response} res
 */
export async function deleteProjeto(req: Request, res: Response): Promise<Response> {
  try {
    const id: number = Number(req.params.id)
    await projetoService.deleteProjeto(id)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to delete Projeto' })
  }
}
