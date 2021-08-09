import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/post', authMiddleware, (req, res) => {
  console.log(req.body.userId);
  res.send('hello world');
});
export default router;
