import { Request, Response } from 'express';
import formidable from 'formidable';

import { UserInterface } from '../types/user';
import PostInterface from '../types/PostType';
// db model
import User from '../model/userModel';
import Post from '../model/postModel';

export const createPost = (req: Request, res: Response) => {
  const form = formidable({ multiples: true });

  return form.parse(req, async (err, fields, files) => {
    try {
      const errors = [];
      if (err) {
        errors.push({ msg: 'Something went wrong while parsing data' });
        return res.status(500).json({ errors });
      }

      const creatorId = <string>req.body.userId;
      const { body } = <{ body: string }>fields;
      const { image } = files;

      if (body.trim().length === 0) {
        errors.push({ msg: 'Invalid post.' });
      }

      const user: UserInterface = await User.findOne({ _id: creatorId });
      if (!user) {
        errors.push({ msg: 'user not found' });
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const newPost: PostInterface = new Post({
        user: user._id,
        body,
        likes: [],
        comments: []
      });

      user.posts.push(newPost._id);
      user.save();
      newPost.save();
      return res.send('hello world');
    } catch (error) {
      return res.send(error);
    }
  });
};

export const getPosts = (req: Request, res: Response) => {};
