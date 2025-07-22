const express = require("express");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Login User
router.get("/profile", protect, getUserProfile); // Get User Profile
router.put("/profile",protect, updateUserProfile); // Update Profile

module.exports = router;