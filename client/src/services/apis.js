const { default: commonApiCall } = require("./apiCall");

export const register = async(data)=>{
    return await commonApiCall("POST","http://localhost:4600/register",data)
}

export const login = async(data)=>{
    return await commonApiCall("POST","http://localhost:4600/login",data)
}

export const createblog = async(data,config)=>{
    return await commonApiCall("POST","http://localhost:4600/create-blog",data,config)
}

