import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
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
console.log(__dirname);
server.use('/public', express.static(path.join(__dirname, '../images')));
server.use(cors());
server.use(express.json());

// all the routes
server.use(app);

server.listen(port, () => {
  console.log(`api rocks in http://localhost:${port}`);
});
