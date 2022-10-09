const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const authController = {
  //[POST] /auth/register
  registerUser: async (req, res) => {
    try {
      const username = await User.findOne({ username: req.body.username });
      const phone = await User.findOne({ phone: req.body.phone });

      if (!username && !phone) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        //Create new user
        const newUser = await new User({
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          birthday: req.body.birthday,
          address: req.body.address,
          password: hashed,
        });

        //Save user to db
        const user = await newUser.save();
        return res.status(201).json(user);
      } else {
        if (username) {
          return res.status(500).json("Tên đăng nhập đã tồn tại");
        }
        if (phone) {
          return res
            .status(500)
            .json("Số điện thoại của bạn đã được đăng kí tài khoản khác");
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  //Generate access token
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.isAdmin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "300s" }
    );
  },

  //Generate refresh token
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.isAdmin,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "100d" }
    );
  },

  //[POST] /auth/login
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);
        //STORE REFRESH TOKEN IN COOKIE
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accessToken });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  //[POST] /auth/refresh request-refresh-token
  requestRefreshToken: async (req, res) => {
    //Take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      //Create new accesstoken, refresh token
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      return res.status(200).json({ accessToken: newAccessToken });
    });
  },

  //[POST] /auth/logout
  logOut: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return res.status(200).json("Logged out !");
  },
};

module.exports = authController;
