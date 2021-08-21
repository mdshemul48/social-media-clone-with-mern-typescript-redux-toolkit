import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import { createPost, getPosts, like } from '../controllers/postController';

const router = Router();

router.get('/posts', authMiddleware, getPosts);
router.post('/posts', authMiddleware, createPost);

router.post('/posts/like/:postId', authMiddleware, like);

export default router;
