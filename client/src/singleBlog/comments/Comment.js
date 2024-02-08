import {Box, TextareaAutosize, Button, styled} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { dataContext } from "../../contextApi/DataProvider";
import { Addcomment } from "../../services/apis";
import { getAccessoken } from "../../utils/common-utils";

const Container = styled(Box)`
    margin-top:100px;
    display:flex;
`

const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
})

const StyledTextArea = styled(TextareaAutosize)`
    width:100%;
    height:150px;
    margin: 0 20px;
`

const Comment = (props) => {
    const {account} = useContext(dataContext)
    const url = 'https://static.thenounproject.com/png/12017-200.png'
    
    const [comment,setComment] = useState({
        name:'',
        postID:'',
        comments:'',
        createDate:new Date()
    })
    
    useEffect(()=>{
        
    },[])


    const handleChange = (e) =>{
        setComment({...comment,
            name:account.name,
            postID:props.post._id,
            comments:e.target.value
        })
    }
    // console.log(comment)

    const handlePost = async() =>{
        try{
            const config = {"Authorization":getAccessoken()}
            const data = await Addcomment(comment.postID,comment,config)
            console.log(data)
        }catch(err){

        }
    }
    
    return (
        <Box>
            <Container>
                <Image src={url} alt="comment" />
                <StyledTextArea
                    minRows={5}
                    placeholder="What's on your mind"
                    onChange={(e)=>{handleChange(e)}}
                    value={comment.comments}
                />
                <Button variant="contained" size="medium" style={{height:"40px"}} onClick={handlePost} >Post</Button>
            </Container>
            <Box>

            </Box>
        </Box>
  )

}

export default Comment;