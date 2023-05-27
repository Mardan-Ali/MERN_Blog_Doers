const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const PostModel = require("../models/Post");
const bcrypt = require("bcrypt");

// Update

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).send(updateUser);
    } catch (error) {
      res.status(500).send({ Error: error });
    }
  } else {
    res.status(401).send("You can only update your account");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      try {
        await PostModel.deleteMany({ username: user.username });

        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).send("The Item Delted");
      } catch (error) {
        res.status(500).send({ Error: error });
      }
    } catch (error) {
      res.status(404).send("No Such User Exists");
    }
  } else {
    res.status(401).send("You can Delete your account");
  }
});

// Get Single User
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (error) {
    res.status(401).send({ Message: error });
  }
});

module.exports = router;
