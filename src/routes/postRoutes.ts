import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import {
  createPost,
  getPosts,
  like,
  createComment
} from '../controllers/postController';

const router = Router();

router.get('/posts', authMiddleware, getPosts);
router.post('/posts', authMiddleware, createPost);

router.put('/posts/like/:postId', authMiddleware, like);
router.put('/post/comment/:postId', authMiddleware, createComment);
export default router;
