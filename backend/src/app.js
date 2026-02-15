require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const predictRoutes = require("./routes/predict.routes");
const cookieParser = require("cookie-parser");
const askAIRoutes = require("./routes/askai.routes");
const contactRoutes = require("./routes/contact.route");

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

// Prediction API

app.use("/api/auth", authRoutes);
app.use("/api", predictRoutes);
app.use("/api", askAIRoutes);
app.use("/api", contactRoutes);


module.exports = app;
