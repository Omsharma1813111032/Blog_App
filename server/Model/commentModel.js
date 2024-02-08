const mongoose = require("mongoose")


const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    comments:{
        type:String,
        require:true
    },
    postId:{
        type:String,
        require:true
    },
    createDate:{
        type:String,
        require:true
    },
})

const commentModel = mongoose.model('comment',commentSchema)
module.exports = commentModel