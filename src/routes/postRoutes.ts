import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import { createPost, getPosts } from '../controllers/postController';

const router = Router();

router.get('/post', authMiddleware, getPosts);
router.post('/post', authMiddleware, createPost);

export default router;
