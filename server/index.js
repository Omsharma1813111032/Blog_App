require("dotenv").config()
const express  = require("express")
const cors = require('cors')
const app = express()
app.use("/uploads",express.static("./uploads"))
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}))
const authRoutes = require("./Routes/autRoutes")
const {blog} = require("./Routes/blogRoutes")

require("./DB/dbCon")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(authRoutes)
app.use(blog)



app.listen(process.env.PORT,()=>{
    console.log("Server Running at port no. 4600")
})