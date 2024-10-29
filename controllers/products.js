const productModel = require("../models/products");

const createProduct = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { productId } = req.params;
  const { id, role } = req.user;
  try {
    const findProduct = await productModel.find(productId);
    if (!findProduct) {
      return res.status(404).json({ message: "No such product" });
    }
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    const newProduct = new productModel({ creatorId: id, ...others });
    await newProduct.save();
    res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};

const getallProduct = async (req, res) => {
  try {
    const allProduct = await productModel.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getoneProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const oneProduct = await productModel.findById(productId);
    if (!oneProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(oneProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { productId, creatorId, ...others } = req.body;
  const { role } = req.user;
  try {
    const oneProduct = await productModel.findById(productId);
    if (!oneProduct) {
      return res.status(400).json({ message: "No such product" });
    }
    if (role !== "Admin") {
      return res.status(404).json({ message: "You don't have the permission" });
    }
    await productModel.findByIdAndUpdate(productId, ...others, { new: true });
    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const { role } = req.user;
  try {
    const oneProduct = await productModel.findById(productId);
    if (!oneProduct) {
      return res.status(400).json({ message: "No such product" });
    }
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getallProduct,
  getoneProduct,
  updateProduct,
  deleteProduct,
};
