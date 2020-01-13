// All Requires
const express = require("express");
const router = express.Router();
const Mentor = require("../controllers/mentorControllers");

// Handling The Mentor Router For Registration
router.post("/register", Mentor.mentorRegistration);

// Exporting The Router
module.exports = router;
