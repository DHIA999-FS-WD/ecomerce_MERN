const express = require("express");
//router object
const router = express.Router();
// authController
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");
// middelwares
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

//routing
//REGISTER || MOTHOD POST
router.post("/register", registerController);
//LOGIN || MOTHOD POST
router.post("/login", loginController);
//TEST || GET
router.get("/test", requireSignIn, isAdmin, testController);

module.exports = router;
