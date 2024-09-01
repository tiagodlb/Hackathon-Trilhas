import { conflictError } from '@/utils/errorUtils.js'
import * as ambassadorRepository from '../repositories/ambassadorRepository.js'

async function findAllAmbassador() {
  const data = await ambassadorRepository.findEverything()
  return data
}

async function createAmbassador(body) {
  const { title } = body
  const ambassadorAlreadyExists = await ambassadorRepository.findByTitle(title)
  if (ambassadorAlreadyExists) throw conflictError('Ambassador already exists')
  await ambassadorRepository.insertAmbassador(body)
}

async function updateAmbassador(body) {
  const { id } = body
  const ambassador = await ambassadorRepository.findById(id)
  if (!ambassador) throw conflictError('Ambassador not found')
  await ambassadorRepository.updateAmbassador(id, body)
}

async function deleteAmbassador(id) {
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
