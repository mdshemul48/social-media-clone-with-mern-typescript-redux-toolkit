import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// mongoose connector function
import mongooseConnect from './config/mongooseConnect';
// app
import app from './app';

// server config
dotenv.config();
const port = process.env.PORT || 5000;
const server = express();
// connecting mongoose
mongooseConnect();

server.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// all the routes
server.use(app);

server.listen(port, () => {
  console.log(`api rocks in http://localhost:${port}`);
});
