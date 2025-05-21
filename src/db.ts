import mongoose from 'mongoose';

async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/student-management');
    console.log('Database connected.');
  } catch (error) {
    console.log('Database connection Error: ', error);
    process.exit(1);
  }
}

export { connectDb };
