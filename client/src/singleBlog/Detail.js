import { useEffect, useState, useContext } from 'react'
import { deleteBlog, getSingleBlog } from '../services/apis'
import { getAccessoken } from '../utils/common-utils'
import {useParams, useNavigate} from "react-router-dom"
import {Box, Typography, styled, Button} from "@mui/material"
import { dataContext } from '../contextApi/DataProvider'


const Container = styled(Box)`
    margin:50px 100px;
`
const Image = styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:"cover"
})

const Heading = styled(Typography)`
    font-size:38px;
    font-weight:600;
    text-align:center;
    margin:30px 0 10px 0
`

const Operation = styled(Box)`
    margin-top:15px;
    display:flex;
    flex-flow: row wrap;
    justify-content:space-between
` 

const Author = styled(Box)`
    color:#878787;
    margin:20px 0;
    display:flex;
`

const Detail = () => {

    const {account} = useContext(dataContext)
    const navigate = useNavigate()
    useEffect(()=>{
        getBlog()
    },[])
    
    const [data,setData] = useState([])

    const params = useParams()
    

    const getBlog = async() =>{
        try{
            const config = {"Authorization":getAccessoken()}
            const response = await getSingleBlog(params.id,config)
            setData(response.data.blog)

        }catch(err){

        }
    }

    const handleDelete = async()=>{
        const config = {"Authorization":getAccessoken()}
        const response = await deleteBlog(params.id,config)
        if(response.status===200){
            navigate("/")
        }else{
            alert("Something Went Wrong!!")
        }
    }


  return (
    <Container>
        <Image src={`http://localhost:4600/uploads/${data.picture}`} alt="blogimage" />

        {
            data.username === account.name ? 
            <Operation>
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined" color="error" onClick={(e)=>{handleDelete(e)}}>Delete</Button>
            </Operation> 
            : <></>
        }
        
        
        <Heading>{data.title}</Heading>

        <Author>
            <Typography> Author:- <Box component="span" styled={{fontWeight:'bold'}}> {data.username} </Box></Typography>
            <Typography style={{marginLeft:"auto"}} > {new Date(data.createDate).toDateString()}</Typography>
        </Author>

        <Typography>{data.description}</Typography>
    </Container>
  )
}

export default Detail