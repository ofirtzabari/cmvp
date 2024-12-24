const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/errorHandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("User already exists", 400));
  }
// need to fix this
//   const fileName = req.file.filename;
//   const fileURL = path.join(fileName);
//   const avatar = fileURL;

  console.log("test");
  const user = new User({
    name,
    email,
    password
  });

  console.log(user);
  const newUser = await User.create(user);

  res.status(201).json({
    success: true,
    user: newUser,
  });
  
  
});

module.exports = router;
