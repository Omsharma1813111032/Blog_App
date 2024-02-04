import axios from "axios"


const commonApiCall = async(methods,url,body,header) =>{

    // console.log(body)

    let config = {
        method:methods,
        url,
        data:body,
        headers:header? header:{"Content-type":"application/json"},
    }



    return await axios(config).then((res)=>{return res}).catch((err)=>{return err})




}

export default commonApiCall;