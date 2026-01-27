const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.error("Error connecting to db!", err);
  }
};

module.exports = connectdb;
