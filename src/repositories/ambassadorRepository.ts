import { GetAmbassadorData } from '@/types/ambassadorType.js'
import { prisma } from '../database.js'

export async function findById(id: number): Promise<GetAmbassadorData | null> {
  return prisma.ambassador.findUnique({
    where: { id }
  })
}

export async function findByTitle(title: string): Promise<GetAmbassadorData | null> {
  return prisma.ambassador.findUnique({
    where: { title }
  })
}

export async function findEverything(): Promise<GetAmbassadorData[]> {
  return prisma.ambassador.findMany()
}

export async function insertAmbassador(ambassador: GetAmbassadorData): Promise<GetAmbassadorData> {
  return prisma.ambassador.create({
    data: ambassador
  })
}

export async function updateAmbassador(
  id: number,
  data: GetAmbassadorData
): Promise<GetAmbassadorData> {
  return prisma.ambassador.update({
    where: { id },
    data
  })
}

export async function deleteAmbassador(id: number): Promise<GetAmbassadorData> {
  return prisma.ambassador.delete({
    where: { id }
  })
}
