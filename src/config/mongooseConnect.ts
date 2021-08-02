import mongoose from 'mongoose';

export default async () => {
  const mongooseConnectUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.91aij.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(mongooseConnectUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log(err);
  }
};
