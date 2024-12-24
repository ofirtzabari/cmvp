const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    //TODO: delete the file if user already exists
    return next(new ErrorHandler(400, "User already exists"));
  }
// TODO: uncomment the following code and make it work
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
