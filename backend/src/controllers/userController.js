const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.listUsers = asyncHandler(async (_req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});
