const mongoose  = require("mongoose")


const getcon = async() =>{
    const response = await mongoose.connect(process.env.DB_URL).then(()=>{console.log("Database running")}).catch((err)=>{console.log(err)})
}


getcon()