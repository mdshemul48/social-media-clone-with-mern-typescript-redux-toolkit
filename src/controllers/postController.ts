import { Request, Response } from 'express';
import formidable from 'formidable';
import { v4 as uuid } from 'uuid';

// ts interface
import { UserInterface } from '../types/user';
import PostInterface from '../types/PostType';
import ImageInfo from '../types/uploadedImage';
// db model
import User from '../model/userModel';
import Post from '../model/postModel';

import saveImage from '../util/saveImage';

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
      const image = <ImageInfo>files.image;

      if (body.trim().length === 0) {
        errors.push({ msg: 'Invalid post.' });
      }
      // getting user
      const user: UserInterface = await User.findOne({ _id: creatorId });
      if (!user) {
        errors.push({ msg: 'user not found' });
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      // creating post
      const newPost: PostInterface = new Post({
        user: user._id,
        body,
        likes: [],
        comments: []
      });

      if (image) {
        const extension = image.type!.split('/')[1].toLowerCase();
        if (
          extension !== 'jpg' &&
          extension !== 'png' &&
          extension !== 'jpeg' &&
          extension !== 'gif'
        ) {
          errors.push({ msg: `${extension} is not valid extension.` });
        } else if (errors.length === 0) {
          const newImageName = `${uuid()}.${extension}`;
          saveImage(image.path!, newImageName);
          newPost.image = newImageName;
        }
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      user.posts.push(newPost._id);
      user.save();
      newPost.save();
      return res.status(201).json({ post: newPost, msg: 'New post created.' });
    } catch (error) {
      return res.send(error);
    }
  });
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({}).sort({ updatedAt: -1 });
    return res.status(200).json({ posts });
  } catch (error: any) {
    return res.status(500).json({ error: [{ msg: error?.message }] });
  }
};
