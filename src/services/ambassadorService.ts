import { conflictError } from '@/utils/errorUtils.js'
import * as ambassadorRepository from '../repositories/ambassadorRepository.js'
import { GetAmbassadorData } from '@/types/ambassadorType.js'

async function findAllAmbassador(): Promise<GetAmbassadorData[]> {
  return ambassadorRepository.findEverything()
}

async function createAmbassador(body: GetAmbassadorData): Promise<void> {
  const { title } = body
  const ambassadorAlreadyExists = await ambassadorRepository.findByTitle(title)
  if (ambassadorAlreadyExists) throw conflictError('Ambassador already exists')
  await ambassadorRepository.insertAmbassador(body)
}

async function updateAmbassador(id: number, body: GetAmbassadorData): Promise<void> {
  const ambassador = await ambassadorRepository.findById(id)
  if (!ambassador) throw conflictError('Ambassador not found')
  await ambassadorRepository.updateAmbassador(id, body)
}

async function deleteAmbassador(id: number): Promise<void> {
  const ambassador = await ambassadorRepository.findById(id)
  if (!ambassador) throw conflictError('Ambassador not found')
  await ambassadorRepository.deleteAmbassador(id)
}

const ambassadorService = {
  findAllAmbassador,
  createAmbassador,
  updateAmbassador,
  deleteAmbassador
}

export default ambassadorService
