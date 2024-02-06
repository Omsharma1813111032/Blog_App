import { useEffect, useState } from 'react'
import { getAllBlog } from '../../services/apis'
import { getAccessoken } from '../../utils/common-utils'
import {Box, Grid} from "@mui/material"
import { Link, useSearchParams } from 'react-router-dom'
import Post from './Post'


const Blog = () => {
   
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    useEffect(()=>{
        getData()
    },[category])


    const getData = async(req,res)=>{
        const config = {"Authorization":getAccessoken()}
        const response = await getAllBlog(category,config)
        setData(response.data)
    }

    const [data,setData] = useState([])


  return (
    <>
        <Grid container>
            {
                data.length > 0 && data ? data.map(
                    post=>(
                        <Grid item lg={3} sm={4} xs={12} key={post._id}>
                            <Link to={`/blog/${post._id}`}  style={{textDecoration:"none",color:"inherit"}}>
                                <Post post={post} />
                            </Link>
                        </Grid>
                    ))
                    : <Box style={{color:"#878787", margin:'30px 80px',fontSize:"18px"}} >No Data Avialable</Box>
                }

        </Grid>
    </>
  )
}

export default Blog