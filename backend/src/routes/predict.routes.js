const express = require("express");
const router = express.Router();
const predictController = require("../controllers/predict.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Protect the prediction route with authentication middleware
router.post(
  "/predict",
  authMiddleware.isAUthenticated,
  predictController.predict,
);

module.exports = router;
