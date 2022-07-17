const express = require('express');
const { saveFormData } = require('../controller/formController');

const router = express.Router();

router.post('/', saveFormData);

module.exports = router;
