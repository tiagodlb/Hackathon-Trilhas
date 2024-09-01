import { GetProjetoData } from '@/types/projetoType.js'
import { prisma } from '../database.js'

export async function findById(id: number) {
  return prisma.projeto.findUnique({
    where: { id }
  })
}

export async function findByTitle(title: string) {
  return prisma.projeto.findUnique({
    where: { title }
  })
}

export async function findEverything() {
  return prisma.projeto.findMany()
}

export async function insertProjeto(projeto: GetProjetoData) {
  return prisma.projeto.create({
    data: projeto
  })
}

export async function updateProjeto(id: number, data: GetProjetoData) {
  return prisma.projeto.update({
    where: { id },
    data
  })
}

export async function deleteProjeto(id: number) {
  return prisma.projeto.delete({
    where: { id }
  })
}
