import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController{
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, cpf, telefone, data_de_nascimento, logadouro, numero, estado,
    cidade, usuario, ponto_de_referencia, senha } = req.body;

    const userExists = await repository.findOne({ where: [
      { email },
      { cpf },
      { usuario }
    ]});

    if(userExists){
      return res.sendStatus(409);
    }

    const user = repository.create({ email, cpf, telefone, data_de_nascimento,
    logadouro, numero, estado, cidade, usuario, ponto_de_referencia, senha });
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();