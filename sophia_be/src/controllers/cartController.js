const Cart = require("../models/Cart");

const cartController = {
  //[POST] /cart/create
  createCart: async (req, res) => {
    const newCart = await new Cart(req.body);
    try {
      const savedCart = await newCart.save();
      return res.status(200).json(savedCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[POST] /cart/addtocart
  addToCart: async (req, res) => {
    const id = req.body.userID;

    const { productID, quantity, option } = req.body;

    try {
      let cart = await Cart.findOne({ userID: id });

      if (cart) {
        //cart exists for user
        let itemIndex = cart.products.findIndex(
          (p) => p.productID == productID
        );

        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        } else {
          //product does not exists in the cart, add new item
          cart.products.push({ productID, quantity, option });
        }
        cart = await cart.save();
        const savedCart = await cart.populate({
          path: "products",
          populate: {
            path: "productID",
          },
        });
        return res.status(200).json(savedCart);
      } else {
        //no cart for user, create new cart
        const newCart = await Cart.create({
          userID: id,
          products: [{ productID, quantity, option }],
        });
        const savedCart = await newCart.populate({
          path: "products",
          populate: {
            path: "productID",
          },
        });
        return res.status(200).json(savedCart);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /cart/user-cart/:id
  getUserCart: async (req, res) => {
    try {
      const userCart = await Cart.findOne({
        userID: req.params.id,
      }).populate({
        path: "products",
        populate: {
          path: "productID",
        },
      });
      return res.status(200).json(userCart);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  //[PUT] /cart/removeitem
  removeProductInCart: async (req, res) => {
    try {
      const userId = req.query.user;
      const prodId = req.query.prod;

      let cart = await Cart.findOne({ userID: userId });

      if (cart) {
        //cart exists for user
        let itemIndex = await cart.products.findIndex(
          (p) => p.productID == prodId
        );

        if (itemIndex > -1) {
          await Cart.updateMany({
            $pull: { products: cart.products[itemIndex] },
          });
          cart = await Cart.findOne({ userID: userId }).populate({
            path: "products",
            populate: {
              path: "productID",
            },
          });
        }
        res.status(200).json(cart);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = cartController;
