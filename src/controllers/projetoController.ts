import { Request, Response } from 'express';
import { prisma } from '../database.js';

export default {
  async createProj(request: Request, response: Response) {
    try {
      const { id, title, desc, estacaoId } = request.body;


      const projetoExist = await prisma.proj.findUnique({ where: { id } });

      if (projetoExist) {
        return response.json({
          error: true,
          message: 'Erro: O projeto já existe!'
        });
      }


      const projeto = await prisma.proj.create({
        data: {
          id,
          title,
          desc,
          estacaoId
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso: Projeto cadastrado com sucesso!',
        projeto
      });

    } catch (error) {
      return response.json({ message: error.message });
    }
  }
};