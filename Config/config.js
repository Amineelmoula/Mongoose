const mongoose = require("mongoose");
require("dotenv").config();
const contactMongoose = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("server connected");
  } catch (error) {
    console.log("server not connected");
  }
};
module.exports = contactMongoose;
