import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import RequestController from './app/controllers/RequestController';

import AuthController from './app/controllers/AuthController';
import IsRootController from './app/controllers/IsRootController';

import authMiddleware from './app/middlewares/authMiddleware';
import isRootMiddleware from './app/middlewares/isRootMiddleware';

const router = Router();

router.get('/', (req, res) => {
  return res.send("You are using an Api created by ottonSam")
})

router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.put('/users/:id', authMiddleware, UserController.edit)

router.post('/auth', AuthController.authenticate); 
router.post('/authroot', IsRootController.authenticate);

router.get('/product', ProductController.index);
router.post('/product', isRootMiddleware, ProductController.store);
router.delete('/product/:id', isRootMiddleware, ProductController.delete);
router.put('/product/:id', isRootMiddleware, ProductController.edit)

router.post('/request', authMiddleware, RequestController.store);
router.put('/request/:id', authMiddleware, RequestController.edit);
router.delete('/request/:id', authMiddleware, RequestController.delete);

router.get('/request', isRootMiddleware, RequestController.index);
router.get('/request/day/:dia', isRootMiddleware, RequestController.indexDay);
router.get('/request/id/:id', isRootMiddleware, RequestController.indexId);

router.get('/request/user', authMiddleware, RequestController.indexUser);

export default router;