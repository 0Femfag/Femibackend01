const cartproductModel = require("../models/cartproducts");
const productModel = require("../models/products");

// const cartOwner = (_id, userId) => {
//   return _id.toString() === userId.toString();
// };

const addCart = async (req, res) => {
  const { quantity, productId } = req.body;
  const { id } = req.user;
  try {
    let getCart = await cartproductModel.findOne({ userId: id });
    // if (getCart) {
    //   if (cartOwner(_id, { userId: id })) {
    //     return res
    //       .status(403)
    //       .json({ message: "You're not authorised to do this" });
    //   }
    // }
    if (getCart.userId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getProduct = await productModel.findById(productId);
    if (!getProduct) {
      return res.status(404).json({ message: "Product doesn't exist" });
    }
    const checkproductinCart = getProduct.includes({ userId: id });
    console.log(checkproductinCart);
    if (!checkproductinCart) {
      getProduct.push({ userId: id }, quantity, productId);
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
  try {
    const getAll = await cartproductModel
      .find()
      .populate({ path: "userId", select: "username email gender" })
      .populate({
        path: "productId",
        select:
          "quantity description productName price inventoryCount category",
      });
    if (!getAll) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getcartProduct = async (req, res) => {
  const { id } = req.user;
  try {
    const usergetCart = await cartproductModel
      .findOne({ id })
      .populate({ path: "userId", select: "username email gender" })
      .populate({
        path: "productId",
        select:
          "quantity description productName price inventoryCount category",
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
  const { productId, ...others } = req.body;
  const { id } = req.user;
  try {
    let getCart = await cartproductModel.findOne({ userId: id });
    if (getCart) {
      return res.status(404).json({ message: "cart not found" });
    }
    if (cartOwner(_id, { userId: id })) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getProduct = await cartproductModel.findById(productId);
    if (!getProduct) {
      return res.status(404).json({ message: "No such product" });
    }
    const checkproductinCart = thePost.likes.includes(userId);
    console.log(checkuserinArray);
    if (!checkuserinArray) {
      thePost.likes.push(userId);
    } else {
      const index = thePost.likes.indexOf(userId);
      thePost.likes.splice(index, 1);
    }
    if (getProduct.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
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
    if (findCart.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    await cartproductModel.findByIdAndDelete(productId);
    res.status(200).json({ message: "cart deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const clearCart = async (req, res) => {
  const { id } = req.user;
  try {
    const getCart = await cartproductModel.findOne({ id });
    if (!getCart) {
      return res.status(404).json({ message: "cart not found" });
    }
    if (cartOwner(_id, { userId: id })) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    getCart.productId.quantity = [];
    await getCart.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCart,
  getCart,
  getcartProduct,
  updateCart,
  deleteCart,
  clearCart,
};
