import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class IsRootController{
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const user = await repository.findOne({ where: { email }});

    if(!user || user.is_root === 0) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(senha, user.senha);

    if(!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id}, 'secretRoot', { expiresIn: '1d'});

    return res.json(token);

  }
}

export default new IsRootController();