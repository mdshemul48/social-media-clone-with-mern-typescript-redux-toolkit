import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import { createPost } from '../controllers/postController';

const router = Router();

router.post('/post', authMiddleware, createPost);

export default router;
