const HttpError = require("../models/http-eror");
const Product = require("../models/Product");

const create = async (req, res, next) => {
  const {
    name,
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
    name,
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
    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(error.message || "Tidak bisa menyimpan produk", 500)
    );
  }
};

const getAll = async (req, res, next) => {
  try {
    const products = await Product.find()
      .select("_id name price sortDesc category image postedBy createdAt")
      .exec();
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(error.message || "Tidak bisa mendapatkan produk", 500)
    );
  }
};

exports.create = create;
exports.getAll = getAll;
