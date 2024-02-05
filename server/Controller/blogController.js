const Blog = require("../Model/blogSchema")

exports.create_blog = async(req,res)=>{

    const fileName = req.file['filename']
    // console.log(fileName)

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