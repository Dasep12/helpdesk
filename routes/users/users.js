const express		= require('express');
const router		= express.Router();

const controller 		= require('../../controllers/users/users');
const controllerKirim 	= require('../../controllers/users/compose');

router.get('/', controller.dashboard);
router.get('/compose',controllerKirim.kirim);


module.exports = router ;