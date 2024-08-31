import {Request, Response} from 'express'; 
import { prisma } from '../database.js';

export default async function createEstacao(request: Request, response: Response){
    try {
      const {id, name, desc, city} = request.body;
      const estacaoExist = await prisma.estacao.findUnique({
        where: {id},
    });

      if (estacaoExist) {
        return response.json ({
          error: true,
          message: 'Erro: Estação já existe!'
        });
      }

      const estacao = await prisma.estacao.create ({
        data: {
          id,
          name,
          desc,
          city
        }
      });

      return response.json ({
        error: false,
        message: 'Sucesso: Estação criada com sucesso!',
        estacao
      });
  
    } catch (error: any) {
      return response.json({message: error.message});
    }
  }

  export async function listEstacao(request: Request, response: Response){
    try {
      const {id} = request.params;
  
  
      const estacao = await prisma.estacao.findUnique({where: {id: Number(id)}});
  
      if(!estacao){
        return response.json ({
        error: true,
        message: 'Erro: Estação não encontrada!'
      });
     }
  
       return response.json ({
        error: false,
        estacao
      });
  
  
    } catch (error: any) {
      return response.json({message: error.message});
    }
  }