import { Request, Response } from 'express';
import formidable from 'formidable';
import { v4 as uuid } from 'uuid';
import { body } from 'express-validator';

// ts interface
import { UserInterface } from '../types/user';
import ImageInfo from '../types/uploadedImage';
// db model
import User from '../model/userModel';
import Post from '../model/postModel';

import saveImage from '../util/saveImage';
import PostInterface from '../types/PostType';

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
      const newPost = new Post({
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

      // attaching user with post
      await newPost
        .populate('user', 'firstName lastName profileImage _id')
        .execPopulate();

      return res.status(201).json({ post: newPost, msg: 'New post created.' });
    } catch (error) {
      return res.send(error);
    }
  });
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({})
      .sort({ updatedAt: -1 })
      .populate('user', 'firstName lastName profileImage _id');
    return res.status(200).json({ posts });
  } catch (error: any) {
    return res.status(500).json({ error: [{ msg: error?.message }] });
  }
};

export const like = async (req: Request, res: Response) => {
  const { postId } = <{ postId: string }>req.params;
  const { userId }: { userId: string } = req.body;
  if (!postId) {
    return res.status(400).json({ errors: [{ msg: 'post id not provided.' }] });
  }
  try {
    const post: PostInterface = await Post.findOne({ _id: postId });
    const { likes } = post;
    const isLikedIndex = likes.indexOf(userId);

    if (isLikedIndex === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(isLikedIndex, 1);
    }

    post.save();
    return res.status(201).json({ msg: 'you liked the post' });
  } catch (error: any) {
    const errorMessage = error.message;
    return res.status(500).json({ errors: [{ msg: errorMessage }] });
  }
};

export const createCommentValidator = [
  body('postId').notEmpty().withMessage('postId not provided.'),
  body('comment').notEmpty().withMessage('body not provided'),
  body('userId').notEmpty().withMessage('userId not provided')
];

export const createComment = (req: Request, res: Response) => {
  const {
    postId,
    comment,
    userId
  }: { postId: string; comment: string; userId: string } = req.body;
  console.log(postId, body, userId);

  try {
    const post: PostInterface = Post.findOne({ _id: postId });
    post.comments.push({
      comment,
      userId
    });
    post.save();
    return res.send('gg');
  } catch (error: any) {
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
};
