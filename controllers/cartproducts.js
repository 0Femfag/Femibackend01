const cartproductModel = require("../models/cartproducts");
const productModel = require("../models/products");

const addCart = async (req, res) => {
  const { quantity, productId } = req.body;
  console.log(quantity);
  const { id } = req.user;
  console.log(id);
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
    await productModel.findByIdAndUpdate(productId, {
      $push: { cartproducts: savedCart.id },
    });
    res.status(201).json({ message: "Added to cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  const { id } = req.user;
  const params = req.params;
  try {
    const getall = await cartproductModel
      .find()
      .populate({ path: "userId", select: "username email gender" })
      .populate({ path: "productId", select: "quantity" });
    const getOne = await cartproductModel
      .findOne(params)
      .populate({ path: "userId", select: "username email gender" })
      .populate({ path: "productId", select: "quantity" });
    if (!getOne) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(getall);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  const { productId } = req.body;
  console.log(productId);
  const { id } = req.user;
  console.log(id);
  try {
    await cartproductModel.findByIdAndDelete(productId);
    res.status(200).json({ message: "cart deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCart, getCart, deleteCart };

// const productIndex = cart.products.findIndex(p=> p.product.toString()=== productId)
//  if (!getall) {
//   return res.status(404).json({ message: "Cart not found" });
// }

// 670692328562959b4983eb6f
