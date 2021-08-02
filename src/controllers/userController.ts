import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import { SignupInterface } from '../types/user';

// user model
import User from '../model/userModal';

export const signupValidator = [
  body('firstName').notEmpty().withMessage('Fist Name required'),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('email').isEmail().withMessage('Email Address Required'),
  body('password').isLength({ min: 8 })
];

export const signup = async (req: Request, res: Response) => {
  const {
    firstName, lastName, email, password
  } = <SignupInterface>req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // checking if user exist
    const existingUser = await User.findOne({
      email
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ errors: [{ msg: 'Email already exist.' }] });
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser: SignupInterface = await new User({
      firstName,
      lastName,
      email,
      password
    });
    console.log(newUser);
  } catch (error) {
    console.log('error');
  }

  return res.send('ok');
};

export const login = (req: Request, res: Response) => {
  res.send('Login route');
};
