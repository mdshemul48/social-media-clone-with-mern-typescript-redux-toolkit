import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserInterface } from '../types/user';

export default (req: Request, res: Response, next: NextFunction) => {
  const { Authorization } = req.headers;
  if (!Authorization) {
    return res.status(401).json({ errors: [{ msg: 'token not passed.' }] });
  }
  if (typeof Authorization !== 'string') {
    return res.status(401).json({ errors: [{ msg: 'invalid token' }] });
  }

  const token = Authorization.split(' ')[1];
  const decodedData = <UserInterface>jwt.verify(token, process.env.SECRET_KEY!);
  if (!decodedData) {
    return res.status(401).json({ errors: [{ msg: 'invalid token' }] });
  }
  req.body.userId = decodedData._id;
  return next();
};
