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

export const getAllBlog = async(data,config)=>{
    // console.log(data)
    return await commonApiCall("Get",`http://localhost:4600/all-blog?category=${data}`,"",config)
}

export const getSingleBlog = async(data,config)=>{
    return await commonApiCall("Get",`http://localhost:4600/blog/${data}`,"",config)
}

export const deleteBlog = async(data,config)=>{
    return await commonApiCall("get",`http://localhost:4600/delete-blog/${data}`,"",config)
}

export const editBlog = async(id,data,config)=>{
    return await commonApiCall("POST",`http://localhost:4600/edit-blog/${id}`,data,config)
}

