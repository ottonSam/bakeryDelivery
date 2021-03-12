import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.put('/users/:id', authMiddleware, UserController.edit)

router.post('/auth', AuthController.authenticate); 

export default router;