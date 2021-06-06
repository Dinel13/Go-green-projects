const HttpError = require("../models/http-eror");
const Product = require("../models/Product");

const create = async (req, res, next) => {
  const {
    item,
    price,
    sellerId,
    qty,
    category,
    image,
    sortDesc,
    desc,
    weight,
    location,
  } = req.body;

  const newProduct = new Product({
    item,
    price,
    sellerId,
    qty,
    category,
    image,
    sortDesc,
    desc,
    weight,
    location,
  });

  try {
    const result = await newProduct.save();
    res.status(201).json({ message: result });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return next(new HttpError("Tidak bisa menyimpan produk", 500));
  }
};

exports.create = create;
