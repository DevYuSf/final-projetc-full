const express = require("express")
const router = express.Router()
const customerController = require("../controller/customerController")

router.post("/create/customer", customerController.createCustomer)
router.post("/login/customer", customerController.customerLogin)



module.exports = router
