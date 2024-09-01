import { conflictError } from '@/utils/errorUtils.js'
import * as estacaoRepository from '../repositories/estacaoRepository.js'

async function findAllEstacao() {
  const data = await estacaoRepository.findEverything()
  return data
}

async function createEstacao(body) {
  const { name } = body
  const estacaoAlreadyExists = await estacaoRepository.findByTitle(name)
  if (estacaoAlreadyExists) throw conflictError('Estacao already exists')
  await estacaoRepository.insertEstacao(body)
}

async function updateEstacao(body) {
  const { id, name } = body
  const estacao = await estacaoRepository.findById(id)
  if (!estacao) throw conflictError('Estacao not found')
  await estacaoRepository.updateEstacao(id, body)
}

async function deleteEstacao(id) {
  const estacao = await estacaoRepository.findById(id)
  if (!estacao) throw conflictError('Estacao not found')
  await estacaoRepository.deleteEstacao(id)
}

const estacaoService = {
  findAllEstacao,
  createEstacao,
  updateEstacao,
  deleteEstacao
}

export default estacaoService
