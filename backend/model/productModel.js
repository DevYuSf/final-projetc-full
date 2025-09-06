const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc: {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    prImage: {
        type:String,
        required:true

    },
    status: {
        type: String,
        enum: ["Available", "out of stock"], 
        default: "Available"
    }

},
{timestamps: true}
)

productScheme.plugin(AutoIncrement, { inc_field: 'prId' });


module.exports = mongoose.model("product", productScheme)