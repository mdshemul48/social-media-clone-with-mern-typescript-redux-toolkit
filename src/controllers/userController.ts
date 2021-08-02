import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const signupValidator = [
  body('firstName').notEmpty().withMessage('Fist Name required'),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('email').isEmail().withMessage('Email Address Required'),
  body('password').isLength({ min: 8 })
];
export const signup = (req: Request, res: Response) => {};

export const login = (req: Request, res: Response) => {
  res.send('Login route');
};
