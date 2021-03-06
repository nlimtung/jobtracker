const express = require ('express');
const router = express.Router();
const jobCtrl = require("../../controllers/jobs")

router.get('/home', jobCtrl.home)
router.get('/', jobCtrl.index)
router.get('/rejected', jobCtrl.rejectedIndex)
router.get('/favourites', jobCtrl.favouritesList)

router.post('/new', jobCtrl.create);
router.put('/applied/:id/updatestatus', jobCtrl.updateStatus)
router.put('/applied/:id/favourite', jobCtrl.addToFavourite)


module.exports = router;