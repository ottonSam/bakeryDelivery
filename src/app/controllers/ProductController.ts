import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import Product from '../models/Product';

class ProductController{
  async store(req: Request, res: Response) {
    const repository = getRepository(Product);
    const { produto } = req.body;

    const product = repository.create({ produto });
    await repository.save(product);

    return res.json(product);
  }
  async index(req: Request, res: Response) {
    const repository = getRepository(Product);
    const result = await repository.find();
    return res.json(result);
  }
  async delete(req: Request, res: Response) {
    const repository = getRepository(Product);
    try {
      const produto = await repository.findOne({where: {id: req.params.id}});
      
      if(!produto) {
        return res.sendStatus(401);
      }
  
      repository.delete(produto);
      
      const results = await repository.save(produto);
      
      return res.json({"message": "produto deletado com sucesso"});
      } catch {
        return res.sendStatus(401);
      }

  }
  async edit(req: Request, res: Response) {
    const repository = getRepository(Product);
    try {
    const produto = await repository.findOne({where: {id: req.params.id}});
    
    if(!produto) {
      return res.sendStatus(401);
    }

    repository.merge(produto, req.body);
    
    const results = await repository.save(produto);
    
    return res.json(results);
    } catch {
      return res.sendStatus(401);
    }
    
  }
}

export default new ProductController();