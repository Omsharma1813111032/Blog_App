const express = require("express")
const blogRouter = express.Router()
const blogController = require("../Controller/blogController")
const upload = require("../multer/ImageHandle")
const { valid } = require("../Middleware/jwtController")


blogRouter.post("/create-blog",upload.single("picture"),valid,blogController.create_blog)
blogRouter.get("/all-blog",valid,blogController.allblog)
blogRouter.get("/blog/:id",valid,blogController.singleBlog)
blogRouter.get("/delete-blog/:id",valid,blogController.deleteBlog)
blogRouter.post("/edit-blog/:id",valid,blogController.editBlog)



module.exports = {blog:blogRouter}