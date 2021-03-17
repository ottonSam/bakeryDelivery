import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import Requeste from '../models/Request';
import User from '../models/User';

class RequestController{
  async index(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    const result = await repository.find();
    return res.json(result);
  }
  async indexDay(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    const result = await repository.find({ dia: req.params.dia});
    return res.json(result);
  }
  async indexUser(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    const result = await repository.find({ user: req.userId});
    return res.json(result);
  }
  async indexId(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    try{
      const result = await repository.findOne({ id: req.params.id});
      return res.json(result);
    } catch {
      return res.sendStatus(404);
    }
  }
  async store(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    const repositoryUser = getRepository(User);
    

    const { produto, dia, user} = req.body;

    const userExists = repositoryUser.findOne({ id: user});

    if(!userExists) {
      return res.sendStatus(409);
    }

    const request = repository.create({ produto, dia, user });
    await repository.save(request);

    return res.json(request);
  }
  async delete(req: Request, res: Response) {
    const repository = getRepository(Requeste);
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
  async edit(req: Request, res: Response) {
    const repository = getRepository(Requeste);
    const repositoryUser = getRepository(User);

    const { user} = req.body;

    const userExists = repositoryUser.findOne({ id: user});

    if(!userExists) {
      return res.sendStatus(409);
    }

    try {
      const request = await repository.findOne({where: {id: req.params.id}});
      
      if(!request) {
        return res.sendStatus(401);
      }
  
      repository.merge(request, req.body);
      
      const results = await repository.save(request);
      
      return res.json(results);
      } catch {
        return res.sendStatus(401);
      }
  
  }
  
}

export default new RequestController();