import { Router } from 'express';

// controllers
import { login, signup } from '../controllers/userController';

const router = Router();

// routes
router.post('/login', login);
router.post('/signup', signup);
export default router;
