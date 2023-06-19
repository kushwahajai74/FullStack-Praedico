const { roles } = require("../utils/constants");
const User = require("../models/user.model");
const Product = require("../models/productModel");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/profile", async (req, res) => {
  return res.status(200).json({
    success: "jai",
    user: req.user,
  });
});
// SHOW EMPLOYEES UNDER A MANAGER
router.get("/head/:id", async (req, res) => {
  const { id } = req.params;
  const manager = await User.findOne({ _id: id });
  // console.log(manager);

  const managerEmail = manager.email;

  const employees = await User.find({ managedBy: managerEmail });
  // console.log(employees);
  res.render("employeeDashboard", { employees: employees });
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const person = await User.findById(id);
    res.render("profile", { person });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
