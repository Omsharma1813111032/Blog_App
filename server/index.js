require("dotenv").config()
const express  = require("express")
const cors = require('cors')
const app = express()
const authRoutes = require("./Routes/autRoutes")
require("./DB/dbCon")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000/"
}))
app.use(authRoutes)



app.listen(process.env.PORT,()=>{
    console.log("Server Running at port no. 4600")
})