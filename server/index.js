require("dotenv").config()
const express  = require("express")
const cors = require('cors')
const app = express()
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}))
app.use("/uploads",express.static("./uploads"))
app.use(express.json())
const authRoutes = require("./Routes/autRoutes")
const {blog} = require("./Routes/blogRoutes")

require("./DB/dbCon")

app.use(authRoutes)
app.use(blog)
app.use(express.urlencoded({ extended: true }))



app.listen(process.env.PORT,()=>{
    console.log("Server Running at port no. 4600")
})