const User = require("../Model/userSchema")
exports.register = async(req,res) =>{

    console.log(req.body)

    const {name,email,password} = req.body

    if(name==="" || email==="" || password===""){
        res.status(400).json({error:"Fill all values"})
    }else{

        try{

            const existUser = await User.findOne({email:email})
            // console.log(existUser)
            if(!existUser){
            
                const data = await new User({name:name,email:email,password:password})
                const response = await data.save()
    
                res.status(200).json({msg:"Successfuly created", data:response})
                
            }else{
                res.status(400).json({err:"User already exists"})
            }



        }catch(err){
            res.status(400).json({error:err})
        }


    }




}


exports.login = async(req,res) =>{
    // console.log(req.body)
    const {email,password} = req.body

    if(email==="" || password===""){
        res.status(400).json({error:"Fill all fields"})

    }else{        
        try{
            const verifyUser = await User.findOne({email:email})
            if(!verifyUser){
                res.status(400).json({error:"User Does Not Exists"})
            }else{
                
                let verifypassword = await verifyUser.isPasswordMatch(password)
                
                if(!verifypassword){
                    res.status(400).json({error:"Password Does Not match"})
                }else{

                    const token = await verifyUser.tokenGenrate(verifyUser._id,verifyUser.email)
                    // console.log(token)
                    res.status(200).json({token:token,data:verifyUser})

                }


            }
            
        }catch(err){
            res.status(400).json({error:err})
        }


    }







}