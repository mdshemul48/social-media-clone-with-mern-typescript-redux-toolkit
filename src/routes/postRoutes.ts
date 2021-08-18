import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import { createPost, getPosts } from '../controllers/postController';

const router = Router();

router.get('/posts', authMiddleware, getPosts);
router.post('/posts', authMiddleware, createPost);

export default router;
