/* eslint-disable no-multiple-empty-lines */
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// server config
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// all the routes
app.get('/', (req: Request, res: Response) => {
  res.send('hell world');
});

app.listen(port, () => {
  console.log('api rocks in http://localhost:5000');
});
