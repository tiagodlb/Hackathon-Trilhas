import { GetAmbassadorData } from '@/types/ambassadorType.js'
import { prisma } from '../database.js'

export async function findById(id: number) {
  return prisma.ambassador.findUnique({
    where: { id }
  })
}

export async function findByTitle(title: string) {
  return prisma.ambassador.findUnique({
    where: { title }
  })
}

export async function findEverything() {
  return prisma.ambassador.findMany()
}

export async function insertAmbassador(ambassador: GetAmbassadorData) {
  return prisma.ambassador.create({
    data: ambassador
  })
}

export async function updateAmbassador(id: number, data: GetAmbassadorData) {
  return prisma.ambassador.update({
    where: { id },
    data
  })
}

export async function deleteAmbassador(id: number) {
  return prisma.ambassador.delete({
    where: { id }
  })
}
