const orderModel = require("../model/orderModel")
const productModel = require("../model/productModel")

const createOrder = async (req, res) => {
    const { customer, products } = req.body

    if (!products || products.length === 0) {
        return res.status(400).json({ message: "product is required" })
    }

    let TotalAmount = 0
    let orders = []

    for (let items of products) {
        const productData = await productModel.findById(items.productId)

        if (!productData) {
            return res.status(400).json({ error: `this product not found` })
        }


        // total amount
        let price = productData.price
        let total = price * items.quantity
        TotalAmount += total

        // quntity
        if (items.quantity > productData.quantity) {
            return res.status(400).json({ message: "this product out of stock" })
        }

        productData.quantity -= items.quantity
        await productData.save()


        orders.push({
            productId: productData._id,
            quantity: items.quantity,
            price,
            total
        })

    }

    if (!customer) {
        return res.status(400).json({ message: "customer is required" })

    }

    const newData = new orderModel({
        customer,
        products: orders,
        TotalAmount
    })

    await newData.save()

    res.send(newData)

}

module.exports = { createOrder }