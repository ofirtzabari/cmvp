const express = require('express');
const path = require('path');
const User = require('../model/user');
const router = express.Router();
const {upload} = require('../multer');
const ErrorHandler = require('../utils/errorHandler');

router.post("/create-user",upload.single("file"), async (req, res) => {
    const {name, email, password} = req.body;
    const userEmail = await User.findOne({email});

    if(userEmail){
        return next(new ErrorHandler("User already exists",400));
    }

    const fileName = req.file.filename;
    const fileURL = path.join(fileName);
    const avatar = fileURL;

    const user = new user({
        name,
        email,
        password,
        avatar: fileURL
    });
    console.log(user);
    res.send("User created");
});

module.exports = router;