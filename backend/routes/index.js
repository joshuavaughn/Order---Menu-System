const express = require ('express');
const router = express.Router();

const getMenu = require ('./controller/getMenu')
const getReview = require ('./controller/getReview')
const getCheckout = require ('./controller/getCheckout')
const write = require ('./controller/write')

router.get ('/', getMenu)
router.get ('/reviews/:id', getReview)
router.get ('/checkout/:firstName/:lastName', getCheckout)
router.post ('/write', write)

module.exports = router;