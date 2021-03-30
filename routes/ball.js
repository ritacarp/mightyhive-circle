var express = require('express');
var router = express.Router();

// Require controller modules.
var ball_controller = require('../controllers/ballController');



// GET ball home page.
router.get('/', ball_controller.index);


module.exports = router;
