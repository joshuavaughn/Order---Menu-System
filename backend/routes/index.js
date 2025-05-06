const express = require ('express');
const router = express.Router();

const getMenu = require ('./controller/getMenu')
const getFoodID = require ('./controller/getFoodID')
const getReview = require ('./controller/getReview')
const getCheckout = require ('./controller/getCheckout')
const write = require ('./controller/write')

router.get ('/', getMenu)
router.get ('/foodID', getFoodID)
router.get ('/reviews/:id', getReview)
router.get ('/checkout/:firstName/:lastName', getCheckout)
router.post ('/write', write)

module.exports = router;