import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SignupInterface, UserInterface } from '../types/user';

// user model
import User from '../model/userModal';

export const signupValidator = [
  body('firstName').notEmpty().withMessage('Fist Name required'),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('email').isEmail().withMessage('Email Address Required'),
  body('password').isLength({ min: 8 })
];

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = <SignupInterface>req.body;

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

    // creating new user
    const newUser: UserInterface = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // creating token
    const secretKey = <string>process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        firstName,
        lastName,
        email,
        _id: newUser._id
      },
      secretKey
    );

    return res.status(201).json({ token });
  } catch (error: any) {
    return res.status(500).json({ errors: [{ msg: error!.message }] });
  }
};

export const login = (req: Request, res: Response) => {
  res.send('Login route');
};
