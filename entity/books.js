const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    title: { type: String, min: 6, max: 255 },
    description: { type: String },
    discount: { type: Number, min: 1, max: 99 },
    price: { type: Number },
    image: { type: Array },
  },
  { timestamps: true }
);
module.exports = mongoose.model("books", booksSchema);
