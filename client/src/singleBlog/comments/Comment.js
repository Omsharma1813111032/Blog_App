import {Box, TextareaAutosize, Button, styled} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { dataContext } from "../../contextApi/DataProvider";
import { Addcomment, getComment } from "../../services/apis";
import { getAccessoken } from "../../utils/common-utils";
import {useParams} from "react-router-dom"
import DisplayComment from "./DisplayComment";

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
    
    const params = useParams();
    // console.log(params.id)
    const {account} = useContext(dataContext)
    const url = 'https://static.thenounproject.com/png/12017-200.png'
    let config = {"Authorization":getAccessoken()}
    const [toggle,setToggle] = useState(false)
    const [showComment,setShowComment] = useState([])
    
    const getData = async() =>{
        try{
            const response = await getComment(params.id,config)
            setShowComment(response.data.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData()
    },[props.post,toggle])
    
    const [comment,setComment] = useState({
        name:'',
        postId:'',
        comments:'',
        createDate:new Date()
    })
    

    const handleChange = (e) =>{
        setComment({...comment,
            name:account.name,
            postId:props.post._id,
            comments:e.target.value
        })
    }
    // console.log(comment)

    const handlePost = async() =>{
            const config = {"Authorization":getAccessoken()}
            const data = await Addcomment(comment.postId,comment,config)
            console.log(data)
            setToggle(prev=>!prev)
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
                {
                    showComment && showComment.length>0 ? showComment.map(comment=>(
                        <DisplayComment comments={comment}  />
                    )) : "There is no comment"
                 }
            </Box>
        </Box>
  )

}

export default Comment;