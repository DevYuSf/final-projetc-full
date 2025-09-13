const jwt = require("jsonwebtoken")
require("dotenv").config()

const vaerifyToken = (req,res,next) => {
    const token = req.headers["authorization"]
    if(!token){
        return res.status(401).json({meassge: "no token provided"})
    }
    try{
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_Secret)
        req.user = decoded
        next()

    }catch(error){
        return res.status(401).json({message: "invalid token"})
    }

}

module.exports = {vaerifyToken}