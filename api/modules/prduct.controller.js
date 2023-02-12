const Product = require("./product.model");

const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
    });
    await product.save();
    return res.status(200).json({ product: product._doc });
  } catch (error) {
    logger.error("error while creating the product", error.message);

    return res.status(400).json({
      message: error.message,
      description: error.description,
    });
  }
};

module.exports = {
  createProduct,
};
