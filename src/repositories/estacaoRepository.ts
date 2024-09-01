import { GetEstacaoData } from '@/types/estacaoType.js'
import { prisma } from '../database.js'

export async function findById(id: number): Promise<GetEstacaoData | null> {
  return prisma.estacao.findUnique({
    where: { id }
  })
}

export async function findByTitle(name: string): Promise<GetEstacaoData | null> {
  return prisma.estacao.findUnique({
    where: { name }
  })
}

export async function findEverything(): Promise<GetEstacaoData[]> {
  return prisma.estacao.findMany()
}

export async function insertEstacao(estacao: GetEstacaoData): Promise<GetEstacaoData> {
  return prisma.estacao.create({
    data: estacao
  })
}

export async function updateEstacao(id: number, data: GetEstacaoData): Promise<GetEstacaoData> {
  return prisma.estacao.update({
    where: { id },
    data
  })
}

export async function deleteEstacao(id: number): Promise<GetEstacaoData> {
  return prisma.estacao.delete({
    where: { id }
  })
}
