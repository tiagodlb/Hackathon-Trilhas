import { Ambassador } from '@prisma/client'

export type GetAmbassadorData = Omit<Ambassador, 'id'>
