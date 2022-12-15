const mongoose = require("mongoose");

const receiveSchema = new mongoose.Schema(
  {
    providerName: {
      type: String,
      required: true,
    },
    providerPhone: {
      type: String,
    },
    productsImport: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantityImport: {
          type: Number,
        },
        priceImport: {
          type: Number,
        },
      },
    ],
    totalImport: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Receive", receiveSchema);
