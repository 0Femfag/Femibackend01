const orderModel = require("./ordermodel");
const cartproductModel = require("./cartproductmodel");

const createOrder = async (req, res) => {
  const { shippingMethod, discountCode, shippingAddress } = req.body;
  const { id } = req.user;
  try {
    const cartItems = await cartproductModel
      .findOne({ userId: id })
      .populate("products.product");
    if (!cartItems) {
      return res.status(404).json({ message: "No product in cart" });
    }
    if (cartItems.userId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }

    let totalPrice = cartItems.products.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.product.price;
    }, 0);

    const tax = (Lagos) => 0.1;
    const shippingCost = (shippingMethod) =>
      shippingMethod === "Express" ? 15 : 5;
    const discount = (discountCode) => {
      const validCodes = { FEMI10: 0.1, PRETERNATURAL: 0 };
      return validCodes[discountCode] || 0;
    };

    const discountRate = discount(discountCode);
    const discountPrice = totalPrice * discountRate;
    const afterDiscount = totalPrice - discountPrice;

    const taxRate = tax(id.Lagos);
    const taxPrice = afterDiscount * taxRate;

    const shipCost = shippingCost(shippingMethod);
    const finalPrice = afterDiscount + taxPrice + shipCost;

    const newOrder = new orderModel({
      userId: id,
      totalPrice,
      shipCost,
      taxPrice,
      discountCode,
      discountPrice,
      finalPrice,
      orderStatus: "Pending",
      products: cartItems.products,
      shippingAddress,
    });
    await newOrder.save();
    await cartproductModel.findOneAndDelete({ userId: id });
    res.status(201).json({ message: "Order sent", newOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  const { id } = req.user;
  try {
    const myOrder = await orderModel
      .find({ userId: id })
      .populate("products.product");
    if (!myOrder) {
      return res.status(404).json({ message: "No order" });
    }
    res.status(200).json(myOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const admingetOrders = async (req, res) => {
  const { role } = req.user;
  try {
    const Orders = await orderModel.find().populate("userId").populate({
      path: "products.product",
      select: "productName category description price ",
    });
    if (!Orders) {
      return res.status(404).json({ message: "No order" });
    }
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateorderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;
  const { role } = req.user;
  try {
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "No order" });
    }
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    order.orderStatus = orderStatus;
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createOrder, getOrders, admingetOrders, updateorderStatus };
