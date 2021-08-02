import { Router } from 'express';

// controllers
import { login, signup, signupValidator } from '../controllers/userController';

const router = Router();

// routes
router.post('/login', login);
router.post('/signup', signupValidator, signup);
export default router;
