import {Box, FormControl, styled, InputBase, Button, TextareaAutosize} from  "@mui/material"
import { useEffect, useState } from "react"

// import {AddCircle as Add} from "@"
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

    const [post,setPost] = useState({
        title:"",
        user:"",
        description:"",
        picture:"",
        categories:"",
        createDate: new Date()
    })

    const [preview,setPreview] = useState('')

    useEffect(()=>{
        if(post.picture){
            setPreview(URL.createObjectURL(post.picture))
        }
    },[post.picture])

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    console.log(post)

  return (
    <Container>
        <Image src={ preview ? preview : url} alt="picture" />

        <StyledFormControl>


            <label htmlFor="fileInput">
                Enter your File
            </label>
            <input type="file" id="fileInput" name="picture" onChange={(e)=>{setPost({...post,picture:e.target.files[0]})}} />
            <InputTextField placeholder="Title" name="title" onChange={(e)=>{setPost({...post,title:e.target.value})}} value={post.title}/>
            <Button variant="contained" >Publish</Button>

        </StyledFormControl>

        <TextArea 
            minRows={5} 
            placeholder="Tell your story..."
            onChange={(e)=>{setPost({...post,description:e.target.value})}} value={post.description}
        />


    </Container>
  )
}

export default BlogCreate