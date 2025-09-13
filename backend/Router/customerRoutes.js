const express = require("express")
const router = express.Router()
const customerController = require("../controller/customerController")
const { vaerifyToken } = require("../middleware/Auth")

router.post("/create/customer", customerController.createCustomer)
router.post("/login/customer", customerController.customerLogin)
router.get("/read/customer", vaerifyToken, customerController.readCustomer)



module.exports = router
