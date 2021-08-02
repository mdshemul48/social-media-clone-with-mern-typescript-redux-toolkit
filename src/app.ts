import { Router } from 'express';

// user controller
import userRoutes from './routes/userRoutes';

const app = Router();

app.use(userRoutes);

export default app;
