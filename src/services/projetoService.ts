import { conflictError } from '@/utils/errorUtils.js'
import * as projetoRepository from '../repositories/projetoRepository.js'

async function findAllProjetos() {
  const data = await projetoRepository.findEverything()
  return data
}

async function createProjeto(body) {
  const { title } = body
  const projetoAlreadyExists = await projetoRepository.findByTitle(title)
  if (projetoAlreadyExists) throw conflictError('Projeto already exists')
  await projetoRepository.insertProjeto(body)
}

async function updateProjeto(body) {
  const { id, title } = body
  const projeto = await projetoRepository.findById(id)
  if (!projeto) throw conflictError('Projeto not found')
  await projetoRepository.updateProjeto(id, body)
}

async function deleteProjeto(id) {
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
