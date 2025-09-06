const productModel = require("../model/productModel")

const createProduct = async (req, res) => {
    try {
        const { name, price, desc, quantity } = req.body
        const newData = productModel({
            name: name,
            price: price,
            desc:desc,
            quantity:quantity,
            prImage: req.file.filename
        })
        await newData.save()
        res.send(newData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

//read
const readProduct = async(req,res) => {
    try{
        const readData = await productModel.find()
        if(readData){
            res.send(readData)
        }
    } catch(error) {
        res.status(400).json({message: error.message})

    }
}
//read-single

const readSingleProduct = async(req,res) => {
    try{
        const getData = await productModel.find({_id: req.params.id})
        if(getData){
        res.send(getData)
    }
    } catch(error){
        res.status(400).json({message: error.message})

    }
}

//update

const updateProduct = async(req,res) => {
    try{
        const { name, price, desc, quantity } = req.body
        const updateData = await productModel.updateOne(
            {_id: req.params.id},
            {$set: {
                name: name,
                price: price,
                desc: desc,
                quantity: quantity,
                prImage: req.file ? req.file.filename : undefined

            }}
        )
        if(updateData){
            res.send("succes update")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

// delete

const deleteProduct = async(req,res) => {
    try{
        const deleteData = await productModel.deleteOne({_id:req.params.id})
        if(deleteData){
            res.send("succes delete")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports = { createProduct, readProduct, readSingleProduct, updateProduct, deleteProduct }
