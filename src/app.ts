import { Router } from 'express';

// user controller
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = Router();

app.use(userRoutes);

app.use(postRoutes);

export default app;
