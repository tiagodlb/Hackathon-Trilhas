import { Estacao } from '@prisma/client'

export type GetEstacaoData = Omit<Estacao, 'id'>
