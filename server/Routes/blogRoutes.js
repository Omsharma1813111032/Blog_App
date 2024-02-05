const express = require("express")
const blogRouter = express.Router()
const blogController = require("../Controller/blogController")
const upload = require("../multer/ImageHandle")
const { valid } = require("../Middleware/jwtController")


blogRouter.post("/create-blog",upload.single("picture"),valid,blogController.create_blog)
blogRouter.get("/all-blog",valid,blogController.allblog)



module.exports = {blog:blogRouter}