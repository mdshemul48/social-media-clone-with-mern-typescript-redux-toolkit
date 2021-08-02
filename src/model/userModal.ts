import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    },
    posts: [{ id: Schema.Types.ObjectId, ref: 'post' }]
  },
  { timestamps: true }
);

export default model('User', userSchema);
