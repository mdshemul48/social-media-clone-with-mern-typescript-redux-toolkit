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
    profileImage: {
      type: String,
      required: false
    }
    // posts: [{ id: Schema.Types.ObjectId, ref: 'Post', required: false }]
  },
  { timestamps: true }
);

export default model('User', userSchema);
