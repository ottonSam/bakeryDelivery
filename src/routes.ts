import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import RequestController from './app/controllers/RequestController';
import RequestDayController from './app/controllers/RequestDayController';

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
router.post('/requestday', authMiddleware, RequestDayController.store);
router.put('/request/:id', authMiddleware, RequestController.edit);
router.delete('/request/:id', authMiddleware, RequestController.delete);
router.delete('/requestday/:id', authMiddleware, RequestDayController.delete);

router.get('/request/day/:dia', authMiddleware, RequestController.indexDay);
router.get('/request/id/:id', authMiddleware, RequestController.indexId);
router.get('/requestday', isRootMiddleware, RequestDayController.index);
router.get('/requestday/day/:dia', isRootMiddleware, RequestDayController.indexDay);
router.get('/requestday/user/', authMiddleware, RequestDayController.indexUser);
router.get('/requestday/id/:id', isRootMiddleware, RequestDayController.indexId);

export default router;