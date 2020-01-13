// All Requires
const express = require("express");
const router = express.Router();
const crudOperationControllers = require("../controllers/crudOperationControllers");

// Handling The Router For Creating The Mentor
router.post("/create", crudOperationControllers.createMentor);

// Handling The Router For Reading The Mentor
router.get("/read", crudOperationControllers.readMentor);

// Handling The Router For Update The Mentor
router.put("/update/:id", crudOperationControllers.updateMentor);

// Handling The Router For Delete The Mentor
router.delete("/delete/:id", crudOperationControllers.deleteMentor);

// Exporting The Router
module.exports = router;
