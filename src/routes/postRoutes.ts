import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import {
  createPost,
  getPosts,
  like,
  createComment,
  createCommentValidator
} from '../controllers/postController';

const router = Router();

router.get('/posts', authMiddleware, getPosts);
router.post('/posts', authMiddleware, createPost);

router.put('/posts/like/:postId', authMiddleware, like);
router.put(
  '/posts/comment',
  authMiddleware,
  createCommentValidator,
  createComment
);
export default router;
