import { conflictError } from '@/utils/errorUtils.js'
import * as estacaoRepository from '../repositories/estacaoRepository.js'
import { GetEstacaoData } from '@/types/estacaoType.js'

async function findAllEstacao(): Promise<GetEstacaoData[]> {
  return estacaoRepository.findEverything()
}

async function createEstacao(body: GetEstacaoData): Promise<void> {
  const { name } = body
  const estacaoAlreadyExists = await estacaoRepository.findByTitle(name)
  if (estacaoAlreadyExists) throw conflictError('Estacao already exists')
  await estacaoRepository.insertEstacao(body)
}

async function updateEstacao(id: number, body: GetEstacaoData): Promise<void> {
  const estacao = await estacaoRepository.findById(id)
  if (!estacao) throw conflictError('Estacao not found')
  await estacaoRepository.updateEstacao(id, body)
}

async function deleteEstacao(id: number): Promise<void> {
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
