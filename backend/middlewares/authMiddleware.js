const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");
//Protected Routes token base
const requireSignIn = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      const decoded = JWT.verify(token, process.env.JWT_SECRET);

      req.user = decoded;
      console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
    }
};
//admin acceess
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access ",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};

module.exports = { requireSignIn, isAdmin };
