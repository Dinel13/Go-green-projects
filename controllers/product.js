const create = async (req, res, next) => {
  console.log(req.body);
  try {
    res.status(201).json({ message: "test" });
  } catch (error) {}
};

exports.create = create;
