const mongoose  = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    } 
}, {
    timestamps: true 
})


userSchema.pre("save",async function(next){
    this.password =await bcrypt.hash(this.password,12)
    next()
})


userSchema.methods.isPasswordMatch = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

userSchema.methods.tokenGenrate = async function(id,email){
    return await jwt.sign({id,email},process.env.SECRET_KEY);
}

const userModel = mongoose.model("users",userSchema)


module.exports =  userModel