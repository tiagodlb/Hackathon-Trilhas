import { GetEstacaoData } from '@/types/estacaoType.js'
import { prisma } from '../database.js'

export async function findById(id: number) {
  return prisma.estacao.findUnique({
    where: { id }
  })
}

export async function findByTitle(name: string) {
  return prisma.estacao.findUnique({
    where: { name }
  })
}

export async function findEverything() {
  return prisma.estacao.findMany()
}

export async function insertEstacao(estacao: GetEstacaoData) {
  return prisma.estacao.create({
    data: estacao
  })
}

export async function updateEstacao(id: number, data: GetEstacaoData) {
  return prisma.estacao.update({
    where: { id },
    data
  })
}

export async function deleteEstacao(id: number) {
  return prisma.estacao.delete({
    where: { id }
  })
}
