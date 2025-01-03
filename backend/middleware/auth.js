const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const JWT = require('jsonwebtoken');
const User = require('../model/user');

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({ message: 'Login first to access this resource.' });
    return next(new ErrorHandler('Login first to access this resource.', 401));
  }
  const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});