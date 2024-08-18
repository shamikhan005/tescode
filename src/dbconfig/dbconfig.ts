import mongoose from 'mongoose';

let isConnected = false;

export async function connect() {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Something went wrong in connecting to DB');
    console.error(error);
  }
}
