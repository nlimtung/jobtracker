const express = require ('express');
const router = express.Router();
const jobCtrl = require("../../controllers/jobs")

router.get('/', jobCtrl.index)
router.get('/rejected', jobCtrl.rejectedIndex)

router.post('/new', jobCtrl.create);
router.put('/applied/:id/updatestatus', jobCtrl.updateStatus)

module.exports = router;