const authRouter = require("./auth");
const userRouter = require("./user");
const categoryRouter = require("./category");
const productRouter = require("./product");
const cartRouter = require("./cart");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/product", productRouter);
  app.use("/cart", cartRouter);
}

module.exports = route;
