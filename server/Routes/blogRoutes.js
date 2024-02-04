const express = require("express")
const blogRouter = express.Router()
const blogController = require("../Controller/blogController")
const upload = require("../multer/ImageHandle")


blogRouter.post("/create-blog",upload.single("picture"),blogController.create_blog)



module.exports = {blog:blogRouter}