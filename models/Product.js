const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength: 64,
    },
    price: {
      type: Number,
      require: true,
      min: 1000,
      max: 99999999,
    },
    seller: {
      type: Object,
      require: true,
    },
    qty: {
      type: Number,
      require: true,
      min: 0,
    },
    category: {
      type: String,
      require: true,
      maxLength: 32,
    },
    image: {
      type: String,
      require: true,
      maxLength: 32,
    },
    sortDesc: {
      type: String,
      require: true,
      maxLength: 225,
    },
    desc: {
      type: String,
      require: true,
      maxLength: 1024,
    },
    weight: {
      type: String,
      require: true,
      maxLength: 128,
    },
    location: {
      type: String,
      require: true,
      maxLength: 128,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
