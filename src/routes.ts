import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import AuthController from './app/controllers/AuthController';
import IsRootController from './app/controllers/IsRootController';
import authMiddleware from './app/middlewares/authMiddleware';
import isRootMiddleware from './app/middlewares/isRootMiddleware';

const router = Router();

router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.put('/users/:id', authMiddleware, UserController.edit)

router.post('/auth', AuthController.authenticate); 
router.post('/authroot', IsRootController.authenticate);

router.get('/product', ProductController.index);
router.post('/product', isRootMiddleware, ProductController.store);
router.delete('/product/:id', isRootMiddleware, ProductController.delete);
router.put('/product/:id', isRootMiddleware, ProductController.edit)

export default router;