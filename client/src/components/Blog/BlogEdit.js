import {Box, FormControl, styled, InputBase, Button, TextareaAutosize} from  "@mui/material"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate, useParams} from "react-router-dom"
import { editBlog, getSingleBlog } from "../../services/apis";
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

const BlogEdit = () => {

    const params = useParams()
    const [post,setPost] = useState([])

    const getData = async(req,res) =>{
        let config = {"Authorization":getAccessoken()}
        const data = await getSingleBlog(params.id,config)
        setPost(data.data.blog)
    }   

    useEffect(()=>{
        getData()
    },[])

    const navigate = useNavigate()

    const handleUpdate = async(req,res) =>{

        try{

            let config = {"content-type":"multipart/form-data","Access-Control-Allow-Origin":"*","authorization":getAccessoken()}
            const response = await editBlog(params.id,post,config)
            if(response.status===200){
                navigate(`/?category=${post.categories}`)
            }else{
                toast.error("Something went wrong!!")
            }

        }catch(err){
            toast.error("Something went wrong!!")
        }
        
    }

    const img_url = `http://localhost:4600/uploads/${post.picture}`


  return (
    <Container>
        <Image src={img_url} alt="picture" />

        <StyledFormControl>
            <label htmlFor="fileInput">
                Enter your File
            </label>
            <input type="file" id="fileInput" name="picture" onChange={(e)=>{setPost({...post,picture:e.target.files[0]})}}  />
            <InputTextField placeholder="Title" name="title" value={post.title}  onChange={(e)=>{setPost({...post,title:e.target.value})}} />
            <Button variant="contained" onClick={handleUpdate} >Update</Button>
        </StyledFormControl>

        <TextArea 
            minRows={5} 
            placeholder="Tell your story..."
            value={post.description}
            onChange={(e)=>{setPost({...post,description:e.target.value})}}
        />
        <ToastContainer/>
    </Container>
  )
}

export default BlogEdit