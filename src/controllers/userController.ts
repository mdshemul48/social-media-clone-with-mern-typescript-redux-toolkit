import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import formidable from 'formidable';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SignupInterface, UserInterface } from '../types/user';

// user model
import User from '../model/userModal';

import uploadImageInterface from '../types/uploadedImage';
// utils
import saveImage from '../util/saveImage';

export const signupValidator = [
  body('firstName').notEmpty().withMessage('Fist Name required'),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('email').isEmail().withMessage('Email Address Required'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters long.')
];

export const signup = async (req: Request, res: Response) => {
  const form = formidable({ multiples: true });
  return form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        return res.status(500).json({
          errors: [{ msg: 'something went wrong with the request parser' }]
        });
      }
      const { firstName, lastName, email, password } = <SignupInterface>(
        (<unknown>fields)
      );
      // eslint-disable-next-line prefer-const
      const image = <uploadImageInterface>files.image;
      const errors = [];

      if (firstName.trim().length === 0) {
        errors.push({ msg: 'Fist Name required' });
      }
      if (lastName.trim().length === 0) {
        errors.push({ msg: 'Last Name required' });
      }
      if (email.trim().length === 0) {
        errors.push({ msg: 'Email Address Required' });
      }
      if (password.trim().length < 8) {
        errors.push({ msg: 'Password must be 8 characters long.' });
      }

      // checking if image available
      if (Object.keys(files).length === 0) {
        errors.push({ msg: 'You must upload a picture' });
      } else {
        const extension = image.type!.split('/')[1].toLowerCase();
        if (
          extension !== 'jpg' &&
          extension !== 'png' &&
          extension !== 'jpeg' &&
          extension !== 'gif'
        ) {
          errors.push({ msg: `${extension} is not valid extension.` });
        } else if (errors.length === 0) {
          image.name = `${uuid()}.${extension}`;
        }
      }
      if (errors.length !== 0) {
        return res.status(500).json({ errors });
      }

      // =======================================
      // creating user and saving to the db

      // checking if user exist
      const existingUser = await User.findOne({
        email
      });
      if (existingUser) {
        return res
          .status(409)
          .json({ errors: [{ msg: 'Email already exist.' }] });
      }
      // saving image to server
      saveImage(image.path!, image.name!);

      // hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // creating new user
      const newUser: UserInterface = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profileImage: image.name!
      });

      // creating token
      const secretKey = <string>process.env.SECRET_KEY;

      const token = jwt.sign(
        {
          firstName,
          lastName,
          email,
          _id: newUser._id,
          profileImage: image.name!
        },
        secretKey
      );

      return res.status(201).json({ token });
    } catch (error: any) {
      return res.status(500).json({ errors: [{ msg: error!.message }] });
    }
  });
};

export const loginValidator = [
  body('email').isEmail().withMessage('invalid email address'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters long')
];

export const login = async (req: Request, res: Response) => {
  const { email, password } = <{ email: string; password: string }>req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

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
        _id: user._id,
        profileImage: user.profileImage
      },
      process.env.SECRET_KEY!
    );
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
};
