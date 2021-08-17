import { Request, Response } from 'express';
import formidable from 'formidable';

export const createPost = (req: Request, res: Response) => {
  const form = formidable({ multiples: true });

  return form.parse(req, (err, fields, files) => {
    const creatorId = <string>req.body.userId;
    const { body } = fields;
    const { image } = files;

    const error = [];

    if (err) {
      error.push({ msg: 'Something went wrong while parsing data' });
    }
  });
};

export const getPosts = (req: Request, res: Response) => {};
