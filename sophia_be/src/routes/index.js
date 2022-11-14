const authRouter = require("./auth");
const userRouter = require("./user");
const categoryRouter = require("./category");
const productRouter = require("./product");
const cartRouter = require("./cart");
const orderRouter = require("./order");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/product", productRouter);
  app.use("/cart", cartRouter);
  app.use("/order", orderRouter);
}

module.exports = route;
