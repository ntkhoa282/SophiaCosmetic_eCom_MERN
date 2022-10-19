const authRouter = require("./auth");
const userRouter = require("./user");
const categoryRouter = require("./category");
const productRouter = require("./product");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/product", productRouter);
}

module.exports = route;
