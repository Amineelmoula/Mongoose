const mongoose = require("mongoose");
const contactSchima = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  image: String,
});
module.exports = mongoose.model("contact", contactSchima);
