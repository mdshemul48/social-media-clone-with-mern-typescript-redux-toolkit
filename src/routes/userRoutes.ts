import { Router } from 'express';

// controllers
import { login, loginValidator, signup } from '../controllers/userController';

const router = Router();

// routes
router.post('/login', loginValidator, login);
router.post('/signup', signup);
export default router;
