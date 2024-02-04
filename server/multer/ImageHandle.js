const multer = require("multer")

// storage config 
const storage = multer.diskStorage({
    // store kha pr krna h 
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },

    // name kya rkhna h 
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }

})

// if we want some extension of image are accepted like jpeg,png jpeg so for that makin filter    
const filefiler = (req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback( new Error("Only jpeg, png ,jpg files are accepted"))
    }
} 

const upload = multer({
    storage:storage,
    fileFilter:filefiler
})

module.exports = upload