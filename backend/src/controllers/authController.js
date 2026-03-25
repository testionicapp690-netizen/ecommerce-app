const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    res.status(400);
    throw new Error('Email already in use');
  }
  const user = await User.create({ name, email, password });
  res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token: generateToken({ id: user.id })
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error('Invalid credentials');
  }
  res.json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token: generateToken({ id: user.id })
  });
});
