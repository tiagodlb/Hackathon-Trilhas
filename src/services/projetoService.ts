import { conflictError } from '@/utils/errorUtils.js'
import * as projetoRepository from '../repositories/projetoRepository.js'
import { GetProjetoData } from '@/types/projetoType.js'

async function findAllProjetos(): Promise<GetProjetoData[]> {
  return projetoRepository.findEverything()
}

async function createProjeto(body: GetProjetoData): Promise<void> {
  const { title } = body
  const projetoAlreadyExists = await projetoRepository.findByTitle(title)
  if (projetoAlreadyExists) throw conflictError('Projeto already exists')
  await projetoRepository.insertProjeto(body)
}

async function updateProjeto(id: number, body: GetProjetoData): Promise<void> {
  const projeto = await projetoRepository.findById(id)
  if (!projeto) throw conflictError('Projeto not found')
  await projetoRepository.updateProjeto(id, body)
}

async function deleteProjeto(id: number): Promise<void> {
  const projeto = await projetoRepository.findById(id)
  if (!projeto) throw conflictError('Projeto not found')
  await projetoRepository.deleteProjeto(id)
}

const projetoService = {
  findAllProjetos,
  createProjeto,
  updateProjeto,
  deleteProjeto
}

export default projetoService
