const express = require ('express');
const router = express.Router();

const getMenu = require ('./controller/getMenu')
const getID = require ('./controller/getID')
const getRow = require ('./controller/getRow')
const getReview = require ('./controller/getReview')
const getCheckout = require ('./controller/getCheckout')
const write = require ('./controller/write')

router.get ('/', getMenu)
router.get ('/:orderID', getID)
router.get ('/getRow/:table', getRow)
router.get ('/reviews/:id', getReview)
router.get ('/checkout/:firstName/:lastName', getCheckout)
router.post ('/write', write)

module.exports = router;