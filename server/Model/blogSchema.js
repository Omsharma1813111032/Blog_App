const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        reuired:true
    },
    username:{
        type:String,
        reuired:true
    },
    categories:{
        type:String,
        reuired:true
    },createDate:{
        type:String,
        reuired:true
    }
})

const Blog = mongoose.model("blog",blogSchema)
module.exports = Blog