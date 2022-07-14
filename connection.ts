import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

module.exports = mongoose.connect(process.env.MONGODB_CONNECTION!).then(() => {
  console.log("conectou mongo");
});
