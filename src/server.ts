import express from 'express';
import dotenv from 'dotenv';

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

// all the routes
server.use(app);

server.listen(port, () => {
  console.log(`api rocks in http://localhost:${port}`);
});
