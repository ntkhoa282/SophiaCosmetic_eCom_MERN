const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//add plugin
mongoose.plugin(slug);

module.exports = mongoose.model("Category", categorySchema);
