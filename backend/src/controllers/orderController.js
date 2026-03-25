const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');

exports.createOrder = asyncHandler(async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user.id });
  res.status(201).json(order);
});

exports.myOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product', 'name imageUrl');
  res.json(orders);
});

exports.allOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
});
