const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const { create } = require("domain");
const jwt = require("jsonwebtoken");
const { send } = require("process");
const sendMail = require("../utils/sendMail");

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

  const activationToken = createActivationToken(user);

  const activationURL = `${process.env.CLIENT_URL}/activation/${activationToken}`;

  try{
    await sendMail({
      email,
      subject: "Account Activation",
      message: `Hello, pls activate your account: ${activationURL}`,
    });
    res.status(201).json({
      message: "User created successfully, pls check your email to activate your account",
    });
  }
  catch (error) {
    return next(new ErrorHandler(400, error.message));
  }
  
});

//create activation token
const createActivationToken = (user) => {
  return jwt.sign({user} , process.env.JWT_ACCOUNT_ACTIVATION, {
    expiresIn: "5m",
  });
};



module.exports = router;
