import {Box, FormControl, styled, InputBase, Button, TextareaAutosize} from  "@mui/material"
import { useContext, useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate, useParams} from "react-router-dom"
import { editBlog, getSingleBlog } from "../../services/apis";
import { getAccessoken } from "../../utils/common-utils";

// context api m se fetching user name
import { dataContext } from "../../contextApi/DataProvider"


const Container = styled(Box)`
    margin:50px 100px
`
const Image = styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
})

const StyledFormControl = styled(FormControl)`
    margin-top:10px;
    display:flex;
    flex-direction:row;
`

const InputTextField = styled(InputBase)`
    flex:1;
    margin:0 30px;
    font-size:20px;
`

const TextArea = styled(TextareaAutosize)`
    width:100%;
    margin-top:50px;
    font-size:18px;
    border:none;
    &:focus-visible{
        outline:none;
    }
`

const BlogEdit = () => {
    
    const [preview,setPreview] = useState('')
    const {account} = useContext(dataContext)
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const navigate = useNavigate()
    const [post,setPost] = useState({
        title:"",
        user:account.name,
        description:"",
        picture:"",
        categories:category?category:"All",
        createDate: new Date()
    })
    const params = useParams()
    const getData = async()=>{
        const config = {"Authorization":getAccessoken()}
        const response  = await getSingleBlog( params.id,config)
        let dt = response.data.blog
        post.title = dt.title
        post.description = dt.description
        post.categories = dt.categories
        post.user = dt.username
    }
    useEffect(()=>{
        getData()
        if(post.picture){
            setPreview(URL.createObjectURL(post.picture))
        }
    },[post.picture])



    



    // console.log(post)

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"


    const handlePublish = async(e)=>{
        e.preventDefault()
        const {title,user,description,categories} = post

        if(title==='' || user === "" || description === "" || categories === ""){
            toast.error("All values are required")
        }else{
            // to check valid token and image k liye header set krna important
            // "content-type":"multipart/form-data","Access-Control-Allow-Origin":"*",
            const config = {"Authorization":getAccessoken()}         

            const response = await editBlog(params.id,post,config)
            if(response.status===200){
                toast.success("updated")
                navigate(`/?category=${categories}`)
            }           
        }
    }

    // console.log(post)

  return (
    <Container>
        <Image src={ preview ? preview : url} alt="picture" />

        <StyledFormControl>

            <label htmlFor="fileInput">
                Enter your File
            </label>
            <input type="file" id="fileInput" name="picture" onChange={(e)=>{setPost({...post,picture:e.target.files[0]})}} required />
            <InputTextField placeholder="Title" name="title" onChange={(e)=>{setPost({...post,title:e.target.value})}} value={post.title}/>
            <Button variant="contained" onClick={(e)=>{handlePublish(e)}} >Update</Button>

        </StyledFormControl>

        <TextArea 
            minRows={5} 
            placeholder="Tell your story..."
            onChange={(e)=>{setPost({...post,description:e.target.value})}} value={post.description}
        />
    <ToastContainer/>
    </Container>
  )
}

export default BlogEdit