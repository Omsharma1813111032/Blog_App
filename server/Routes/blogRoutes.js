const express = require("express")
const blogRouter = express.Router()
const blogController = require("../Controller/blogController")
const upload = require("../multer/ImageHandle")
const { valid } = require("../Middleware/jwtController")


blogRouter.post("/create-blog",upload.single("picture"),valid,blogController.create_blog)
blogRouter.get("/all-blog",valid,blogController.allblog)
blogRouter.get("/blog/:id",valid,blogController.singleBlog)
blogRouter.get("/delete-blog/:id",valid,blogController.deleteBlog)
blogRouter.post("/edit-blog/:id",upload.single("picture"),valid,blogController.editBlog)
blogRouter.post("/comment/:id",valid,blogController.addComment)
blogRouter.get("/get-comment/:id",valid,blogController.getComment)



module.exports = {blog:blogRouter}