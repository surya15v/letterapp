const express = require('express');

const { saveToDrive } = require('../controllers/driveController'); // Ensure this function is correctly imported

const router = express.Router();

router.post('/save', saveToDrive); // Ensure this function exists in driveController.js

module.exports = router;
