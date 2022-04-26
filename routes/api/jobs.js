const express = require ('express');
const router = express.Router();
const jobCtrl = require("../../controllers/jobs")

router.get('/', jobCtrl.index)

router.post('/new', jobCtrl.create);

module.exports = router;