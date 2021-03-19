import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import RequestDay from '../models/RequestDay';
import User from '../models/User';

class RequestController{
  async index(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    const result = await repository.find();
    return res.json(result);
  }
  async indexDay(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    const result = await repository.find({ dia: req.params.dia});
    return res.json(result);
  }
  async indexUser(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    const result = await repository.find({ user: req.userId});
    return res.json(result);
  }
  async indexId(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    try{
      const result = await repository.findOne({ id: req.params.id});
      return res.json(result);
    } catch {
      return res.sendStatus(404);
    }
  }
  async store(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    const repositoryUser = getRepository(User);
    

    const { dia, user} = req.body;

    const userExists = repositoryUser.findOne({ id: user});

    if(!userExists) {
      return res.sendStatus(409);
    }

    const request = repository.create({ dia, user });
    await repository.save(request);

    return res.json(request);
  }
  async delete(req: Request, res: Response) {
    const repository = getRepository(RequestDay);
    try {
      const request = await repository.findOne({where: {id: req.params.id}});
      
      if(!request) {
        return res.sendStatus(401);
      }
  
      repository.delete(request);
      
      await repository.save(request);
      
      return res.json({"message": "pedido deletado com sucesso"});
      } catch {
        return res.sendStatus(401);
      }

  }
  
}

export default new RequestController();