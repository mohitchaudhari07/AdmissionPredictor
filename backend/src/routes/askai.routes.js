const express = require("express");
const askAIController = require("../controllers/askai.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/ask", authMiddleware.isAUthenticated, askAIController.askai);

module.exports = router;
