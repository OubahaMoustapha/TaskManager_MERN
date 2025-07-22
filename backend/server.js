require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-type","Authorization"],
    })
);


// Middleware
app.use(express.json());



//Routes
// app.use("/api/auth",authRoutes);
// app.use("/api/users",userRoutes);
// app.use("/api/tasks",taskRoutes);
// app.use("/api/reports",reportRoutes);

//Start the server
const PORT = process.env.PORT || 5000;