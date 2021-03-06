import { model, Schema } from 'mongoose';
import PostInterface from '../types/PostType';

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    body: {
      type: String
    },
    image: {
      type: String,
      required: false
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        required: false
      }
    ],
    comments: [
      {
        comment: {
          type: String,
          required: true
        },
        userId: {
          type: Schema.Types.ObjectId,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

export default model<PostInterface>('Post', postSchema);
