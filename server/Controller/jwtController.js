const jwt = require("jsonwebtoken")

exports.valid = (req,res,next) =>{
    const tok = req.headers['authorization']

    if(tok===null){
        res.status(404).json({error:"UnAuthorize Access"})
    }else{
        const validToken = jwt.verify(tok,process.env.SECRET_KEY)
    
    
        if(!validToken.id){
            res.status(404).json({error:"UnAuthorize Access "})
        }
    
        next()
    }

}