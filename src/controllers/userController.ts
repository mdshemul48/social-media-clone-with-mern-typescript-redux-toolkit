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
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters long.')
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

export const loginValidator = [
  body('email').isEmail().withMessage('invalid email address'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters long.')
];

export const login = async (req: Request, res: Response) => {
  const { email, password } = <{ email: string; password: string }>req.body;
  try {
    const user: UserInterface = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ errors: [{ msg: "user doesn't exist. please Sign up" }] });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(403).json({ errors: [{ msg: 'password incorrect.' }] });
    }

    const token = jwt.sign(
      {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
      },
      process.env.SECRET_KEY!
    );
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
};
