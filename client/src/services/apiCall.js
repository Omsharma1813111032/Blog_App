import axios from "axios"


const commonApiCall = async(methods,url,body,header) =>{


    let config = {
        method:methods,
        url,
        headers:header? header:"Content-type/application",
        data:body
    }



    return await axios(config).then((res)=>{return res}).catch((err)=>{return err})




}

export default commonApiCall;