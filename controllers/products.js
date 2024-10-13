const { findById } = require("../models/newuser");
const productModel = require("../models/products");

const createProduct = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { id } = req.user;
  const { role } = req.user;
  try {
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
  const { id } = req.params;
  try {
    const oneProduct = await productModel.findById(id);
    if (!oneProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(oneProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  if (role !== "Admin") {
    return res.status(404).json({ message: "You're not permitted" });
  }
  try {
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id, creatorId, ...others } = req.body;
  const { role } = req.user;
  if (role !== "Admin") {
    return res.status(404).json({ message: "You don't have the permission" });
  }
  try {
    const oneProduct = await productModel.findById(id);
    if (!oneProduct) {
      return res.status(404).json({ message: "No such product" });
    }
    await productModel.findByIdAndUpdate(id, others, { new: true });
    res.status(202).json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createProduct,
  getallProduct,
  getoneProduct,
  deleteProduct,
  updateProduct,
};
