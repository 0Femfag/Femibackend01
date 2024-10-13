const orderModel = require("../models/order");
const cartproductModel = require("../models/cartproducts");
const productModel = require("../models/products");

const createOrder = async (req, res) => {
  const { userId, ...others } = req.body;
  console.log(others);
  const { id } = req.user;
  console.log(id);
  try {
    const cart = await cartproductModel.findOne({ userId: id });
    if (!cart) {
      return res.status(400).json({ message: "No cart product" });
    }
    const totalPrice = cartproductModel.forEach((productId) => {
      totalPrice += productId.quantity * productId.price;
    });
    console.log(totalPrice);
    const newOrder = new orderModel({ userId: id, ...others });
    await newOrder.save();
    await cartproductModel.findOneAndDelete({ userId: id });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  const { id } = req.user;
  try {
    const myOrder = await orderModel.find();
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
    res.status(201).json({ message: "Pending" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createOrder, getOrders, admingetOrders, updateorderStatus };
