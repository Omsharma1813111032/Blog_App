const Blog = require("../Model/blogSchema")

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

    // console.log(req.body)
    // // const fileName = req.file['filename']
    // console.log(req.file['filename'])

    const {id} = req.params
    const {title,description,picture} = req.body

    try{       

        const response = await Blog.findByIdAndUpdate(id,{
            title:title,
            description:description,
            picture:req.file['filename']
        })
        console.log(response)

        res.status(200).json({msg:"Success"})
        

    }catch(err){
        res.status(400).json({error:err})
    }

}