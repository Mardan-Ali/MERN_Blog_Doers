// Category Schema
const mongoose = require("mongoose");
const CatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CatModel = new mongoose.model("Category", CatSchema);

module.exports = CatModel;
