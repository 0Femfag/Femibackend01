const orderModel = require("../models/order");
const cartproductModel = require("../models/cartproducts");
const productModel = require("../models/products");

const taxRate = (userLocation) => 0.1;
const shippingCost = (shippingMethod) => shippingMethod === "express";
"standard" ? 15 : 5;
const discount = (discountCode) => {
  const validCodes = { FEMI10: 0.1, PRETERNATURAL: 0 };
  return validCodes[discountCode] || 0;
};

const createOrder = async (req, res) => {
  const { totalPrice, ...others } = req.body;
  const { id } = req.user;
  try {
    const cartItems = await cartproductModel.findOne({ userId: id }).populate({
      path: "productId",
      select: "quantity description productName price inventoryCount category",
    });
    if (!cartItems) {
      return res.status(404).json({ message: "No product in cart" });
    }
    // let totalPrice = 0;
    // cartItems.forEach((cartItem) => {
    //   totalPrice += cartItem.quantity * cartItem.productId.price;
    // });
    let totalPrice = cartItems.quantity.productId.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.productId.price;
    }, 0);
    const newOrder = new orderModel({
      userId: id,
      totalPrice,
      ...others,
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
    const myOrder = await orderModel.findById(id);
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
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    const Orders = await orderModel.find();
    if (!Orders) {
      return res.status(404).json({ message: "No order" });
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
    if (role !== "Admin") {
      return res.status(404).json({ message: "You're not permitted" });
    }
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "No order" });
    }
    order.orderStatus = orderStatus;
    await order.save();
    res.status(201).json({ message: "Shipped", order });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createOrder, getOrders, admingetOrders, updateorderStatus };
