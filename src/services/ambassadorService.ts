import { conflictError } from '@/utils/errorUtils.js'
import * as ambassadorRepository from '../repositories/ambassadorRepository.js'

async function findAllAmbassador() {
  const data = await ambassadorRepository.findEverything()
  return data
}

async function createAmbassador(body: any) {
  const { title } = body
  const ambassadorAlreadyExists = await ambassadorRepository.findByTitle(title)
  console.log(ambassadorAlreadyExists)
  if (ambassadorAlreadyExists) throw conflictError()
  await ambassadorRepository.insertAmbassador(body)
  return
}

const ambassadorService = {
  findAllAmbassador,
  createAmbassador
}

export default ambassadorService
