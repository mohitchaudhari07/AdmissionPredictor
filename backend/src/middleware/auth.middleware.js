const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// Middleware to check if user is authenticated
async function isAUthenticated(req, res, next) {
  const token =  (req.cookies && req.cookies.token) ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);


  if (!token) {
    return res.status(401).json({ message: "Unauthorizedtokenmissing"});
  }
  try {
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined in auth middleware");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.userId || decoded.id || decoded._id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = {
  isAUthenticated,
};
