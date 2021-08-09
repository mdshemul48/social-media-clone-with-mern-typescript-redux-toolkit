import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserInterface } from '../types/user';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: [{ msg: 'token not passed.' }] });
  }
  if (typeof authorization !== 'string') {
    return res.status(401).json({ errors: [{ msg: 'invalid token' }] });
  }

  const token = authorization.split(' ')[1];
  const decodedData = <UserInterface>jwt.verify(token, process.env.SECRET_KEY!);
  if (!decodedData) {
    return res.status(401).json({ errors: [{ msg: 'invalid token' }] });
  }
  req.body.userId = decodedData._id;
  return next();
};
