import { Router } from 'express';

// controllers
import {
  login,
  loginValidator,
  signup,
  signupValidator
} from '../controllers/userController';

const router = Router();

// routes
router.post('/login', loginValidator, login);
router.post('/signup', signupValidator, signup);
export default router;
