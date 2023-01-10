const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Database connection
try {
  mongoose.set('strictQuery', true);
  mongoose.connect("mongodb://127.0.0.1:27017/MyHelthRole");
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
