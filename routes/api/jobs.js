const express = require ('express');
const router = express.Router();
const jobCtrl = require("../../controllers/jobs")

router.post('/new', jobCtrl.create);

module.exports = router;