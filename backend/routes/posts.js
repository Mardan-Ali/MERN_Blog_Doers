const express = require("express");
const router = express.Router();
// const UserModel = require("../models/User");
const PostModel = require("../models/Post");

// 1: Create Post
router.post("/", async (req, res) => {
  try {
    const newPost = await new PostModel(req.body);
    const savedPost = await newPost.save();
    res.status(201).send("The Post is Saved");
  } catch (error) {
    res.status(401).send({ Message: error });
  }
});

// 2: Update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).send(updatedPost);
      } catch (error) {
        res.status(500).send({ Message: error });
      }
    } else {
      res.status(401).send("You can only Update your Post");
    }
  } catch (error) {
    res.status(500).send({ Message: error });
  }
});

// 3:Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    // console.log(post);
    if (post.username === req.body.username) {
      try {
        const deletedpost = await PostModel.findByIdAndDelete(req.params.id);
        console.log(deletedpost);
        res.status(201).send("Post has been deleted");
      } catch (error) {
        res.status(401).send({ Messagep: error });
      }
    } else {
      res.status(401).send("You can delete only your post");
    }
  } catch (error) {
    res.status(500).send({ Messagel: error });
  }
});

// 4 : Read: Get Single Post
router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    res.status(200).send(post);
  } catch (error) {
    res.status(401).send({ Message: error });
  }
});

// 5 : GET Categories
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({ username: username });
    } else if (catName) {
      posts = await PostModel.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await PostModel.find();
    }

    res.status(200).send(posts);
  } catch (error) {
    res.status(401).send({ Message: error });
  }
});
module.exports = router;
