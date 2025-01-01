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
const sendToken = require("../utils/jwtToken");
const e = require("express");

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

//activate account
router.post("/activation", async (req, res, next) => {
  const { activation_token } = req.body;
  if (!activation_token) {
    return next(new ErrorHandler(400, "Invalid token"));
  }
  try{
    const decoded = jwt.verify(activation_token, process.env.JWT_ACCOUNT_ACTIVATION, async (err, decoded) => {
      if (err) {
        return next(new ErrorHandler(400, "Expired token"));
      }
      const { name, email, password } = decoded.user;
      if (!name || !email || !password) {
        return next(new ErrorHandler(400, "Invalid token data"));
      }

      let user = await User.findOne({ email });
      if (user) {
        return next(new ErrorHandler(400, "User already exists"));
      }

    user = new User({
        name,
        email,
        password,
      });
      await user.save();

      sendToken(user, 201, res);

    });
  }
  catch (error) {
    return next(new ErrorHandler(400, "Expired token"));
  }

});



module.exports = router;
