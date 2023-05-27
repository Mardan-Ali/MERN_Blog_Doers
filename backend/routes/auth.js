const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");

// Register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const newuser = await user.save();

    res.status(200).send("The Data is Saved!!", newuser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    !user && res.status(400).send({ Message: "Wrong Credentials" });

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).send({ Message: "Wrong Credentials" });

    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send({ MEssage: err });
  }
});

module.exports = router;
