const express = require("express");
const { register, login, getDashboard } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", protect, getDashboard);

module.exports = router;