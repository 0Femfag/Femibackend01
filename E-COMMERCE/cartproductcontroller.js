const cartproductModel = require("./cartproductmodel");
const productModel = require("./productsmodel");

const addCart = async (req, res) => {
  const { quantity, productId } = req.body;
  const { id } = req.user;
  try {
    const getCart = await cartproductModel.findOne({ userId: id });
    if (getCart) {
      if (getCart.userId.toString() !== id.toString()) {
        return res
          .status(403)
          .json({ message: "You're not authorised to do this" });
      }
      const productValue = getCart.products.findIndex(
        (item) => item.product.toString() === productId,
      );
      if (productValue > -1) {
        getCart.products[productValue].quantity += quantity;
      } else {
        getCart.products.push({ product: productId, quantity });
      }
    }
    const newcartProduct = new cartproductModel({
      products: [{ product: productId, quantity }],
      userId: id,
    });
    await newcartProduct.save();
    res
      .status(201)
      .json({ message: "Product succesfully added to cart", newcartProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getcartProduct = async (req, res) => {
  const { id } = req.user;
  try {
    const usergetCart = await cartproductModel
      .findOne({ userId: id })
      .populate({ path: "userId", select: "username email gender" })
      .populate({
        path: "products.product",
        select: "productName category description price ",
      });
    if (!usergetCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(usergetCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const { id } = req.user;
  try {
    const getCart = await cartproductModel.findOne({ userId: id });
    if (!getCart) {
      return res.status(404).json({ message: "cart not found" });
    }
    if (getCart.userId.toString() !== id.toString()) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const productValue = getCart.products.findIndex(
      (item) => item.product.toString() === productId,
    );
    if (productValue > -1) {
      if (quantity <= 0) {
        getCart.products.splice(productValue, 1);
      } else {
        getCart.products[productValue].quantity = quantity;
      }
      await getCart.save();
      return res
        .status(200)
        .json({ message: "Item quantity has been updated" });
    } else {
      return res.status(404).json({ message: "Product not in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletecartItem = async (req, res) => {
  const { productId } = req.body;
  const { id } = req.user;
  try {
    const findCart = await cartproductModel.findOne({ userId: id });
    if (!findCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    if (findCart.userId.toString() !== id.toString()) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const productValue = findCart.products.findIndex(
      (item) => item.product.toString() === productId,
    );
    if (productValue > -1) {
      findCart.products.splice(productValue, 1);
      await findCart.save();
      return res.status(200).json({ message: "Item deleted successfully" });
    } else {
      return res.status(404).json({ message: "Product not in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const clearCart = async (req, res) => {
  const { id } = req.user;
  try {
    const getCart = await cartproductModel.findOne({ userId: id });
    if (!getCart) {
      return res.status(404).json({ message: "cart not found" });
    }
    if (getCart.userId.toString() !== id.toString()) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    // getCart.products = [];
    // await getCart.save();
    await cartproductModel.findByIdAndDelete({ userId: id });
    res.status(200).json({ message: "cart deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCart,
  getcartProduct,
  updateCart,
  deletecartItem,
  clearCart,
};
