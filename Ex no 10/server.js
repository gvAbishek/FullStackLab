const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");

// dotenv.config();

const app = express();
const PORT =5005;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/kavi", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));