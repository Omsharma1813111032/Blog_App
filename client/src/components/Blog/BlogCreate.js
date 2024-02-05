import {Box, FormControl, styled, InputBase, Button, TextareaAutosize} from  "@mui/material"
import { useContext, useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
// context api m se fetching user name
import { dataContext } from "../../contextApi/DataProvider"
import { createblog } from "../../services/apis";
import { getAccessoken } from "../../utils/common-utils";


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

const BlogCreate = () => {

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

    const [preview,setPreview] = useState('')

    useEffect(()=>{
        if(post.picture){
            setPreview(URL.createObjectURL(post.picture))
        }
    },[post.picture])

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"


    const handlePublish = async(e)=>{
        e.preventDefault()
        const {title,user,description,picture,categories} = post

        if(title==='' || user === "" || description === "" || picture === "" || categories === ""){
            toast.error("All values are required")
        }else{
            console.log(post)

            // to check valid token and image k liye header set krna important
            const config = {"content-type":"multipart/form-data","Access-Control-Allow-Origin":"*","authorization":getAccessoken()}
            
            


            const response = await createblog(post,config)
            if(response.status===200){
                toast.success("uploaded")
                navigate(`/?category=${categories}`)
            }           
        }
    }


  return (
    <Container>
        <Image src={ preview ? preview : url} alt="picture" />

        <StyledFormControl>

            <label htmlFor="fileInput">
                Enter your File
            </label>
            <input type="file" id="fileInput" name="picture" onChange={(e)=>{setPost({...post,picture:e.target.files[0]})}} />
            <InputTextField placeholder="Title" name="title" onChange={(e)=>{setPost({...post,title:e.target.value})}} value={post.title}/>
            <Button variant="contained" onClick={(e)=>{handlePublish(e)}} >Publish</Button>

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

export default BlogCreate