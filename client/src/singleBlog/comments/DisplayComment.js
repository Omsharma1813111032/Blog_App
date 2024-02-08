import {Box, Typography, styled} from "@mui/material"


const Component = styled(Box)`
    margin-top:30px;
    background:#F5F5F5;
    padding:10px;
` 

const Container = styled(Box)`
    display:flex;
    margin-bottom:10px;
`

const Name = styled(Typography)`
    font-weight:600;
    font-size:18px;
    margin-right:20px;
`

const StyleDate = styled(Typography)`
    color:#878787;
    font-size:14px;
`

const DisplayComment = ({comments}) => {
  return (
    <Component>
        <Container>
            <Name> {comments.name} </Name>
            <StyleDate> {new Date(comments.createDate).toDateString()} </StyleDate>
        </Container>
        <Box>
            <Typography> {comments.comments} </Typography>
        </Box>
    </Component>
  )
}

export default DisplayComment