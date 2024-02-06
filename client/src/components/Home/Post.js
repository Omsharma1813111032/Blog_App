import {Box, Typography,  styled} from "@mui/material"

const Container =  styled(Box)`
    border:1px solid #d3cede;
    border-radius:10px;
    margin:10px;
    height:350px;
    text-align:center;
    & > p{
        padding:0 5px 5px 5px; 
    }
`

const Image = styled('img')({
    height:'50%',
    width:'100%',
    borderRadius:'10px 10px 0 0',
    objectFit:'cover'
})

const Text = styled(Typography)`
    color:#878787;
    font-size:12px;
    word-break:break-word;
`


const Post = ({post}) => {
  return (
    <Container>
        <Image src={`http://localhost:4600/uploads/${post.picture}`} alt="BlogImage"/>
        <Text>{post.categories}</Text>
        <Typography>{post.title}</Typography>
        <Typography> Author:-  {post.username}</Typography>
        <Typography>{post.description}</Typography>
    </Container>
  )
}

export default Post