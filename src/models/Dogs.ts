import mongoose from "mongoose";

const DogsSchema = new mongoose.Schema({
  dogName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  fileName: {
    type: String,
  },
  fileCid: {
    type: String,
  },
});

mongoose.model("Dogs", DogsSchema);
