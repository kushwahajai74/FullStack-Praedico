const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const setCookie = require("../utils/feature");

const { ErrorHandler } = require("../middlewares/error");

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    setCookie(user, res, `Welcome Back ${user.fname}`, 200);
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const {
      fname,
      lname,
      email,
      address,
      city,
      aadhar,
      contact,
      description,
      endsAt,
      startsAt,
      institute,
      managedBy,
      password,
      password2,
      pincode,
    } = req.body.details;

    const { role } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("User Already Exist", 404));
    }
    if (password !== password2) {
      return next(new ErrorHandler("passwords do not match", 404));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      fname,
      lname,
      email,
      address,
      city,
      contact,
      aadhar,
      description,
      endsAt,
      startsAt,
      institute,
      managedBy,
      password: hashedPassword,
      pincode,
      role,
    });
    setCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
});
router.get("/logout", (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      message: "Logged Out",
    });
});

module.exports = router;
