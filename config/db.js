const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // ⭐ Use env variable
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error: ", error);
  }
};

module.exports = connectDB;
