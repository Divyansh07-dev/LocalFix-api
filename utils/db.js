// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully ");
  } catch (err) {
    console.error("Error connecting to db!", err);
  }
};

export default connectdb;
