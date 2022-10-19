const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: {
        type: String,
        default: "image/png",
      },
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    sold: {
      type: Number,
      default: 0,
    },
    option: {
      type: Array,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    slug: { type: String, slug: "title", unique: true },
  },
  {
    timestamps: true,
  }
);

//add plugin
mongoose.plugin(slug);

module.exports = mongoose.model("Product", productSchema);
