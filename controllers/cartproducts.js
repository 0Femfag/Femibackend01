const cartproductModel = require("../models/cartproducts");
const productModel = require("../models/products");

const addCart = async (req, res) => {
  const { quantity, productId } = req.body;
  const { id } = req.user;
  try {
    const getProduct = await productModel.findById(productId);
    if (!getProduct) {
      return res.status(404).json({ message: "Product doesn't exist" });
    }
    const newcartProduct = new cartproductModel({
      quantity,
      productId,
      userId: id,
    });
    const savedCart = await newcartProduct.save();
    res
      .status(201)
      .json({ message: "Product succesfully added to cart", savedCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  const { id } = req.user;
  try {
    const getall = await cartproductModel
      .find()
      .populate({ path: "userId", select: "username email gender" })
      .populate({
        path: "productId",
        select:
          "quantity description productName price inventoryCount category",
      });
    if (!getall) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(getall);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getoneCart = async (req, res) => {
  const { id } = req.user;
  const { productId } = req.params;
  try {
    const getOne = await cartproductModel
      .findById(productId)
      .populate({ path: "userId", select: "username email gender" })
      .populate({
        path: "productId",
        select:
          "quantity description productName price inventoryCount category",
      });
    if (!getOne) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(getOne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  const { productId, ...others } = req.body;
  const { id } = req.user;
  try {
    const getProduct = await cartproductModel.findById(productId);
    if (!getProduct) {
      return res.status(404).json({ message: "Cart not found" });
    }
    await cartproductModel.findByIdAndUpdate(
      productId,
      { ...others },
      { new: true },
    );
    res.status(200).json({ message: "Item quantity has been updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  const { productId } = req.body;
  const { id } = req.user;
  try {
    const findCart = await cartproductModel.findById(productId);
    if (!findCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    await cartproductModel.findByIdAndDelete(productId);
    res.status(200).json({ message: "cart deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCart, getCart, getoneCart, updateCart, deleteCart };
