const express = require("express");
//router object
const router = express.Router();
// authController
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} = require("../controllers/authController");
// middelwares
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

//routing
//REGISTER || MOTHOD POST
router.post("/register", registerController);
//LOGIN || MOTHOD POST
router.post("/login", loginController);
//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);
//TEST || GET
router.get("/test", requireSignIn, isAdmin, testController);
//protected User route auth
router.get("/user-auth", requireSignIn, async (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, async (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
