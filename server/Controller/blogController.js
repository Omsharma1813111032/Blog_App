const Blog = require("../Model/blogSchema")
const Comment = require("../Model/commentModel")

exports.create_blog = async(req,res)=>{

    const fileName = req.file['filename']
    const {title,description,user,categories,createDate} = req.body

    try{
        const postData =new Blog({
            title:title,
            username:user,
            description:description,
            picture:fileName,
            createDate:createDate,
            categories:categories
        })
       await postData.save()
       res.status(200).json({msg:"posted successfully",postData})

    }catch(error){
        res.status(500).json(error)
    }

}


exports.allblog = async(req,res)=>{

    try{    
        
        const {category} = req.query
        // console.log(category)
        let queryBuilder = Blog.find()


        if(category){
            queryBuilder = Blog.find({
                categories:category
            }) 
        }
        
        if(category==='null'){
            queryBuilder = Blog.find()
        }
       
        const data = await queryBuilder
        res.status(200).json(data)


    }catch(err){
        res.status(400).json({error:err})
    }
}



exports.singleBlog = async(req,res) =>{
    try{
        
        const {id} = req.params

        try{

            const response = await Blog.findById(id)
            res.status(200).json({blog:response})

        }catch(err){
            res.status(400).json("Something Went Wrong!!")
        }


    }catch(err){
        res.status(400).json("Something Went Wrong!!")
    }
}


exports.deleteBlog = async(req,res)=>{
    try{
        
        const {id} = req.params

        try{

            const response = await Blog.findByIdAndDelete(id)
            res.status(200).json({blog:response})

        }catch(err){
            res.status(400).json("Something Went Wrong!!")
        }


    }catch(err){
        res.status(400).json("Something Went Wrong!!")
    }
}


exports.editBlog = async(req,res) => {

    const {id} = req.params
    const {title,description} = req.body

    try{       

        const response = await Blog.findByIdAndUpdate(id,{
            title:title,
            description:description,
            picture:req.file['filename']
        })

        res.status(200).json({msg:"Success"})
        

    }catch(err){
        res.status(400).json({error:err})
    }
    
}


exports.addComment = async(req,res) => {
    // console.log(req.body)
    try{
        const data = new Comment(req.body)
        await data.save()
        res.status(200).json({msg:"SuccessFull",data})
    }catch(err){
        res.status(400).json({error:err})
    }
}

exports.getComment = async(req,res) => {
    // console.log(req.params.id)
    try{
        const data = await Comment.find({postId:req.params.id})
        res.status(200).json({msg:"SuccessFull",data})
    }catch(err){
        res.status(400).json({error:err})
    }
}

