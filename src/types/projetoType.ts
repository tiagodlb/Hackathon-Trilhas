import { Projeto } from '@prisma/client'

export type GetProjetoData = Omit<Projeto, 'id'>
